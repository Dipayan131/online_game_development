import React, { useCallback, useEffect, useRef, useState } from "react";

const withDragHandlers = (WrappedComponent) => {
  const NewComponent = ({ refContext, draggable, styles, text, ...props }) => {
    const ref = refContext || useRef<HTMLDivElement>(null);
    const [isDraggable, setIsDraggable] = useState(draggable);
    const [isDragging, setIsDragging] = useState(false);

    const [position, setPosition] = useState({
      x: styles.left ? styles.left : window.innerWidth / 2,
      y: styles.top ? styles.top : window.innerHeight / 2,
    });

    const [offset, setOffset] = useState({ x: 0, y: 0 });

    useEffect(() => {
      if (!isDragging) {
        const element = ref.current;
        if (element) {
          element.style.transition = "left 0.6s ease, top 0.6s ease";
        }
      } else {
        const element = ref.current;
        if (element) {
          element.style.transition = "none";
        }
      }
    }, [isDragging]);

    const resetPosition = () => {
      const centerX = styles.left ? styles.left : window.innerWidth / 2;
      const centerY = styles.top ? styles.top : window.innerHeight / 2;
      setPosition({
        x: centerX,
        y: centerY,
      });
    };

    const checkTouchingTarget = useCallback(
      (choiceElement: HTMLElement) => {
        const targetElements = document.getElementsByClassName("targetElement");

        const choiceRect = choiceElement.getBoundingClientRect();

        const isTouching = (target: Element) => {
          const targetRect = target.getBoundingClientRect();

          return (
            target &&
            choiceRect.right >= targetRect.left &&
            choiceRect.left <= targetRect.right &&
            choiceRect.bottom >= targetRect.top &&
            choiceRect.top <= targetRect.bottom
          );
        };

        const findTouchingElement = () => {
          for (const targetElement of Array.from(targetElements)) {
            if (isTouching(targetElement)) {
              return targetElement.id;
            }
          }
          return null;
        };

        if (targetElements && choiceElement) {
          const targetId = findTouchingElement();
          const touchedTarget = document.getElementById(targetId);
          if (touchedTarget) {
            if (touchedTarget.dataset.accepting === "true") {
              const targetRect = touchedTarget.getBoundingClientRect();
              const newPosition = {
                x: targetRect.left + choiceRect.width / 2,
                y: targetRect.top + choiceRect.height / 2,
              };
              setIsDraggable(false);

              const customEvent = new CustomEvent("drop", {
                detail: {
                  choiceText: text,
                },
              });

              touchedTarget.dispatchEvent(customEvent);

              requestAnimationFrame(() => {
                setPosition(newPosition);
                touchedTarget.replaceWith(choiceElement);
                touchedTarget.style.transition = "visibility 0.3s ease";
                touchedTarget.style.visibility = "hidden";
              });
            } else {
              touchedTarget.dispatchEvent(
                new CustomEvent("drop", {
                  detail: "This custom event is fired via draggable element",
                })
              );
              setTimeout(() => {
                resetPosition();
              }, 300);
            }
          } else {
            setTimeout(() => {
              resetPosition();
            }, 300);
          }
        } else {
          setTimeout(() => {
            resetPosition();
          }, 300);
        }
      },
      [setPosition, isDraggable]
    );

    const handleMouseDown = (e: any) => {
      e.preventDefault();
      setIsDragging(true);
      setOffset({
        x: e.clientX - position.x,
        y: e.clientY - position.y,
      });
      // console.log('mouse is down at position ', position.x, position.y);
    };

    const handleMouseMove = (e: any) => {
      if (isDragging) {
        const newX = e.clientX - offset.x;
        const newY = e.clientY - offset.y;

        requestAnimationFrame(() => {
          setPosition({
            x: Math.min(Math.max(newX, 0), window.innerWidth),
            y: Math.min(Math.max(newY, 0), window.innerHeight),
          });

          // console.log('Dragging the object ', position.x, position.y);
        });
      }
    };

    const handleMouseUp = (e: any) => {
      if (isDragging) {
        const choiceElement = e.target as HTMLElement;
        setIsDragging(false);
        checkTouchingTarget(choiceElement);
      }
    };

    const handleTouchStart = (e: any) => {
      setIsDragging(true);
      const touch = e.touches[0];
      setOffset({
        x: touch.clientX - position.x,
        y: touch.clientY - position.y,
      });
    };

    const handleTouchMove = (e: any) => {
      if (isDragging) {
        const touch = e.touches[0];
        const newX = touch.clientX - offset.x;
        const newY = touch.clientY - offset.y;

        requestAnimationFrame(() => {
          setPosition({
            x: Math.min(Math.max(newX, 0), window.innerWidth),
            y: Math.min(Math.max(newY, 0), window.innerHeight),
          });

          // console.log('Dragging the object ', position.x, position.y);
        });
      }
    };

    const handleTouchEnd = (e: any) => {
      if (isDragging) {
        setIsDragging(false);
        const choiceElement = e.target as HTMLElement;
        checkTouchingTarget(choiceElement);
      }
    };

    useEffect(() => {
      if (isDraggable) {
        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseup", handleMouseUp);
        document.addEventListener("touchmove", handleTouchMove);
        document.addEventListener("touchend", handleTouchEnd);
      }

      return () => {
        if (isDraggable) {
          document.removeEventListener("mousemove", handleMouseMove);
          document.removeEventListener("mouseup", handleMouseUp);
          document.removeEventListener("touchmove", handleTouchMove);
          document.removeEventListener("touchend", handleTouchEnd);
        }
      };
    }, [
      handleMouseMove,
      handleMouseUp,
      handleTouchMove,
      handleTouchEnd,
      isDraggable,
    ]);

    return (
      <WrappedComponent
        styles={styles}
        handleDrag={{
          onMouseDown: handleMouseDown,
          onMouseMove: handleMouseMove,
          onMouseUp: handleMouseUp,
          onTouchStart: handleTouchStart,
          onTouchMove: handleTouchMove,
          onTouchEnd: handleTouchEnd,
        }}
        refContext={ref}
        position={position}
        text={text}
        {...props}
      />
    );
  };

  return NewComponent;
};

export default withDragHandlers;
