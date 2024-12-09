import React, { CSSProperties, useRef, forwardRef, useEffect } from "react";
import withAnimationHandlers from "../../../hocs/withAnimationHandlers";
import withEventHandlers from "../../../hocs/withEventHandlers";
import withDragHandlers from "../../../hocs/withDragHandlers";
import withFocusHandlers from "../../../hocs/withFocusHandlers";
import withSubscription from "src/hocs/withSubscription";
import useGameStore from "src/hooks/useGameStore";
import { debounce } from "src/shared/utils/functions";
import "../../shared/KeyFrames.css";

interface DivProps {
  children?: React.ReactNode;
  styles?: CSSProperties;
  id: string;
  text?: string;
  src?: string;
  variant?: "div" | "video" | "audio" | "image" | "link" | "input" | "iframe";
  inputType?: string;
  position?: { x: number; y: number };
  handleDrag?: any;
  handleEvent?: any;
  tabIndex?: number;
  refContext?: React.RefObject<HTMLElement>;
  dragRef?: any;
  parent?: string;
  haveParent?: boolean;
  draggable?: boolean;
  className?: string;
  accepting?: boolean;
  innerHtml?: string;
  subscribedStyles?: CSSProperties;
  selectedCurrent?: boolean;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  controls?: boolean;
  href?: string;
  alt?: string;
  placeholder?: string;
  value?: string | number;
  checked?: boolean;
  min?: string | number;
  max?: string | number;
}

const Div = forwardRef<HTMLElement, DivProps>(
  ({
    id,
    variant = "div",
    text = "",
    src,
    styles = {},
    position,
    handleDrag,
    handleEvent,
    children,
    tabIndex,
    haveParent = false,
    draggable = false,
    className,
    accepting,
    innerHtml,
    subscribedStyles = {},
    selectedCurrent = false,
    autoPlay = false,
    loop = false,
    muted = false,
    controls = true,
    inputType,
    href,
    alt,
    placeholder,
    value,
    checked,
    min,
    max,
  }) => {
    const internalRef = useRef<HTMLElement>(null);

    const getStyles = (): CSSProperties => ({
      ...(haveParent
        ? {}
        : {
            position: "absolute",
            top: !draggable ? "50%" : undefined,
            left: !draggable ? "50%" : undefined,
            transform: !draggable ? "translate(-50%, -50%)" : undefined,
          }),
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      ...styles,
      ...subscribedStyles,
      ...(handleDrag && {
        left: position?.x,
        top: position?.y,
      }),
      opacity: selectedCurrent ? 0 : 1,
      ...(variant !== "video" &&
        variant !== "audio" &&
        variant !== "image" &&
        src && {
          backgroundImage: `url(${src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }),
    });

    const elementProps = {
      id,
      ref: internalRef,
      tabIndex,
      className,
      "data-accepting": accepting,
      ...handleDrag,
      style: getStyles(),
      ...(variant !== "video" &&
        variant !== "audio" &&
        handleEvent?.reduce((acc: any, { trigger, handler }: any) => {
          acc[trigger] = (e: any) => handler(e, GameState);
          return acc;
        }, {})),
    };

    const setGameState = useGameStore((state) => state.setGameState);

    switch (variant) {
      case "video":
      case "audio":
        return React.createElement(
          "div",
          elementProps,
          React.createElement(
            variant,
            {
              src,
              autoPlay,
              loop,
              muted,
              controls,
            },
            "Your browser does not support this media type."
          )
        );
      case "image":
        return React.createElement("img", { ...elementProps, src, alt });
      case "link":
        return React.createElement(
          "a",
          { ...elementProps, href, text },
          children
        );
      case "input":
        return React.createElement("input", {
          ...elementProps,
          type: inputType,
          text: value,
          placeholder,
          value,
          checked,
          min,
          max,
          onChange: debounce((e) => {
            const newValue = e.target.value;
            console.log("New value:", newValue);
            setGameState({ [elementProps.id]: newValue });
          }, 1000),
        });
      case "iframe":
        return React.createElement(
          "div",
          elementProps,
          React.createElement("iframe", { src: src })
        );
      default:
        return React.createElement(
          variant,
          elementProps,
          text || innerHtml || children
        );
    }
  }
);

const EditorDiv = Div;
const EAFdiv = withEventHandlers(
  withAnimationHandlers(withFocusHandlers(withSubscription(Div)))
);
const EAFDdiv = withEventHandlers(
  withAnimationHandlers(withFocusHandlers(withDragHandlers(Div)))
);

export { Div, EditorDiv, EAFdiv, EAFDdiv };
