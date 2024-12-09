import React, { useEffect, useState } from "react";
import { createRenderFunction } from "src/shared/utils/functions";

import useGameStore from "../../hooks/useGameStore";
import { ResponsiveView } from "../../views/CommonView";

function ViewContainer({
  items,
  state: RoomState = {},
  handlers: RoomHandlers = {},
}: any) {
  // const [countState, setCountState] = useState({
  //   count: 0,
  // });
  // const [currentTest, setCurrentTest] = useState<number>(0);

  // const [state, setState] = useState<any>({ result: 'Pending', ...RoomState });
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  //@ts-ignore
  const {
    gameState: GameState,
    setGameState,
    updateGameState,
    getLatestGameState,
  } = useGameStore();
  // const GameState = useGameStore<any>((state) => state.setRoomState);
  // const [state, setState] = useState(0);
  console.log("GameState", GameState);

  useEffect(() => {
    setCurrentIndex(0);
  }, [items]);

  if (!items || items.length === 0) {
    return <div>Loading quiz data...</div>;
  }

  const currentItem = items[currentIndex];

  const handlers = {
    onNextHandler: () => {
      if (currentIndex < items.length - 1) {
        setCurrentIndex(currentIndex + 1);
      }
    },
    onPreviousHandler: () => {
      if (currentIndex > 0) {
        setCurrentIndex(currentIndex - 1);
      }
    },
    onGotoPageHandler: (payload: any) => {
      const {
        pageNumber,
        key,
        functionBody = "return defaultFunction() {return true;}",
      } = payload;
      // const dynamicFunction = new Function(functionBody);
      // const result = dynamicFunction(GameState)();
      const check = createRenderFunction(functionBody);
      const result = check(GameState);
      if (result) {
        setCurrentIndex(pageNumber);
      }

      // Can use below code to execute side effect logic ( have to pass key and functionBody from db.ts Div Element)
      // const check = createRenderFunction(key, functionBody);
      // const result = check;
      // console.log(result);
      // setGameState({ [key]: result });
    },
    onSubmitHandler: () => {
      // console.log(state);
    },
    onFormSubmitHandler: (payload) => {
      const { key, key1, key2 } = payload;
      const gameData = getLatestGameState();

      // const valOfKey1 = gameData.key1 || null;
      // const valOfKey2 = gameData.key2 || null;

      // Create formData object
      // const formData = {
      //   [key1]: valOfKey1,
      //   [key2]: valOfKey2,
      // };

      const formData = gameData;

      setGameState({ [key]: formData });

      console.log(`Form data saved under key "${key}":`, formData);
    },
    onCheckState: (payload: any) => {
      // const { key, value } = payload;
      // const submission = GameState[key];
      // if (submission !== undefined) {
      //   const status = submission === value ? "Correct" : "Incorrect";
      //   if (handlers?.onHandleSendMessage) {
      //     if (status === "Correct") {
      //       handlers?.onHandleSendMessage("update_score", {
      //         operation: "INCREMENT",
      //         value: 5,
      //       });
      //     } else if (status === "Incorrect") {
      //       handlers?.onHandleSendMessage("update_score", {
      //         operation: "DECREMENT",
      //         value: 5,
      //       });
      //     }
      //   }
      // }
    },
    onLogStateHandler: () => {
      // console.log(state);
    },
    onGetStateHandler: (key: string, state: any) => {
      console.log(state[key]);
    },
    onSetStateHandler: (payload: any) => {
      const { key, value } = payload;
      setGameState({ [key]: value });
    },
    onUpdateStateHandler: (payload: any) => {
      const { key, functionBody } = payload;
      const check = createRenderFunction(functionBody);
      const result = check(GameState);

      setGameState({ [key]: result });

      // If this is a form submission, you can perform additional actions here
      if (key === "submittedValue") {
        console.log("Form submitted with value:", result);
        // Perform any other actions needed on form submission
      }
    },
    onUpdateStatesHandler: (payloads: any) => {
      payloads.forEach((payload) => {
        const { key, functionBody } = payload;
        if (functionBody) {
          const check = createRenderFunction(functionBody);
          const result = check(GameState);
          setGameState({ [key]: result });
        }
      });
    },
    onRepeatStateHandler: (payload: any) => {
      const {
        key,
        functionBody,
        interval = 1000,
        stopFunctionBody = "return function(data){ const count = data['answer'];console.log('count',count); if(!count) return false; return count < 50; }",
      } = payload;
      let varCounter = 0;
      var intervalId = setInterval(() => {
        const executeStopFunction = createRenderFunction(stopFunctionBody);
        console.log("GameState", GameState);
        console.log(
          "executeStopFunction(GameState)",
          executeStopFunction(GameState)
        );
        if (executeStopFunction(GameState)) {
          const executeFunction = createRenderFunction(functionBody);
          updateGameState((prevState) => {
            const result = executeFunction(prevState);
            return { ...prevState.gameState, [key]: result };
          });
          varCounter++;
        } else {
          clearInterval(intervalId);
        }
      }, interval);
    },
    onSoundOffHandler: () => {
      // Implement sound off logic here
    },
    onResetHandler: () => {
      setCurrentIndex(0);
    },
    onPauseHandler: () => {
      // Implement pause logic here
    },
    onSettingsHandler: () => {
      // Implement settings logic here
    },
    onConfirmHandler: () => {
      // Implement confirm logic here
    },
    onGotoHandler: () => {
      // Implement goto logic here
    },
    onOpenLinkHandler: () => {
      // Implement open link logic here
    },
    onSoundToggleHandler: () => {
      // Implement sound toggle logic here
    },
    onAlertsHandler: () => {
      // Implement alerts logic here
    },
    onNotificationsHandler: () => {
      // Implement notifications logic here
    },
    onDropAcceptingHandler: (eventDetail: any, payload: any) => {
      console.log("eventDetail, payload", eventDetail, payload);
      // const { choiceText } = payload;
      // setState((prevState) => {
      //   const previousAnswer = prevState.answer;
      //   let newAnswer;

      //   if (previousAnswer === undefined) {
      //     newAnswer = choiceText === eventDetail.choiceText;
      //   } else {
      //     newAnswer = choiceText === eventDetail.choiceText && previousAnswer;
      //   }

      //   return { ...prevState, answer: newAnswer };
      // });
    },
    ...RoomHandlers,
  };

  return (
    <div id="ViewContainer-div">
      {/* <button onClick={() => console.log(state)}>Test</button> */}
      <ResponsiveView
        state={{ ...GameState, ...RoomState }}
        data={currentItem as Item}
        {...handlers}
      />
    </div>
  );
}

export default ViewContainer;
