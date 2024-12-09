import React, { useEffect } from "react";

const withEventHandlers = (WrappedComponent) => {
  const NewComponent = ({ events, handlers, ...props }) => {
    const selectActionHandler = (action, eventDetail) => {
      const { type, payload, message } = action;
      switch (type) {
        case "ACTION.NEXT":
          return handlers.onNextHandler && handlers.onNextHandler();
        case "ACTION.PREV":
          return handlers.onPreviousHandler && handlers.onPreviousHandler();
        case "ACTION.GOTOPAGE":
          return (
            handlers.onGotoPageHandler && handlers.onGotoPageHandler(payload)
          );
        case "ACTION.SUBMIT":
          return handlers.onSubmitHandler && handlers.onSubmitHandler();
        case "ACTION.ONFORMSUBMIT":
          return (
            handlers.onFormSubmitHandler &&
            handlers.onFormSubmitHandler(payload)
          );
        case "ACTION.CHECKSTATE":
          return handlers.onCheckState && handlers.onCheckState(payload);
        case "ACTION.SETSTATE":
          return (
            handlers.onSetStateHandler && handlers.onSetStateHandler(payload)
          );
        case "ACTION.UPDATESTATE":
          return (
            handlers.onUpdateStateHandler &&
            handlers.onUpdateStateHandler(payload)
          );
        case "ACTION.UPDATESTATES":
          return (
            handlers.onUpdateStatesHandler &&
            handlers.onUpdateStatesHandler(payload)
          );
        case "ACTION.REPEATSTATE":
          return (
            handlers.onRepeatStateHandler &&
            handlers.onRepeatStateHandler(payload)
          );
        case "ACTION.LOGSTATE":
          return handlers.onLogStateHandler && handlers.onLogStateHandler();
        case "ACTION.RESET":
          return handlers.onResetHandler && handlers.onResetHandler();
        case "ACTION.REPLACEONDROP":
          return (
            handlers.onDropAcceptingHandler &&
            handlers.onDropAcceptingHandler(eventDetail, payload)
          );
        case "ACTION.STARTROOM":
          return handlers.onHandleStartBattle && handlers.onHandleStartBattle();
        case "ACTION.ROOMSENDMSG":
          return (
            handlers.onHandleSendMessage &&
            handlers.onHandleSendMessage(message, payload)
          );
        case "ACTION.UPDATESCORE":
          return (
            handlers.onHandleSendMessage &&
            handlers.onHandleSendMessage("update_score", payload)
          );
        default: {
          return document
            .getElementById(payload)
            ?.dispatchEvent(
              new CustomEvent(type, { detail: type + " : " + payload })
            );
        }
      }
    };

    useEffect(() => {
      if (props.editable) return;

      const getActionHandler = (event, eventDetail) => {
        const { type, payload, callback, delay, callbackPayload } = event;

        selectActionHandler({ type, payload }, eventDetail);
        if (callback && delay && callbackPayload && typeof delay === "number") {
          setTimeout(() => {
            selectActionHandler(
              { type: callback, payload: callbackPayload },
              eventDetail
            );
          }, delay);
        }
      };

      const handleMountEvent = () => {
        events &&
          events
            .filter((event) => event.trigger === "mount")
            .forEach((event) => getActionHandler(event, {}));
      };

      // Fire mount events immediately after component mounts
      handleMountEvent();

      const eventListeners = [];

      const addEventListener = (event) => {
        const listener = (e) => getActionHandler(event, e.detail);
        const element = document.getElementById(props.id);

        if (
          element &&
          event.trigger !== "mount" &&
          event.trigger !== "unmount"
        ) {
          element.addEventListener(event.trigger, listener);
          eventListeners.push({ trigger: event.trigger, listener, element });
        }
      };

      const addEventListeners = () => {
        events && events.forEach(addEventListener);
      };

      addEventListeners();

      return () => {
        // Cleanup: Remove event listeners when the component unmounts
        eventListeners.forEach(({ trigger, listener, element }) => {
          // const element = document.getElementById(props.id);

          if (element) {
            element.removeEventListener(trigger, listener);
          }
        });

        events &&
          events
            .filter((event) => event.trigger === "unmount")
            .forEach((event) =>
              selectActionHandler(
                { type: event.type, payload: event.payload },
                {}
              )
            );
      };
    }, [events, props.id]);

    return (
      <WrappedComponent
        selectActionHandler={selectActionHandler}
        events={events}
        {...props}
      />
    );
  };

  return NewComponent;
};

export default withEventHandlers;
