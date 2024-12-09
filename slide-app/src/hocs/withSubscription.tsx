import React, { CSSProperties, useEffect, useState } from "react";
import useGameStore from "src/hooks/useGameStore";
import {
  createRenderFunctions,
  processStyles,
} from "src/shared/utils/functions";

const withSubscription = (WrappedComponent) => {
  const NewComponent = ({ text, state, subscription, styles, ...props }) => {
    const [innerHtml, setInnerHtml] = useState(text?.default);
    const [subscribedStyles, setSubscribedStyles] = useState({});
    // @ts-ignore
    const { setGameState } = useGameStore();

    useEffect(() => {
      if (state && subscription) {
        const { sources, renderFunctions: renderFunctionTemplate } =
          subscription;
        const data = sources?.reduce((result: any, source: any) => {
          const sourceValue = state?.[source.subscribeTo];
          if (sourceValue !== undefined) {
            result[source.id] = sourceValue;
          }
          return result;
        }, {});

        if (!renderFunctionTemplate) return;

        createRenderFunctions(renderFunctionTemplate, data, setGameState);

        const newText = text?.subscribeTo
          ? data[text.subscribeTo]
          : text?.default;

        const processedStyles = processStyles(styles, data);

        setSubscribedStyles(processedStyles);
        setInnerHtml(newText || "");
      }
    }, [state, subscription, text]);
    return (
      <WrappedComponent
        subscribedStyles={subscribedStyles}
        innerHtml={innerHtml}
        styles={styles}
        {...props}
      />
    );
  };

  return NewComponent;
};

export default withSubscription;
