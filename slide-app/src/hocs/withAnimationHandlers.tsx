import React, { useEffect } from "react";

interface Animation {
  direction: any;
  fillMode?: any;
  type: string;
  duration: number;
  delay: number;
  timingFunction?: string;
  iterationCount?: number;
  trigger: string;
  event?: string;
  callback?: string;
  callbackPayload?: string;
}

const withAnimationHandlers = (WrappedComponent) => {
  const NewComponent = ({ animations, selectActionHandler, ...props }) => {
    const { id } = props;

    const applyAnimations = (filteredAnimations: Animation[]): void => {
      if (!filteredAnimations) return;

      const targetId = id;
      const element = document.getElementById(targetId);

      if (element) {
        const combinedAnimation = filteredAnimations
          .map((animation) => {
            const { callback, duration, callbackPayload } = animation;

            // console.log(callback, callbackPayload, duration);

            if (
              callback &&
              duration &&
              callbackPayload &&
              typeof duration === "number"
            ) {
              setTimeout(() => {
                selectActionHandler({
                  type: callback,
                  payload: callbackPayload,
                });
              }, duration * 1000);
            }

            return `${animation.type} ${animation.duration}s ${
              animation.delay
            }s ${
              animation.timingFunction ? animation.timingFunction : "ease"
            } ${animation.iterationCount || "infinite"} ${
              animation.fillMode ? animation.fillMode : ""
            } ${animation.direction ? animation.direction : "normal"}`;
          })
          .join(", ");

        element.style.animation = element.style.animation
          ? `${element.style.animation}, ${combinedAnimation}`
          : combinedAnimation;
      }
    };

    useEffect(() => {
      if (!animations || animations.length === 0 || props.editable) {
        return;
      }

      const targetId = id;
      const element = document.getElementById(targetId);

      const mountAnimations = animations.filter(
        (animation: Animation) => animation.trigger === "mount"
      );
      const unmountAnimations = animations.filter(
        (animation: Animation) => animation.trigger === "unmount"
      );

      applyAnimations(mountAnimations);

      animations
        .filter(
          (animation: Animation) =>
            animation.trigger !== "mount" && animation.trigger !== "unmount"
        )
        .forEach((animation: Animation) => {
          const handleAnimationEvent = () => {
            applyAnimations(
              animations.filter((a) => a.trigger === animation.trigger)
            );
          };

          element?.addEventListener(animation.trigger, handleAnimationEvent);

          return () => {
            element?.removeEventListener(
              animation.trigger,
              handleAnimationEvent
            );
          };
        });

      return () => applyAnimations(unmountAnimations);
    }, [animations, id]);

    return <WrappedComponent {...props} />;
  };

  return NewComponent;
};

export default withAnimationHandlers;
