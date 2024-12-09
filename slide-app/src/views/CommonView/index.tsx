import React, { CSSProperties, useState } from "react";
import { v4 } from "uuid";

import { EditorDiv, Div, EAFDdiv, EAFdiv } from "../../components/custom/Divs";
import withDeviceDetection from "../../hocs/withDeviceDetection";
import { ROOTSTYLE } from "../../utils/constant";

interface CommonViewProps {
  viewType?: "FULLSCREEN" | string;
  isMobile?: boolean;
  noEA?: boolean;
  editable?: boolean;
  data: any;
  state: any;
  [key: string]: any;
}

const CommonView: React.FC<CommonViewProps> = ({
  viewType = "FULLSCREEN",
  isMobile = false,
  noEA = false,
  editable = false,
  data,
  state,
  ...handlers
}) => {
  const { landscape, portrait } = data;
  const [selected, setSelected] = useState<string | null>(null);

  const renderContent = (content: any) => {
    let rootStyles: CSSProperties =
      ROOTSTYLE[viewType as keyof typeof ROOTSTYLE];

    if (!content) {
      return null;
    }

    const rootObjects = content?.divs?.filter((obj: any) => !obj.parent);
    const newStyles = content?.divs?.filter(
      (obj: any) => obj.id === "root-div"
    );

    if (newStyles) {
      newStyles.forEach((div: any) => {
        rootStyles = {
          ...rootStyles,
          ...div.styles,
        };
      });
    }

    const randomSuffix = v4();

    const renderDivs = (divs: any, haveParent: boolean) => {
      return divs.map((div: any, index: number) => {
        if (div.id === "root-div") {
          return null;
        }

        const commonProps = {
          id: div.id,
          styles: { ...div.styles },
          variant: div.variant,
          src:
            div.variant === "video" || div.variant === "iframe"
              ? div.src
              : div.imageUrl,
          text: div.text,
          events: div.events,
          state: state,
          handlers: handlers,
          subscription: div.subscription,
          animations: div.animations,
          parent: div.parent,
          tabIndex: index,
          haveParent,
          draggable: div.draggable || false,
          className: div.className,
          accepting: div.accepting,
          editable,
          selected,
          setSelected,
          autoPlay: div.autoPlay,
          loop: div.loop,
          muted: div.muted,
          controls: div.controls,
          inputType: div.inputType,
          href: div.href,
          alt: div.alt,
          placeholder: div.placeholder,
          value: div.value,
          checked: div.checked,
          min: div.min,
          max: div.max,
        };

        const children = content.divs.filter(
          (child: any) => child.parent === div.id
        );
        const childElements =
          children.length > 0 ? renderDivs(children, true) : null;

        const DivComponent = editable
          ? EditorDiv
          : noEA
          ? Div
          : div.draggable
          ? EAFDdiv
          : EAFdiv;

        return (
          <DivComponent key={commonProps.id} {...commonProps}>
            {childElements}
          </DivComponent>
        );
      });
    };

    return (
      <div
        id={editable ? "root-div" : `root-div-${randomSuffix}`}
        style={rootStyles}
      >
        {content.divs && renderDivs(rootObjects, false)}
      </div>
    );
  };

  return (
    <>
      {editable && (
        <div
          id="editor-root"
          style={ROOTSTYLE[viewType as keyof typeof ROOTSTYLE]}
        ></div>
      )}
      <div id="commonview-div">
        {renderContent(isMobile ? portrait : landscape)}
      </div>
    </>
  );
};

const ResponsiveView = withDeviceDetection(CommonView);

const IconView: React.FC<CommonViewProps> = (props) => (
  <CommonView {...props} noEA={true} />
);

export { ResponsiveView, CommonView, IconView };
