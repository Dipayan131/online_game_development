const mockData = {
  author: "Aditya Tripathi",
  category: "General Knowledge",
  date_added: "2024-01-15",
  date_modified: "2024-01-20",
  description: "Few random quiz questions.",
  draft: false,
  id: "adi-b2s-ery-s3d",
  item: [
    {
      category: "info",
      landscape: {
        divs: [
          {
            id: "player-score-display",
            styles: {
              fontSize: "20px",
              fontWeight: "bold",
              left: "20%",
              position: "absolute",
              top: "10%",
            },
            subscribeTo: "PLAYERSCORE",
            subscription: {
              renderFunctions: [
                {
                  functionBody:
                    "return function getPlayerScore(data) { const sessionId = data['SESSIONID']; const players = data['PLAYERS']; if (!sessionId || !players) { return undefined; } const player = players[sessionId]; if (!player || !player.playerName || !player.score) { return 'Error: Player data is missing or incomplete'; } return player.playerName + ' : ' + player.score; }",
                  id: "PLAYERSCORE",
                },
              ],
              sources: [
                {
                  id: "SESSIONID",
                  subscribeTo: "sessionId",
                },
                {
                  id: "PLAYERS",
                  subscribeTo: "players",
                },
                {
                  id: "PLAYERNAME",
                  subscribeTo: "playerName",
                },
              ],
            },
            text: {
              default: "Score: 1",
            },
          },
          {
            id: "opponent-score-display",
            styles: {
              fontSize: "20px",
              fontWeight: "bold",
              left: "80%",
              position: "absolute",
              top: "10%",
            },
            subscribeTo: "OPPONENTSCORE",
            subscription: {
              renderFunctions: [
                {
                  functionBody:
                    "return function getOpponentScore(data) { const sessionId = data['SESSIONID']; const players = data['PLAYERS']; if (!players || !sessionId) { return undefined; }; const opponent = Object.values(players).find(player => player.sessionId !== sessionId); if (!opponent || !opponent.playerName || !opponent.score) { return undefined; } return opponent.playerName + ' : ' + opponent.score; }",
                  id: "OPPONENTSCORE",
                },
              ],
              sources: [
                {
                  id: "SESSIONID",
                  subscribeTo: "sessionId",
                },
                {
                  id: "PLAYERS",
                  subscribeTo: "players",
                },
                {
                  id: "PLAYERNAME",
                  subscribeTo: "playerName",
                },
              ],
            },
            text: {
              default: "Score: 2",
            },
          },
          {
            animations: [
              {
                delay: 0.3,
                direction: "normal",
                duration: 1.5,
                iterationCount: 1,
                timingFunction: "ease",
                trigger: "externalX",
                type: "panX",
              },
              {
                callback: "externalX",
                callbackPayload: "text-1l-001",
                delay: 0.3,
                direction: "normal",
                duration: 1.5,
                iterationCount: 1,
                timingFunction: "ease",
                trigger: "externalY",
                type: "panY",
              },
            ],
            id: "text-1l-001",
            styles: {
              backgroundColor: "none",
              color: "black",
              fontFamily: "Century Gothic, sans-serif",
              fontSize: "55px",
              fontWeight: "800",
              left: "40%",
              margin: "auto",
              position: "absolute",
              textAlign: "left",
              textShadow: "2px 2px 2px white",
              width: "40%",
            },
            text: {
              default: "QL1 : Is Cricket a sport?",
            },
          },
          {
            events: [
              {
                callback: "next-event",
                callbackPayload: "btn-next-1l-001",
                delay: 3000,
                payload: "text-1l-001",
                trigger: "click",
                type: "externalY",
              },
            ],
            id: "btn-left-1l-001",
            styles: {
              backgroundColor: "none",
              border: "2px solid #8c5638",
              color: "#8c5638",
              fontWeight: "700",
              height: "10%",
              left: "40%",
              padding: "auto",
              position: "absolute",
              textAlign: "center",
              top: "10%",
              width: "5%",
            },
            text: {
              default: "LEFT",
            },
          },
          {
            events: [
              {
                payload: "text-1",
                trigger: "click",
                type: "externalY",
              },
            ],
            id: "btn-down-1l-001",
            styles: {
              backgroundColor: "none",
              border: "2px solid #8c5638",
              color: "#8c5638",
              fontWeight: "700",
              height: "10%",
              left: "60%",
              padding: "auto",
              position: "absolute",
              textAlign: "center",
              top: "10%",
              width: "5%",
            },
            text: {
              default: "DOWN",
            },
          },
          {
            events: [
              {
                payload: {
                  key: "answer",
                  value: "YES",
                },
                trigger: "click",
                type: "ACTION.CHECKSTATE",
              },
              {
                callback: "next-event",
                callbackPayload: "btn-next-1l-001",
                delay: 1,
                payload: {
                  key: "answer",
                  value: "YES",
                },
                trigger: "check-event",
                type: "ACTION.CHECKSTATE",
              },
            ],
            id: "btn-check-1l-001",
            styles: {
              backgroundColor: "none",
              color: "#8c5638",
              fontWeight: "700",
              height: "10%",
              padding: "auto",
              position: "absolute",
              textAlign: "center",
              top: "80%",
              width: "15%",
            },
            text: {
              default: "CHECK",
            },
          },
          {
            events: [
              {
                payload: {
                  key: "answer",
                  value: "YES",
                },
                trigger: "click",
                type: "ACTION.SETSTATE",
              },
            ],
            id: "option-1l-001",
            styles: {
              backgroundColor: "none",
              color: "#8c5638",
              fontSize: "25px",
              fontWeight: "600",
              height: "10%",
              left: "70%",
              padding: "auto",
              position: "absolute",
              textAlign: "left",
              top: "40%",
            },
            text: {
              default: "Yes",
            },
          },
          {
            events: [
              {
                payload: {
                  key: "answer",
                  value: "NO",
                },
                trigger: "click",
                type: "ACTION.SETSTATE",
              },
            ],
            id: "option-1l-002",
            styles: {
              backgroundColor: "none",
              color: "#8c5638",
              fontSize: "25px",
              fontWeight: "600",
              height: "10%",
              left: "70%",
              padding: "auto",
              position: "absolute",
              textAlign: "left",
              top: "60%",
            },
            text: {
              default: "No",
            },
          },
          {
            events: [
              {
                payload: "",
                trigger: "click",
                type: "ACTION.PREV",
              },
            ],
            id: "btn-prev-1l-001",
            imageUrl:
              "https://firebasestorage.googleapis.com/v0/b/thegoodgametheory-quiz.appspot.com/o/assets%2Fbutton_prev.svg?alt=media&token=811ebf77-dd80-4025-ba8a-f862a9550291",
            styles: {
              height: "5.5rem",
              left: "10%",
              position: "absolute",
              width: "5rem",
            },
          },
          {
            events: [
              {
                payload: "",
                trigger: "next-event",
                type: "ACTION.NEXT",
              },
              {
                payload: "",
                trigger: "click",
                type: "ACTION.NEXT",
              },
            ],
            id: "btn-next-1l-001",
            imageUrl:
              "https://firebasestorage.googleapis.com/v0/b/thegoodgametheory-quiz.appspot.com/o/assets%2Fbutton_next.svg?alt=media&token=e40a5d10-a663-4461-9cb1-b29bd93dde0b",
            styles: {
              height: "5.5rem",
              left: "90%",
              position: "absolute",
              width: "5rem",
            },
          },
          {
            id: "img-bg-1l-001",
            imageUrl:
              "https://firebasestorage.googleapis.com/v0/b/thegoodgametheory-quiz.appspot.com/o/assets%2Fbg-b1.png?alt=media&token=dd173f0e-3cb7-4879-aa64-82e379ac0623",
            styles: {
              borderRadius: "10px",
              height: "100vh",
              position: "absolute",
              width: "100vw",
              zIndex: "-1",
            },
          },
          {
            animations: [
              {
                callback: "check-event",
                callbackPayload: "btn-check-1l-001",
                delay: 0,
                direction: "normal",
                duration: 5,
                iterationCount: 1,
                timingFunction: "ease-out",
                trigger: "mount",
                type: "slider",
              },
            ],
            id: "progress-bar",
            styles: {
              backgroundColor: "#3f6cb5",
              borderRadius: "10px",
              height: "5px",
              left: "0px",
              overflow: "hidden",
              position: "absolute",
              top: "0px",
              transform: "translate(0%,0%)",
              zIndex: "110",
            },
          },
          {
            id: "progress-bar-background",
            styles: {
              backgroundColor: "gray",
              borderRadius: "10px",
              height: "2px",
              left: "0px",
              overflow: "hidden",
              position: "absolute",
              top: "0px",
              transform: "translate(0%,0%)",
              width: "100%",
              zIndex: "100",
            },
          },
        ],
      },
      portrait: {
        divs: [
          {
            animations: [
              {
                delay: 0.3,
                direction: "normal",
                duration: 1.5,
                iterationCount: 1,
                timingFunction: "ease",
                trigger: "mount",
                type: "panY",
              },
            ],
            id: "text-1p-001",
            styles: {
              backgroundColor: "none",
              color: "black",
              fontFamily: "Century Gothic, sans-serif",
              fontSize: "55px",
              fontWeight: "800",
              margin: "auto",
              position: "absolute",
              textAlign: "center",
              textShadow: "2px 2px 2px white",
              top: "40%",
              width: "60%",
            },
            text: {
              default: "QP1 : Is Cricket a sport?",
            },
          },
          {
            events: [
              {
                payload: "text-1",
                trigger: "click",
                type: "externalX",
              },
            ],
            id: "btn-left-1p-001",
            styles: {
              backgroundColor: "none",
              border: "2px solid #8c5638",
              color: "#8c5638",
              fontWeight: "700",
              height: "6%",
              left: "10%",
              padding: "auto",
              position: "absolute",
              textAlign: "center",
              top: "10%",
              width: "13%",
            },
            text: {
              default: "LEFT",
            },
          },
          {
            events: [
              {
                payload: {
                  operation: "INCREMENT",
                  value: 5,
                },
                trigger: "click",
                type: "ACTION.UPDATESCORE",
              },
            ],
            id: "btn-down-1p-001",
            styles: {
              backgroundColor: "none",
              border: "2px solid #8c5638",
              color: "#8c5638",
              fontWeight: "700",
              height: "6%",
              left: "90%",
              padding: "auto",
              position: "absolute",
              textAlign: "center",
              top: "10%",
              width: "13%",
            },
            text: {
              default: "INCREMENT",
            },
          },
          {
            events: [
              {
                payload: {
                  key: "answer",
                  value: "YES",
                },
                trigger: "click",
                type: "ACTION.CHECKSTATE",
              },
            ],
            id: "btn-check-1p-001",
            styles: {
              backgroundColor: "none",
              color: "#8c5638",
              fontWeight: "700",
              height: "10%",
              left: "85%",
              padding: "auto",
              position: "absolute",
              textAlign: "center",
              top: "90%",
              width: "25%",
            },
            text: {
              default: "CHECK",
            },
          },
          {
            animations: [
              {
                delay: 0.3,
                direction: "normal",
                duration: 1.5,
                iterationCount: 1,
                timingFunction: "ease",
                trigger: "click",
                type: "scaleUpAnimation",
              },
            ],
            events: [
              {
                payload: {
                  key: "answer",
                  value: "YES",
                },
                trigger: "click",
                type: "ACTION.SETSTATE",
              },
            ],
            id: "option-1p-001",
            styles: {
              backgroundColor: "none",
              border: "4px solid #8c5638",
              color: "#8c5638",
              fontSize: "2rem",
              fontWeight: "600",
              height: "10%",
              left: "33%",
              padding: "1rem",
              position: "absolute",
              textAlign: "left",
              top: "65%",
            },
            text: {
              default: "Yes",
            },
          },
          {
            animations: [
              {
                delay: 0.3,
                direction: "normal",
                duration: 1.5,
                iterationCount: 1,
                timingFunction: "ease",
                trigger: "click",
                type: "scaleUpAnimation",
              },
            ],
            events: [
              {
                payload: {
                  key: "answer",
                  value: "NO",
                },
                trigger: "click",
                type: "ACTION.SETSTATE",
              },
            ],
            id: "option-1p-002",
            styles: {
              backgroundColor: "none",
              border: "4px solid #8c5638",
              color: "#8c5638",
              fontSize: "2rem",
              fontWeight: "600",
              height: "10%",
              left: "66%",
              padding: "1rem",
              position: "absolute",
              textAlign: "left",
              top: "65%",
            },
            text: {
              default: "No",
            },
          },
          {
            events: [
              {
                payload: "",
                trigger: "click",
                type: "ACTION.PREV",
              },
            ],
            id: "btn-prev-1p-001",
            imageUrl:
              "https://firebasestorage.googleapis.com/v0/b/thegoodgametheory-quiz.appspot.com/o/assets%2Fbutton_prev.svg?alt=media&token=811ebf77-dd80-4025-ba8a-f862a9550291",
            styles: {
              height: "3.3rem",
              left: "40%",
              position: "absolute",
              top: "90%",
              width: "3rem",
            },
          },
          {
            events: [
              {
                payload: "",
                trigger: "click",
                type: "ACTION.NEXT",
              },
            ],
            id: "btn-next-1p-001",
            imageUrl:
              "https://firebasestorage.googleapis.com/v0/b/thegoodgametheory-quiz.appspot.com/o/assets%2Fbutton_next.svg?alt=media&token=e40a5d10-a663-4461-9cb1-b29bd93dde0b",
            styles: {
              height: "3.3rem",
              left: "60%",
              position: "absolute",
              top: "90%",
              width: "3rem",
            },
          },
          {
            id: "img-bg-1p-001",
            imageUrl:
              "https://firebasestorage.googleapis.com/v0/b/thegoodgametheory-quiz.appspot.com/o/assets%2Fbg-b1.png?alt=media&token=dd173f0e-3cb7-4879-aa64-82e379ac0623",
            styles: {
              borderRadius: "10px",
              height: "100vh",
              position: "absolute",
              width: "100vw",
              zIndex: "-1",
            },
          },
        ],
      },
    },
    {
      category: "info",
      landscape: {
        divs: [
          {
            id: "player-score-display",
            styles: {
              fontSize: "20px",
              fontWeight: "bold",
              left: "20%",
              position: "absolute",
              top: "10%",
            },
            subscribeTo: "PLAYERSCORE",
            subscription: {
              renderFunctions: [
                {
                  functionBody:
                    "return function getPlayerScore(data) { const sessionId = data['SESSIONID']; const players = data['PLAYERS']; if (!sessionId || !players) { return undefined; } const player = players[sessionId]; if (!player || !player.playerName || !player.score) { return 'Error: Player data is missing or incomplete'; } return player.playerName + ' : ' + player.score; }",
                  id: "PLAYERSCORE",
                },
              ],
              sources: [
                {
                  id: "SESSIONID",
                  subscribeTo: "sessionId",
                },
                {
                  id: "PLAYERS",
                  subscribeTo: "players",
                },
                {
                  id: "PLAYERNAME",
                  subscribeTo: "playerName",
                },
              ],
            },
            text: {
              default: "Score: 1",
            },
          },
          {
            id: "opponent-score-display",
            styles: {
              fontSize: "20px",
              fontWeight: "bold",
              left: "80%",
              position: "absolute",
              top: "10%",
            },
            subscribeTo: "OPPONENTSCORE",
            subscription: {
              renderFunctions: [
                {
                  functionBody:
                    "return function getOpponentScore(data) { const sessionId = data['SESSIONID']; const players = data['PLAYERS']; if (!players || !sessionId) { return undefined; }; const opponent = Object.values(players).find(player => player.sessionId !== sessionId); if (!opponent || !opponent.playerName || !opponent.score) { return undefined; } return opponent.playerName + ' : ' + opponent.score; }",
                  id: "OPPONENTSCORE",
                },
              ],
              sources: [
                {
                  id: "SESSIONID",
                  subscribeTo: "sessionId",
                },
                {
                  id: "PLAYERS",
                  subscribeTo: "players",
                },
                {
                  id: "PLAYERNAME",
                  subscribeTo: "playerName",
                },
              ],
            },
            text: {
              default: "Score: 2",
            },
          },
          {
            animations: [
              {
                delay: 0.3,
                direction: "normal",
                duration: 1.5,
                iterationCount: 1,
                timingFunction: "ease",
                trigger: "externalX",
                type: "panX",
              },
              {
                delay: 0.3,
                direction: "normal",
                duration: 1.5,
                iterationCount: 1,
                timingFunction: "ease",
                trigger: "externalY",
                type: "panY",
              },
            ],
            id: "text-2l-001",
            styles: {
              backgroundColor: "none",
              color: "black",
              fontFamily: "Century Gothic, sans-serif",
              fontSize: "55px",
              fontWeight: "800",
              left: "40%",
              margin: "auto",
              position: "absolute",
              textAlign: "left",
              textShadow: "2px 2px 2px white",
              width: "40%",
            },
            text: {
              default: "QL1 : What is Capital of India?",
            },
          },
          {
            events: [
              {
                payload: "text-1",
                trigger: "click",
                type: "externalX",
              },
            ],
            id: "btn-left-2l-001",
            styles: {
              backgroundColor: "none",
              border: "2px solid #8c5638",
              color: "#8c5638",
              fontWeight: "700",
              height: "10%",
              left: "40%",
              padding: "auto",
              position: "absolute",
              textAlign: "center",
              top: "10%",
              width: "5%",
            },
            text: {
              default: "LEFT",
            },
          },
          {
            events: [
              {
                payload: "text-1",
                trigger: "click",
                type: "externalY",
              },
            ],
            id: "btn-down-2l-001",
            styles: {
              backgroundColor: "none",
              border: "2px solid #8c5638",
              color: "#8c5638",
              fontWeight: "700",
              height: "10%",
              left: "60%",
              padding: "auto",
              position: "absolute",
              textAlign: "center",
              top: "10%",
              width: "5%",
            },
            text: {
              default: "DOWN",
            },
          },
          {
            events: [
              {
                payload: {
                  key: "answer",
                  value: "New Delhi",
                },
                trigger: "click",
                type: "ACTION.CHECKSTATE",
              },
              {
                callback: "next-event",
                callbackPayload: "btn-next-2l-001",
                delay: 1,
                payload: {
                  key: "answer",
                  value: "New Delhi",
                },
                trigger: "check-event",
                type: "ACTION.CHECKSTATE",
              },
            ],
            id: "btn-check-2l-001",
            styles: {
              backgroundColor: "none",
              border: "2px solid #8c5638",
              color: "#8c5638",
              fontWeight: "700",
              height: "10%",
              padding: "auto",
              position: "absolute",
              textAlign: "center",
              top: "80%",
              width: "15%",
            },
            text: {
              default: "CHECK",
            },
          },
          {
            events: [
              {
                payload: {
                  key: "answer",
                  value: "Gurugram",
                },
                trigger: "click",
                type: "ACTION.SETSTATE",
              },
            ],
            id: "option-2l-001",
            styles: {
              backgroundColor: "none",
              border: "4px solid #8c5638",
              color: "#8c5638",
              fontSize: "2rem",
              fontWeight: "600",
              height: "10%",
              left: "70%",
              padding: "auto",
              position: "absolute",
              textAlign: "left",
              top: "33%",
              width: "20%",
            },
            text: {
              default: "Gurugram",
            },
          },
          {
            events: [
              {
                payload: {
                  key: "answer",
                  value: "Chennai",
                },
                trigger: "click",
                type: "ACTION.SETSTATE",
              },
            ],
            id: "option-2l-002",
            styles: {
              backgroundColor: "none",
              border: "4px solid #8c5638",
              color: "#8c5638",
              fontSize: "2rem",
              fontWeight: "600",
              height: "10%",
              left: "70%",
              padding: "auto",
              position: "absolute",
              textAlign: "left",
              top: "44%",
              width: "20%",
            },
            text: {
              default: "Chennai",
            },
          },
          {
            events: [
              {
                payload: {
                  key: "answer",
                  value: "New Delhi",
                },
                trigger: "click",
                type: "ACTION.SETSTATE",
              },
            ],
            id: "option-2l-003",
            styles: {
              backgroundColor: "none",
              border: "4px solid #8c5638",
              color: "#8c5638",
              fontSize: "2rem",
              fontWeight: "600",
              height: "10%",
              left: "70%",
              padding: "auto",
              position: "absolute",
              textAlign: "left",
              top: "55%",
              width: "20%",
            },
            text: {
              default: "New Delhi",
            },
          },
          {
            events: [
              {
                payload: {
                  key: "answer",
                  value: "Bengaluru",
                },
                trigger: "click",
                type: "ACTION.SETSTATE",
              },
            ],
            id: "option-2l-004",
            styles: {
              backgroundColor: "none",
              border: "4px solid #8c5638",
              color: "#8c5638",
              fontSize: "2rem",
              fontWeight: "600",
              height: "10%",
              left: "70%",
              padding: "auto",
              position: "absolute",
              textAlign: "left",
              top: "66%",
              width: "20%",
            },
            text: {
              default: "Bengaluru",
            },
          },
          {
            events: [
              {
                payload: "",
                trigger: "click",
                type: "ACTION.PREV",
              },
            ],
            id: "btn-prev-2l-001",
            imageUrl:
              "https://firebasestorage.googleapis.com/v0/b/thegoodgametheory-quiz.appspot.com/o/assets%2Fbutton_prev.svg?alt=media&token=811ebf77-dd80-4025-ba8a-f862a9550291",
            styles: {
              height: "5.5rem",
              left: "10%",
              position: "absolute",
              width: "5rem",
            },
          },
          {
            events: [
              {
                payload: "",
                trigger: "next-event",
                type: "ACTION.NEXT",
              },
              {
                payload: "",
                trigger: "click",
                type: "ACTION.NEXT",
              },
            ],
            id: "btn-next-2l-001",
            imageUrl:
              "https://firebasestorage.googleapis.com/v0/b/thegoodgametheory-quiz.appspot.com/o/assets%2Fbutton_next.svg?alt=media&token=e40a5d10-a663-4461-9cb1-b29bd93dde0b",
            styles: {
              height: "5.5rem",
              left: "90%",
              position: "absolute",
              width: "5rem",
            },
          },
          {
            id: "img-bg-2l-001",
            imageUrl:
              "https://firebasestorage.googleapis.com/v0/b/thegoodgametheory-quiz.appspot.com/o/assets%2Fbg-b1.png?alt=media&token=dd173f0e-3cb7-4879-aa64-82e379ac0623",
            styles: {
              borderRadius: "10px",
              height: "100vh",
              position: "absolute",
              width: "100vw",
              zIndex: "-1",
            },
          },
          {
            animations: [
              {
                callback: "check-event",
                callbackPayload: "btn-check-2l-001",
                delay: 0,
                direction: "normal",
                duration: 5,
                iterationCount: 1,
                timingFunction: "ease-out",
                trigger: "mount",
                type: "slider",
              },
            ],
            id: "progress-bar",
            styles: {
              backgroundColor: "#3f6cb5",
              borderRadius: "10px",
              height: "5px",
              left: "0px",
              overflow: "hidden",
              position: "absolute",
              top: "0px",
              transform: "translate(0%,0%)",
              zIndex: "110",
            },
          },
          {
            id: "progress-bar-background",
            styles: {
              backgroundColor: "gray",
              borderRadius: "10px",
              height: "2px",
              left: "0px",
              overflow: "hidden",
              position: "absolute",
              top: "0px",
              transform: "translate(0%,0%)",
              width: "100%",
              zIndex: "100",
            },
          },
        ],
      },
      portrait: {
        divs: [
          {
            animations: [
              {
                delay: 0.3,
                direction: "normal",
                duration: 1.5,
                iterationCount: 1,
                timingFunction: "ease",
                trigger: "mount",
                type: "panY",
              },
              {
                delay: 0.3,
                direction: "normal",
                duration: 1.5,
                iterationCount: 1,
                timingFunction: "ease",
                trigger: "click",
                type: "scaleUpAnimation",
              },
            ],
            id: "text-2p-001",
            styles: {
              backgroundColor: "none",
              color: "black",
              fontFamily: "Century Gothic, sans-serif",
              fontSize: "55px",
              fontWeight: "800",
              margin: "auto",
              position: "absolute",
              textAlign: "center",
              textShadow: "2px 2px 2px white",
              top: "40%",
              width: "60%",
            },
            text: {
              default: "QP1 : What is Capital of India?",
            },
          },
          {
            events: [
              {
                payload: "text-1",
                trigger: "click",
                type: "externalX",
              },
            ],
            id: "btn-left-2p-001",
            styles: {
              backgroundColor: "none",
              border: "2px solid #8c5638",
              color: "#8c5638",
              fontWeight: "700",
              height: "6%",
              left: "10%",
              padding: "auto",
              position: "absolute",
              textAlign: "center",
              top: "10%",
              width: "13%",
            },
            text: {
              default: "LEFT",
            },
          },
          {
            events: [
              {
                payload: "text-1",
                trigger: "click",
                type: "externalY",
              },
            ],
            id: "btn-down-2p-001",
            styles: {
              backgroundColor: "none",
              border: "2px solid #8c5638",
              color: "#8c5638",
              fontWeight: "700",
              height: "6%",
              left: "90%",
              padding: "auto",
              position: "absolute",
              textAlign: "center",
              top: "10%",
              width: "13%",
            },
            text: {
              default: "DOWN",
            },
          },
          {
            events: [
              {
                payload: {
                  key: "answer",
                  value: "New Delhi",
                },
                trigger: "click",
                type: "ACTION.CHECKSTATE",
              },
            ],
            id: "btn-check-2p-001",
            styles: {
              backgroundColor: "none",
              color: "#8c5638",
              fontWeight: "700",
              left: "85%",
              padding: "auto",
              position: "absolute",
              textAlign: "center",
              top: "90%",
            },
            text: {
              default: "CHECK",
            },
          },
          {
            animations: [
              {
                delay: 0.3,
                direction: "normal",
                duration: 1.5,
                iterationCount: 1,
                timingFunction: "ease",
                trigger: "click",
                type: "scaleUpAnimation",
              },
            ],
            events: [
              {
                payload: {
                  key: "answer",
                  value: "Gurugram",
                },
                trigger: "click",
                type: "ACTION.SETSTATE",
              },
            ],
            id: "option-2p-001",
            styles: {
              backgroundColor: "none",
              border: "4px solid #8c5638",
              color: "#8c5638",
              fontSize: "1rem",
              fontWeight: "600",
              height: "10%",
              left: "33%",
              padding: "1rem",
              position: "absolute",
              textAlign: "left",
              top: "65%",
              width: "25%",
            },
            text: {
              default: "Gurugram",
            },
          },
          {
            animations: [
              {
                delay: 0.3,
                direction: "normal",
                duration: 1.5,
                iterationCount: 1,
                timingFunction: "ease",
                trigger: "click",
                type: "scaleUpAnimation",
              },
            ],
            events: [
              {
                payload: {
                  key: "answer",
                  value: "Chennai",
                },
                trigger: "click",
                type: "ACTION.SETSTATE",
              },
            ],
            id: "option-2p-002",
            styles: {
              backgroundColor: "none",
              border: "4px solid #8c5638",
              color: "#8c5638",
              fontSize: "1rem",
              fontWeight: "600",
              height: "10%",
              left: "66%",
              padding: "1rem",
              position: "absolute",
              textAlign: "left",
              top: "65%",
              width: "25%",
            },
            text: {
              default: "Chennai",
            },
          },
          {
            animations: [
              {
                delay: 0.3,
                direction: "normal",
                duration: 1.5,
                iterationCount: 1,
                timingFunction: "ease",
                trigger: "click",
                type: "scaleUpAnimation",
              },
            ],
            events: [
              {
                payload: {
                  key: "answer",
                  value: "New Delhi",
                },
                trigger: "click",
                type: "ACTION.SETSTATE",
              },
            ],
            id: "option-2p-003",
            styles: {
              backgroundColor: "none",
              border: "4px solid #8c5638",
              color: "#8c5638",
              fontSize: "1rem",
              fontWeight: "600",
              height: "10%",
              left: "33%",
              padding: "1rem",
              position: "absolute",
              textAlign: "left",
              top: "77%",
              width: "25%",
            },
            text: {
              default: "New Delhi",
            },
          },
          {
            animations: [
              {
                delay: 0.3,
                direction: "normal",
                duration: 1.5,
                iterationCount: 1,
                timingFunction: "ease",
                trigger: "click",
                type: "scaleUpAnimation",
              },
            ],
            events: [
              {
                payload: {
                  key: "answer",
                  value: "Bengaluru",
                },
                trigger: "click",
                type: "ACTION.SETSTATE",
              },
            ],
            id: "option-2p-004",
            styles: {
              backgroundColor: "none",
              border: "4px solid #8c5638",
              color: "#8c5638",
              fontSize: "1rem",
              fontWeight: "600",
              height: "10%",
              left: "66%",
              padding: "1rem",
              position: "absolute",
              textAlign: "left",
              top: "77%",
              width: "25%",
            },
            text: {
              default: "Bengaluru",
            },
          },
          {
            events: [
              {
                payload: "",
                trigger: "click",
                type: "ACTION.PREV",
              },
            ],
            id: "btn-prev-2p-001",
            imageUrl:
              "https://firebasestorage.googleapis.com/v0/b/thegoodgametheory-quiz.appspot.com/o/assets%2Fbutton_prev.svg?alt=media&token=811ebf77-dd80-4025-ba8a-f862a9550291",
            styles: {
              height: "3.3rem",
              left: "40%",
              position: "absolute",
              top: "90%",
              width: "3rem",
            },
          },
          {
            events: [
              {
                payload: "",
                trigger: "next-event",
                type: "ACTION.NEXT",
              },
              {
                payload: "",
                trigger: "click",
                type: "ACTION.NEXT",
              },
            ],
            id: "btn-next2p-001",
            imageUrl:
              "https://firebasestorage.googleapis.com/v0/b/thegoodgametheory-quiz.appspot.com/o/assets%2Fbutton_next.svg?alt=media&token=e40a5d10-a663-4461-9cb1-b29bd93dde0b",
            styles: {
              height: "3.3rem",
              left: "60%",
              position: "absolute",
              top: "90%",
              width: "3rem",
            },
          },
          {
            id: "img-bg-2p-001",
            imageUrl:
              "https://firebasestorage.googleapis.com/v0/b/thegoodgametheory-quiz.appspot.com/o/assets%2Fbg-b1.png?alt=media&token=dd173f0e-3cb7-4879-aa64-82e379ac0623",
            styles: {
              borderRadius: "10px",
              height: "100vh",
              position: "absolute",
              width: "100vw",
              zIndex: "-1",
            },
          },
        ],
      },
    },
    {
      category: "info",
      landscape: {
        divs: [
          {
            id: "player-score-display",
            styles: {
              fontSize: "20px",
              fontWeight: "bold",
              left: "20%",
              position: "absolute",
              top: "10%",
            },
            subscribeTo: "PLAYERSCORE",
            subscription: {
              renderFunctions: [
                {
                  functionBody:
                    "return function getPlayerScore(data) { const sessionId = data['SESSIONID']; const players = data['PLAYERS']; if (!sessionId || !players) { return undefined; } const player = players[sessionId]; if (!player || !player.playerName || !player.score) { return 'Error: Player data is missing or incomplete'; } return player.playerName + ' : ' + player.score; }",
                  id: "PLAYERSCORE",
                },
              ],
              sources: [
                {
                  id: "SESSIONID",
                  subscribeTo: "sessionId",
                },
                {
                  id: "PLAYERS",
                  subscribeTo: "players",
                },
                {
                  id: "PLAYERNAME",
                  subscribeTo: "playerName",
                },
              ],
            },
            text: {
              default: "Score: 1",
            },
          },
          {
            id: "opponent-score-display",
            styles: {
              fontSize: "20px",
              fontWeight: "bold",
              left: "80%",
              position: "absolute",
              top: "10%",
            },
            subscribeTo: "OPPONENTSCORE",
            subscription: {
              renderFunctions: [
                {
                  functionBody:
                    "return function getOpponentScore(data) { const sessionId = data['SESSIONID']; const players = data['PLAYERS']; if (!players || !sessionId) { return undefined; }; const opponent = Object.values(players).find(player => player.sessionId !== sessionId); if (!opponent || !opponent.playerName || !opponent.score) { return undefined; } return opponent.playerName + ' : ' + opponent.score; }",
                  id: "OPPONENTSCORE",
                },
              ],
              sources: [
                {
                  id: "SESSIONID",
                  subscribeTo: "sessionId",
                },
                {
                  id: "PLAYERS",
                  subscribeTo: "players",
                },
                {
                  id: "PLAYERNAME",
                  subscribeTo: "playerName",
                },
              ],
            },
            text: {
              default: "Score: 2",
            },
          },
          {
            animations: [
              {
                delay: 0.3,
                direction: "normal",
                duration: 1.5,
                iterationCount: 1,
                timingFunction: "ease",
                trigger: "externalX",
                type: "panX",
              },
              {
                delay: 0.3,
                direction: "normal",
                duration: 1.5,
                iterationCount: 1,
                timingFunction: "ease",
                trigger: "externalY",
                type: "panY",
              },
            ],
            id: "text-3l-001",
            styles: {
              backgroundColor: "none",
              color: "black",
              fontFamily: "Century Gothic, sans-serif",
              fontSize: "55px",
              fontWeight: "800",
              left: "40%",
              margin: "auto",
              position: "absolute",
              textAlign: "left",
              textShadow: "2px 2px 2px white",
              width: "40%",
            },
            text: {
              default: "QL2 : What is the name highest mountain in the world?",
            },
          },
          {
            events: [
              {
                payload: "text-1",
                trigger: "click",
                type: "externalX",
              },
            ],
            id: "btn-left-3l-001",
            styles: {
              backgroundColor: "none",
              border: "2px solid #8c5638",
              color: "#8c5638",
              fontWeight: "700",
              height: "10%",
              left: "40%",
              padding: "auto",
              position: "absolute",
              textAlign: "center",
              top: "10%",
              width: "5%",
            },
            text: {
              default: "LEFT",
            },
          },
          {
            events: [
              {
                payload: "text-1",
                trigger: "click",
                type: "externalY",
              },
            ],
            id: "btn-down-3l-001",
            styles: {
              backgroundColor: "none",
              border: "2px solid #8c5638",
              color: "#8c5638",
              fontWeight: "700",
              height: "10%",
              left: "60%",
              padding: "auto",
              position: "absolute",
              textAlign: "center",
              top: "10%",
              width: "5%",
            },
            text: {
              default: "DOWN",
            },
          },
          {
            events: [
              {
                payload: {
                  key: "answer",
                  value: "Mount Everest",
                },
                trigger: "click",
                type: "ACTION.CHECKSTATE",
              },
              {
                callback: "next-event",
                callbackPayload: "btn-next-3l-001",
                delay: 1,
                payload: {
                  key: "answer",
                  value: "Mount Everest",
                },
                trigger: "check-event",
                type: "ACTION.CHECKSTATE",
              },
            ],
            id: "btn-check-3l-001",
            styles: {
              backgroundColor: "none",
              border: "2px solid #8c5638",
              color: "#8c5638",
              fontWeight: "700",
              height: "10%",
              padding: "auto",
              position: "absolute",
              textAlign: "center",
              top: "80%",
              width: "15%",
            },
            text: {
              default: "CHECK",
            },
          },
          {
            events: [
              {
                payload: {
                  key: "answer",
                  value: "Mount Abu",
                },
                trigger: "click",
                type: "ACTION.SETSTATE",
              },
            ],
            id: "option-3l-001",
            styles: {
              backgroundColor: "none",
              border: "4px solid #8c5638",
              color: "#8c5638",
              fontSize: "2rem",
              fontWeight: "600",
              height: "10%",
              left: "70%",
              padding: "auto",
              position: "absolute",
              textAlign: "left",
              top: "33%",
              width: "20%",
            },
            text: {
              default: "Mount Abu",
            },
          },
          {
            events: [
              {
                payload: {
                  key: "answer",
                  value: "Kangchenjunga",
                },
                trigger: "click",
                type: "ACTION.SETSTATE",
              },
            ],
            id: "option-3l-002",
            styles: {
              backgroundColor: "none",
              border: "4px solid #8c5638",
              color: "#8c5638",
              fontSize: "2rem",
              fontWeight: "600",
              height: "10%",
              left: "70%",
              padding: "auto",
              position: "absolute",
              textAlign: "left",
              top: "44%",
              width: "20%",
            },
            text: {
              default: "Kangchenjunga",
            },
          },
          {
            events: [
              {
                payload: {
                  key: "answer",
                  value: "Annapurna",
                },
                trigger: "click",
                type: "ACTION.SETSTATE",
              },
            ],
            id: "option-3l-003",
            styles: {
              backgroundColor: "none",
              border: "4px solid #8c5638",
              color: "#8c5638",
              fontSize: "2rem",
              fontWeight: "600",
              height: "10%",
              left: "70%",
              padding: "auto",
              position: "absolute",
              textAlign: "left",
              top: "55%",
              width: "20%",
            },
            text: {
              default: "Annapurna",
            },
          },
          {
            events: [
              {
                payload: {
                  key: "answer",
                  value: "Mount Everest",
                },
                trigger: "click",
                type: "ACTION.SETSTATE",
              },
            ],
            id: "option-3l-004",
            styles: {
              backgroundColor: "none",
              border: "4px solid #8c5638",
              color: "#8c5638",
              fontSize: "2rem",
              fontWeight: "600",
              height: "10%",
              left: "70%",
              padding: "auto",
              position: "absolute",
              textAlign: "left",
              top: "66%",
              width: "20%",
            },
            text: {
              default: "Mount Everest",
            },
          },
          {
            events: [
              {
                payload: "",
                trigger: "click",
                type: "ACTION.PREV",
              },
            ],
            id: "btn-prev-3l-001",
            imageUrl:
              "https://firebasestorage.googleapis.com/v0/b/thegoodgametheory-quiz.appspot.com/o/assets%2Fbutton_prev.svg?alt=media&token=811ebf77-dd80-4025-ba8a-f862a9550291",
            styles: {
              height: "5.5rem",
              left: "10%",
              position: "absolute",
              width: "5rem",
            },
          },
          {
            events: [
              {
                payload: "",
                trigger: "next-event",
                type: "ACTION.NEXT",
              },
              {
                payload: "",
                trigger: "click",
                type: "ACTION.NEXT",
              },
            ],
            id: "btn-next-3l-001",
            imageUrl:
              "https://firebasestorage.googleapis.com/v0/b/thegoodgametheory-quiz.appspot.com/o/assets%2Fbutton_next.svg?alt=media&token=e40a5d10-a663-4461-9cb1-b29bd93dde0b",
            styles: {
              height: "5.5rem",
              left: "90%",
              position: "absolute",
              width: "5rem",
            },
          },
          {
            id: "img-bg-3l-001",
            imageUrl:
              "https://firebasestorage.googleapis.com/v0/b/thegoodgametheory-quiz.appspot.com/o/assets%2Fbg-b1.png?alt=media&token=dd173f0e-3cb7-4879-aa64-82e379ac0623",
            styles: {
              borderRadius: "10px",
              height: "100vh",
              position: "absolute",
              width: "100vw",
              zIndex: "-1",
            },
          },
          {
            animations: [
              {
                callback: "check-event",
                callbackPayload: "btn-check-3l-001",
                delay: 0,
                direction: "normal",
                duration: 5,
                iterationCount: 1,
                timingFunction: "ease-out",
                trigger: "mount",
                type: "slider",
              },
            ],
            id: "progress-bar",
            styles: {
              backgroundColor: "#3f6cb5",
              borderRadius: "10px",
              height: "5px",
              left: "0px",
              overflow: "hidden",
              position: "absolute",
              top: "0px",
              transform: "translate(0%,0%)",
              zIndex: "110",
            },
          },
          {
            id: "progress-bar-background",
            styles: {
              backgroundColor: "gray",
              borderRadius: "10px",
              height: "2px",
              left: "0px",
              overflow: "hidden",
              position: "absolute",
              top: "0px",
              transform: "translate(0%,0%)",
              width: "100%",
              zIndex: "100",
            },
          },
        ],
      },
      portrait: {
        divs: [
          {
            animations: [
              {
                delay: 0.3,
                direction: "normal",
                duration: 1.5,
                iterationCount: 1,
                timingFunction: "ease",
                trigger: "mount",
                type: "panY",
              },
              {
                delay: 0.3,
                direction: "normal",
                duration: 1.5,
                iterationCount: 1,
                timingFunction: "ease",
                trigger: "click",
                type: "scaleUpAnimation",
              },
            ],
            id: "text-2p-001",
            styles: {
              backgroundColor: "none",
              color: "black",
              fontFamily: "Century Gothic, sans-serif",
              fontSize: "55px",
              fontWeight: "800",
              margin: "auto",
              position: "absolute",
              textAlign: "center",
              textShadow: "2px 2px 2px white",
              top: "40%",
              width: "60%",
            },
            text: {
              default: "QP1 : What is Capital of India?",
            },
          },
          {
            events: [
              {
                payload: "text-1",
                trigger: "click",
                type: "externalX",
              },
            ],
            id: "btn-left-2p-001",
            styles: {
              backgroundColor: "none",
              border: "2px solid #8c5638",
              color: "#8c5638",
              fontWeight: "700",
              height: "6%",
              left: "10%",
              padding: "auto",
              position: "absolute",
              textAlign: "center",
              top: "10%",
              width: "13%",
            },
            text: {
              default: "LEFT",
            },
          },
          {
            events: [
              {
                payload: "text-1",
                trigger: "click",
                type: "externalY",
              },
            ],
            id: "btn-down-2p-001",
            styles: {
              backgroundColor: "none",
              border: "2px solid #8c5638",
              color: "#8c5638",
              fontWeight: "700",
              height: "6%",
              left: "90%",
              padding: "auto",
              position: "absolute",
              textAlign: "center",
              top: "10%",
              width: "13%",
            },
            text: {
              default: "DOWN",
            },
          },
          {
            events: [
              {
                payload: {
                  key: "answer",
                  value: "New Delhi",
                },
                trigger: "click",
                type: "ACTION.CHECKSTATE",
              },
            ],
            id: "btn-check-2p-001",
            styles: {
              backgroundColor: "none",
              color: "#8c5638",
              fontWeight: "700",
              left: "85%",
              padding: "auto",
              position: "absolute",
              textAlign: "center",
              top: "90%",
            },
            text: {
              default: "CHECK",
            },
          },
          {
            animations: [
              {
                delay: 0.3,
                direction: "normal",
                duration: 1.5,
                iterationCount: 1,
                timingFunction: "ease",
                trigger: "click",
                type: "scaleUpAnimation",
              },
            ],
            events: [
              {
                payload: {
                  key: "answer",
                  value: "Gurugram",
                },
                trigger: "click",
                type: "ACTION.SETSTATE",
              },
            ],
            id: "option-2p-001",
            styles: {
              backgroundColor: "none",
              border: "4px solid #8c5638",
              color: "#8c5638",
              fontSize: "1rem",
              fontWeight: "600",
              height: "10%",
              left: "33%",
              padding: "1rem",
              position: "absolute",
              textAlign: "left",
              top: "65%",
              width: "25%",
            },
            text: {
              default: "Gurugram",
            },
          },
          {
            animations: [
              {
                delay: 0.3,
                direction: "normal",
                duration: 1.5,
                iterationCount: 1,
                timingFunction: "ease",
                trigger: "click",
                type: "scaleUpAnimation",
              },
            ],
            events: [
              {
                payload: {
                  key: "answer",
                  value: "Chennai",
                },
                trigger: "click",
                type: "ACTION.SETSTATE",
              },
            ],
            id: "option-2p-002",
            styles: {
              backgroundColor: "none",
              border: "4px solid #8c5638",
              color: "#8c5638",
              fontSize: "1rem",
              fontWeight: "600",
              height: "10%",
              left: "66%",
              padding: "1rem",
              position: "absolute",
              textAlign: "left",
              top: "65%",
              width: "25%",
            },
            text: {
              default: "Chennai",
            },
          },
          {
            animations: [
              {
                delay: 0.3,
                direction: "normal",
                duration: 1.5,
                iterationCount: 1,
                timingFunction: "ease",
                trigger: "click",
                type: "scaleUpAnimation",
              },
            ],
            events: [
              {
                payload: {
                  key: "answer",
                  value: "New Delhi",
                },
                trigger: "click",
                type: "ACTION.SETSTATE",
              },
            ],
            id: "option-2p-003",
            styles: {
              backgroundColor: "none",
              border: "4px solid #8c5638",
              color: "#8c5638",
              fontSize: "1rem",
              fontWeight: "600",
              height: "10%",
              left: "33%",
              padding: "1rem",
              position: "absolute",
              textAlign: "left",
              top: "77%",
              width: "25%",
            },
            text: {
              default: "New Delhi",
            },
          },
          {
            animations: [
              {
                delay: 0.3,
                direction: "normal",
                duration: 1.5,
                iterationCount: 1,
                timingFunction: "ease",
                trigger: "click",
                type: "scaleUpAnimation",
              },
            ],
            events: [
              {
                payload: {
                  key: "answer",
                  value: "Bengaluru",
                },
                trigger: "click",
                type: "ACTION.SETSTATE",
              },
            ],
            id: "option-2p-004",
            styles: {
              backgroundColor: "none",
              border: "4px solid #8c5638",
              color: "#8c5638",
              fontSize: "1rem",
              fontWeight: "600",
              height: "10%",
              left: "66%",
              padding: "1rem",
              position: "absolute",
              textAlign: "left",
              top: "77%",
              width: "25%",
            },
            text: {
              default: "Bengaluru",
            },
          },
          {
            events: [
              {
                payload: "",
                trigger: "click",
                type: "ACTION.PREV",
              },
            ],
            id: "btn-prev-2p-001",
            imageUrl:
              "https://firebasestorage.googleapis.com/v0/b/thegoodgametheory-quiz.appspot.com/o/assets%2Fbutton_prev.svg?alt=media&token=811ebf77-dd80-4025-ba8a-f862a9550291",
            styles: {
              height: "3.3rem",
              left: "40%",
              position: "absolute",
              top: "90%",
              width: "3rem",
            },
          },
          {
            events: [
              {
                payload: "",
                trigger: "next-event",
                type: "ACTION.NEXT",
              },
              {
                payload: "",
                trigger: "click",
                type: "ACTION.NEXT",
              },
            ],
            id: "btn-next2p-001",
            imageUrl:
              "https://firebasestorage.googleapis.com/v0/b/thegoodgametheory-quiz.appspot.com/o/assets%2Fbutton_next.svg?alt=media&token=e40a5d10-a663-4461-9cb1-b29bd93dde0b",
            styles: {
              height: "3.3rem",
              left: "60%",
              position: "absolute",
              top: "90%",
              width: "3rem",
            },
          },
          {
            id: "img-bg-2p-001",
            imageUrl:
              "https://firebasestorage.googleapis.com/v0/b/thegoodgametheory-quiz.appspot.com/o/assets%2Fbg-b1.png?alt=media&token=dd173f0e-3cb7-4879-aa64-82e379ac0623",
            styles: {
              borderRadius: "10px",
              height: "100vh",
              position: "absolute",
              width: "100vw",
              zIndex: "-1",
            },
          },
        ],
      },
    },
    {
      category: "info",
      landscape: {
        divs: [
          {
            id: "player-score-display",
            styles: {
              fontSize: "20px",
              fontWeight: "bold",
              left: "20%",
              position: "absolute",
              top: "10%",
            },
            subscribeTo: "PLAYERSCORE",
            subscription: {
              renderFunctions: [
                {
                  functionBody:
                    "return function getPlayerScore(data) { const sessionId = data['SESSIONID']; const players = data['PLAYERS']; if (!sessionId || !players) { return undefined; } const player = players[sessionId]; if (!player || !player.playerName || !player.score) { return 'Error: Player data is missing or incomplete'; } return player.playerName + ' : ' + player.score; }",
                  id: "PLAYERSCORE",
                },
              ],
              sources: [
                {
                  id: "SESSIONID",
                  subscribeTo: "sessionId",
                },
                {
                  id: "PLAYERS",
                  subscribeTo: "players",
                },
                {
                  id: "PLAYERNAME",
                  subscribeTo: "playerName",
                },
              ],
            },
            text: {
              default: "Score: 1",
            },
          },
          {
            id: "opponent-score-display",
            styles: {
              fontSize: "20px",
              fontWeight: "bold",
              left: "80%",
              position: "absolute",
              top: "10%",
            },
            subscribeTo: "OPPONENTSCORE",
            subscription: {
              renderFunctions: [
                {
                  functionBody:
                    "return function getOpponentScore(data) { const sessionId = data['SESSIONID']; const players = data['PLAYERS']; if (!players || !sessionId) { return undefined; }; const opponent = Object.values(players).find(player => player.sessionId !== sessionId); if (!opponent || !opponent.playerName || !opponent.score) { return undefined; } return opponent.playerName + ' : ' + opponent.score; }",
                  id: "OPPONENTSCORE",
                },
              ],
              sources: [
                {
                  id: "SESSIONID",
                  subscribeTo: "sessionId",
                },
                {
                  id: "PLAYERS",
                  subscribeTo: "players",
                },
                {
                  id: "PLAYERNAME",
                  subscribeTo: "playerName",
                },
              ],
            },
            text: {
              default: "Score: 2",
            },
          },
          {
            animations: [
              {
                delay: 0.3,
                direction: "normal",
                duration: 1.5,
                iterationCount: 1,
                timingFunction: "ease",
                trigger: "externalX",
                type: "panX",
              },
              {
                delay: 0.3,
                direction: "normal",
                duration: 1.5,
                iterationCount: 1,
                timingFunction: "ease",
                trigger: "externalY",
                type: "panY",
              },
            ],
            id: "text-4l-001",
            styles: {
              backgroundColor: "none",
              color: "black",
              fontFamily: "Century Gothic, sans-serif",
              fontSize: "55px",
              fontWeight: "800",
              left: "40%",
              margin: "auto",
              position: "absolute",
              textAlign: "left",
              textShadow: "2px 2px 2px white",
              width: "40%",
            },
            text: {
              default: "QL3 : Which company makes the car named G-Wagon?",
            },
          },
          {
            events: [
              {
                payload: "text-1",
                trigger: "click",
                type: "externalX",
              },
            ],
            id: "btn-left-4l-001",
            styles: {
              backgroundColor: "none",
              border: "2px solid #8c5638",
              color: "#8c5638",
              fontWeight: "700",
              height: "10%",
              left: "40%",
              padding: "auto",
              position: "absolute",
              textAlign: "center",
              top: "10%",
              width: "5%",
            },
            text: {
              default: "LEFT",
            },
          },
          {
            events: [
              {
                payload: "text-1",
                trigger: "click",
                type: "externalY",
              },
            ],
            id: "btn-down-4l-001",
            styles: {
              backgroundColor: "none",
              border: "2px solid #8c5638",
              color: "#8c5638",
              fontWeight: "700",
              height: "10%",
              left: "60%",
              padding: "auto",
              position: "absolute",
              textAlign: "center",
              top: "10%",
              width: "5%",
            },
            text: {
              default: "DOWN",
            },
          },
          {
            events: [
              {
                payload: {
                  key: "answer",
                  value: "Mercedes",
                },
                trigger: "click",
                type: "ACTION.CHECKSTATE",
              },
              {
                callback: "next-event",
                callbackPayload: "btn-next-4l-001",
                delay: 1,
                payload: {
                  key: "answer",
                  value: "Mercedes",
                },
                trigger: "check-event",
                type: "ACTION.CHECKSTATE",
              },
            ],
            id: "btn-check-4l-001",
            styles: {
              backgroundColor: "none",
              border: "2px solid #8c5638",
              color: "#8c5638",
              fontWeight: "700",
              height: "10%",
              padding: "auto",
              position: "absolute",
              textAlign: "center",
              top: "80%",
              width: "15%",
            },
            text: {
              default: "CHECK",
            },
          },
          {
            events: [
              {
                payload: {
                  key: "answer",
                  value: "Audi",
                },
                trigger: "click",
                type: "ACTION.SETSTATE",
              },
            ],
            id: "option-4l-001",
            styles: {
              backgroundColor: "none",
              border: "4px solid #8c5638",
              color: "#8c5638",
              fontSize: "2rem",
              fontWeight: "600",
              height: "10%",
              left: "70%",
              padding: "auto",
              position: "absolute",
              textAlign: "left",
              top: "33%",
              width: "20%",
            },
            text: {
              default: "Audi",
            },
          },
          {
            events: [
              {
                payload: {
                  key: "answer",
                  value: "Mercedes",
                },
                trigger: "click",
                type: "ACTION.SETSTATE",
              },
            ],
            id: "option-4l-002",
            styles: {
              backgroundColor: "none",
              border: "4px solid #8c5638",
              color: "#8c5638",
              fontSize: "2rem",
              fontWeight: "600",
              height: "10%",
              left: "70%",
              padding: "auto",
              position: "absolute",
              textAlign: "left",
              top: "44%",
              width: "20%",
            },
            text: {
              default: "Mercedes",
            },
          },
          {
            events: [
              {
                payload: {
                  key: "answer",
                  value: "BMW",
                },
                trigger: "click",
                type: "ACTION.SETSTATE",
              },
            ],
            id: "option-4l-003",
            styles: {
              backgroundColor: "none",
              border: "4px solid #8c5638",
              color: "#8c5638",
              fontSize: "2rem",
              fontWeight: "600",
              height: "10%",
              left: "70%",
              padding: "auto",
              position: "absolute",
              textAlign: "left",
              top: "55%",
              width: "20%",
            },
            text: {
              default: "BMW",
            },
          },
          {
            events: [
              {
                payload: {
                  key: "answer",
                  value: "Lexus",
                },
                trigger: "click",
                type: "ACTION.SETSTATE",
              },
            ],
            id: "option-4l-004",
            styles: {
              backgroundColor: "none",
              border: "4px solid #8c5638",
              color: "#8c5638",
              fontSize: "2rem",
              fontWeight: "600",
              height: "10%",
              left: "70%",
              padding: "auto",
              position: "absolute",
              textAlign: "left",
              top: "66%",
              width: "20%",
            },
            text: {
              default: "Lexus",
            },
          },
          {
            events: [
              {
                payload: "",
                trigger: "click",
                type: "ACTION.PREV",
              },
            ],
            id: "btn-prev-4l-001",
            imageUrl:
              "https://firebasestorage.googleapis.com/v0/b/thegoodgametheory-quiz.appspot.com/o/assets%2Fbutton_prev.svg?alt=media&token=811ebf77-dd80-4025-ba8a-f862a9550291",
            styles: {
              height: "5.5rem",
              left: "10%",
              position: "absolute",
              width: "5rem",
            },
          },
          {
            events: [
              {
                payload: "",
                trigger: "next-event",
                type: "ACTION.NEXT",
              },
              {
                payload: "",
                trigger: "click",
                type: "ACTION.NEXT",
              },
            ],
            id: "btn-next-4l-001",
            imageUrl:
              "https://firebasestorage.googleapis.com/v0/b/thegoodgametheory-quiz.appspot.com/o/assets%2Fbutton_next.svg?alt=media&token=e40a5d10-a663-4461-9cb1-b29bd93dde0b",
            styles: {
              height: "5.5rem",
              left: "90%",
              position: "absolute",
              width: "5rem",
            },
          },
          {
            id: "img-bg-2l-001",
            imageUrl:
              "https://firebasestorage.googleapis.com/v0/b/thegoodgametheory-quiz.appspot.com/o/assets%2Fbg-b1.png?alt=media&token=dd173f0e-3cb7-4879-aa64-82e379ac0623",
            styles: {
              borderRadius: "10px",
              height: "100vh",
              position: "absolute",
              width: "100vw",
              zIndex: "-1",
            },
          },
          {
            animations: [
              {
                callback: "check-event",
                callbackPayload: "btn-check-4l-001",
                delay: 0,
                direction: "normal",
                duration: 5,
                iterationCount: 1,
                timingFunction: "ease-out",
                trigger: "mount",
                type: "slider",
              },
            ],
            id: "progress-bar",
            styles: {
              backgroundColor: "#3f6cb5",
              borderRadius: "10px",
              height: "5px",
              left: "0px",
              overflow: "hidden",
              position: "absolute",
              top: "0px",
              transform: "translate(0%,0%)",
              zIndex: "110",
            },
          },
          {
            id: "progress-bar-background",
            styles: {
              backgroundColor: "gray",
              borderRadius: "10px",
              height: "2px",
              left: "0px",
              overflow: "hidden",
              position: "absolute",
              top: "0px",
              transform: "translate(0%,0%)",
              width: "100%",
              zIndex: "100",
            },
          },
        ],
      },
      portrait: {
        divs: [
          {
            animations: [
              {
                delay: 0.3,
                direction: "normal",
                duration: 1.5,
                iterationCount: 1,
                timingFunction: "ease",
                trigger: "mount",
                type: "panY",
              },
              {
                delay: 0.3,
                direction: "normal",
                duration: 1.5,
                iterationCount: 1,
                timingFunction: "ease",
                trigger: "click",
                type: "scaleUpAnimation",
              },
            ],
            id: "text-2p-001",
            styles: {
              backgroundColor: "none",
              color: "black",
              fontFamily: "Century Gothic, sans-serif",
              fontSize: "55px",
              fontWeight: "800",
              margin: "auto",
              position: "absolute",
              textAlign: "center",
              textShadow: "2px 2px 2px white",
              top: "40%",
              width: "60%",
            },
            text: {
              default: "QP1 : What is Capital of India?",
            },
          },
          {
            events: [
              {
                payload: "text-1",
                trigger: "click",
                type: "externalX",
              },
            ],
            id: "btn-left-2p-001",
            styles: {
              backgroundColor: "none",
              border: "2px solid #8c5638",
              color: "#8c5638",
              fontWeight: "700",
              height: "6%",
              left: "10%",
              padding: "auto",
              position: "absolute",
              textAlign: "center",
              top: "10%",
              width: "13%",
            },
            text: {
              default: "LEFT",
            },
          },
          {
            events: [
              {
                payload: "text-1",
                trigger: "click",
                type: "externalY",
              },
            ],
            id: "btn-down-2p-001",
            styles: {
              backgroundColor: "none",
              border: "2px solid #8c5638",
              color: "#8c5638",
              fontWeight: "700",
              height: "6%",
              left: "90%",
              padding: "auto",
              position: "absolute",
              textAlign: "center",
              top: "10%",
              width: "13%",
            },
            text: {
              default: "DOWN",
            },
          },
          {
            events: [
              {
                payload: {
                  key: "answer",
                  value: "New Delhi",
                },
                trigger: "click",
                type: "ACTION.CHECKSTATE",
              },
            ],
            id: "btn-check-2p-001",
            styles: {
              backgroundColor: "none",
              color: "#8c5638",
              fontWeight: "700",
              left: "85%",
              padding: "auto",
              position: "absolute",
              textAlign: "center",
              top: "90%",
            },
            text: {
              default: "CHECK",
            },
          },
          {
            animations: [
              {
                delay: 0.3,
                direction: "normal",
                duration: 1.5,
                iterationCount: 1,
                timingFunction: "ease",
                trigger: "click",
                type: "scaleUpAnimation",
              },
            ],
            events: [
              {
                payload: {
                  key: "answer",
                  value: "Gurugram",
                },
                trigger: "click",
                type: "ACTION.SETSTATE",
              },
            ],
            id: "option-2p-001",
            styles: {
              backgroundColor: "none",
              border: "4px solid #8c5638",
              color: "#8c5638",
              fontSize: "1rem",
              fontWeight: "600",
              height: "10%",
              left: "33%",
              padding: "1rem",
              position: "absolute",
              textAlign: "left",
              top: "65%",
              width: "25%",
            },
            text: {
              default: "Gurugram",
            },
          },
          {
            animations: [
              {
                delay: 0.3,
                direction: "normal",
                duration: 1.5,
                iterationCount: 1,
                timingFunction: "ease",
                trigger: "click",
                type: "scaleUpAnimation",
              },
            ],
            events: [
              {
                payload: {
                  key: "answer",
                  value: "Chennai",
                },
                trigger: "click",
                type: "ACTION.SETSTATE",
              },
            ],
            id: "option-2p-002",
            styles: {
              backgroundColor: "none",
              border: "4px solid #8c5638",
              color: "#8c5638",
              fontSize: "1rem",
              fontWeight: "600",
              height: "10%",
              left: "66%",
              padding: "1rem",
              position: "absolute",
              textAlign: "left",
              top: "65%",
              width: "25%",
            },
            text: {
              default: "Chennai",
            },
          },
          {
            animations: [
              {
                delay: 0.3,
                direction: "normal",
                duration: 1.5,
                iterationCount: 1,
                timingFunction: "ease",
                trigger: "click",
                type: "scaleUpAnimation",
              },
            ],
            events: [
              {
                payload: {
                  key: "answer",
                  value: "New Delhi",
                },
                trigger: "click",
                type: "ACTION.SETSTATE",
              },
            ],
            id: "option-2p-003",
            styles: {
              backgroundColor: "none",
              border: "4px solid #8c5638",
              color: "#8c5638",
              fontSize: "1rem",
              fontWeight: "600",
              height: "10%",
              left: "33%",
              padding: "1rem",
              position: "absolute",
              textAlign: "left",
              top: "77%",
              width: "25%",
            },
            text: {
              default: "New Delhi",
            },
          },
          {
            animations: [
              {
                delay: 0.3,
                direction: "normal",
                duration: 1.5,
                iterationCount: 1,
                timingFunction: "ease",
                trigger: "click",
                type: "scaleUpAnimation",
              },
            ],
            events: [
              {
                payload: {
                  key: "answer",
                  value: "Bengaluru",
                },
                trigger: "click",
                type: "ACTION.SETSTATE",
              },
            ],
            id: "option-2p-004",
            styles: {
              backgroundColor: "none",
              border: "4px solid #8c5638",
              color: "#8c5638",
              fontSize: "1rem",
              fontWeight: "600",
              height: "10%",
              left: "66%",
              padding: "1rem",
              position: "absolute",
              textAlign: "left",
              top: "77%",
              width: "25%",
            },
            text: {
              default: "Bengaluru",
            },
          },
          {
            events: [
              {
                payload: "",
                trigger: "click",
                type: "ACTION.PREV",
              },
            ],
            id: "btn-prev-2p-001",
            imageUrl:
              "https://firebasestorage.googleapis.com/v0/b/thegoodgametheory-quiz.appspot.com/o/assets%2Fbutton_prev.svg?alt=media&token=811ebf77-dd80-4025-ba8a-f862a9550291",
            styles: {
              height: "3.3rem",
              left: "40%",
              position: "absolute",
              top: "90%",
              width: "3rem",
            },
          },
          {
            events: [
              {
                payload: "",
                trigger: "next-event",
                type: "ACTION.NEXT",
              },
              {
                payload: "",
                trigger: "click",
                type: "ACTION.NEXT",
              },
            ],
            id: "btn-next2p-001",
            imageUrl:
              "https://firebasestorage.googleapis.com/v0/b/thegoodgametheory-quiz.appspot.com/o/assets%2Fbutton_next.svg?alt=media&token=e40a5d10-a663-4461-9cb1-b29bd93dde0b",
            styles: {
              height: "3.3rem",
              left: "60%",
              position: "absolute",
              top: "90%",
              width: "3rem",
            },
          },
          {
            id: "img-bg-2p-001",
            imageUrl:
              "https://firebasestorage.googleapis.com/v0/b/thegoodgametheory-quiz.appspot.com/o/assets%2Fbg-b1.png?alt=media&token=dd173f0e-3cb7-4879-aa64-82e379ac0623",
            styles: {
              borderRadius: "10px",
              height: "100vh",
              position: "absolute",
              width: "100vw",
              zIndex: "-1",
            },
          },
        ],
      },
    },
    {
      category: "info",
      landscape: {
        divs: [
          {
            id: "player-score-display",
            styles: {
              fontSize: "20px",
              fontWeight: "bold",
              left: "20%",
              position: "absolute",
              top: "10%",
            },
            subscribeTo: "PLAYERSCORE",
            subscription: {
              renderFunctions: [
                {
                  functionBody:
                    "return function getPlayerScore(data) { const sessionId = data['SESSIONID']; const players = data['PLAYERS']; if (!sessionId || !players) { return undefined; } const player = players[sessionId]; if (!player || !player.playerName || !player.score) { return 'Error: Player data is missing or incomplete'; } return player.playerName + ' : ' + player.score; }",
                  id: "PLAYERSCORE",
                },
              ],
              sources: [
                {
                  id: "SESSIONID",
                  subscribeTo: "sessionId",
                },
                {
                  id: "PLAYERS",
                  subscribeTo: "players",
                },
                {
                  id: "PLAYERNAME",
                  subscribeTo: "playerName",
                },
              ],
            },
            text: {
              default: "Score: 1",
            },
          },
          {
            id: "opponent-score-display",
            styles: {
              fontSize: "20px",
              fontWeight: "bold",
              left: "80%",
              position: "absolute",
              top: "10%",
            },
            subscribeTo: "OPPONENTSCORE",
            subscription: {
              renderFunctions: [
                {
                  functionBody:
                    "return function getOpponentScore(data) { const sessionId = data['SESSIONID']; const players = data['PLAYERS']; if (!players || !sessionId) { return undefined; }; const opponent = Object.values(players).find(player => player.sessionId !== sessionId); if (!opponent || !opponent.playerName || !opponent.score) { return undefined; } return opponent.playerName + ' : ' + opponent.score; }",
                  id: "OPPONENTSCORE",
                },
              ],
              sources: [
                {
                  id: "SESSIONID",
                  subscribeTo: "sessionId",
                },
                {
                  id: "PLAYERS",
                  subscribeTo: "players",
                },
                {
                  id: "PLAYERNAME",
                  subscribeTo: "playerName",
                },
              ],
            },
            text: {
              default: "Score: 2",
            },
          },
          {
            animations: [
              {
                delay: 0.3,
                direction: "normal",
                duration: 1.5,
                iterationCount: 1,
                timingFunction: "ease",
                trigger: "externalX",
                type: "panX",
              },
              {
                callback: "externalX",
                callbackPayload: "text-5l-001",
                delay: 0.3,
                direction: "normal",
                duration: 1.5,
                iterationCount: 1,
                timingFunction: "ease",
                trigger: "externalY",
                type: "panY",
              },
            ],
            id: "text-5l-001",
            styles: {
              backgroundColor: "none",
              color: "black",
              fontFamily: "Century Gothic, sans-serif",
              fontSize: "55px",
              fontWeight: "800",
              left: "40%",
              margin: "auto",
              position: "absolute",
              textAlign: "left",
              textShadow: "2px 2px 2px white",
              width: "40%",
            },
            text: {
              default:
                "QL5 : Is the full form of ISRO 'Indian Space Research Organisation'?",
            },
          },
          {
            events: [
              {
                callback: "next-event",
                callbackPayload: "btn-next-1l-001",
                delay: 3000,
                payload: "text-1l-001",
                trigger: "click",
                type: "externalY",
              },
            ],
            id: "btn-left-5l-001",
            styles: {
              backgroundColor: "none",
              border: "2px solid #8c5638",
              color: "#8c5638",
              fontWeight: "700",
              height: "10%",
              left: "40%",
              padding: "auto",
              position: "absolute",
              textAlign: "center",
              top: "10%",
              width: "5%",
            },
            text: {
              default: "LEFT",
            },
          },
          {
            events: [
              {
                payload: "text-1",
                trigger: "click",
                type: "externalY",
              },
            ],
            id: "btn-down-5l-001",
            styles: {
              backgroundColor: "none",
              border: "2px solid #8c5638",
              color: "#8c5638",
              fontWeight: "700",
              height: "10%",
              left: "60%",
              padding: "auto",
              position: "absolute",
              textAlign: "center",
              top: "10%",
              width: "5%",
            },
            text: {
              default: "DOWN",
            },
          },
          {
            events: [
              {
                payload: {
                  key: "answer",
                  value: "YES",
                },
                trigger: "click",
                type: "ACTION.CHECKSTATE",
              },
              {
                callback: "next-event",
                callbackPayload: "btn-next-5l-001",
                delay: 1,
                payload: {
                  key: "answer",
                  value: "YES",
                },
                trigger: "check-event",
                type: "ACTION.CHECKSTATE",
              },
            ],
            id: "btn-check-5l-001",
            styles: {
              backgroundColor: "none",
              color: "#8c5638",
              fontWeight: "700",
              height: "10%",
              padding: "auto",
              position: "absolute",
              textAlign: "center",
              top: "80%",
              width: "15%",
            },
            text: {
              default: "CHECK",
            },
          },
          {
            events: [
              {
                payload: {
                  key: "answer",
                  value: "YES",
                },
                trigger: "click",
                type: "ACTION.SETSTATE",
              },
            ],
            id: "option-5l-001",
            styles: {
              backgroundColor: "none",
              color: "#8c5638",
              fontSize: "25px",
              fontWeight: "600",
              height: "10%",
              left: "70%",
              padding: "auto",
              position: "absolute",
              textAlign: "left",
              top: "40%",
            },
            text: {
              default: "Yes",
            },
          },
          {
            events: [
              {
                payload: {
                  key: "answer",
                  value: "NO",
                },
                trigger: "click",
                type: "ACTION.SETSTATE",
              },
            ],
            id: "option-5l-002",
            styles: {
              backgroundColor: "none",
              color: "#8c5638",
              fontSize: "25px",
              fontWeight: "600",
              height: "10%",
              left: "70%",
              padding: "auto",
              position: "absolute",
              textAlign: "left",
              top: "60%",
            },
            text: {
              default: "No",
            },
          },
          {
            events: [
              {
                payload: "",
                trigger: "click",
                type: "ACTION.PREV",
              },
            ],
            id: "btn-prev-5l-001",
            imageUrl:
              "https://firebasestorage.googleapis.com/v0/b/thegoodgametheory-quiz.appspot.com/o/assets%2Fbutton_prev.svg?alt=media&token=811ebf77-dd80-4025-ba8a-f862a9550291",
            styles: {
              height: "5.5rem",
              left: "10%",
              position: "absolute",
              width: "5rem",
            },
          },
          {
            events: [
              {
                payload: "",
                trigger: "next-event",
                type: "ACTION.NEXT",
              },
              {
                payload: "",
                trigger: "click",
                type: "ACTION.NEXT",
              },
            ],
            id: "btn-next-5l-001",
            imageUrl:
              "https://firebasestorage.googleapis.com/v0/b/thegoodgametheory-quiz.appspot.com/o/assets%2Fbutton_next.svg?alt=media&token=e40a5d10-a663-4461-9cb1-b29bd93dde0b",
            styles: {
              height: "5.5rem",
              left: "90%",
              position: "absolute",
              width: "5rem",
            },
          },
          {
            id: "img-bg-5l-001",
            imageUrl:
              "https://firebasestorage.googleapis.com/v0/b/thegoodgametheory-quiz.appspot.com/o/assets%2Fbg-b1.png?alt=media&token=dd173f0e-3cb7-4879-aa64-82e379ac0623",
            styles: {
              borderRadius: "10px",
              height: "100vh",
              position: "absolute",
              width: "100vw",
              zIndex: "-1",
            },
          },
          {
            animations: [
              {
                callback: "check-event",
                callbackPayload: "btn-check-5l-001",
                delay: 0,
                direction: "normal",
                duration: 5,
                iterationCount: 1,
                timingFunction: "ease-out",
                trigger: "mount",
                type: "slider",
              },
            ],
            id: "progress-bar",
            styles: {
              backgroundColor: "#3f6cb5",
              borderRadius: "10px",
              height: "5px",
              left: "0px",
              overflow: "hidden",
              position: "absolute",
              top: "0px",
              transform: "translate(0%,0%)",
              zIndex: "110",
            },
          },
          {
            id: "progress-bar-background",
            styles: {
              backgroundColor: "gray",
              borderRadius: "10px",
              height: "2px",
              left: "0px",
              overflow: "hidden",
              position: "absolute",
              top: "0px",
              transform: "translate(0%,0%)",
              width: "100%",
              zIndex: "100",
            },
          },
        ],
      },
      portrait: {
        divs: [
          {
            animations: [
              {
                delay: 0.3,
                direction: "normal",
                duration: 1.5,
                iterationCount: 1,
                timingFunction: "ease",
                trigger: "mount",
                type: "panY",
              },
            ],
            id: "text-1p-001",
            styles: {
              backgroundColor: "none",
              color: "black",
              fontFamily: "Century Gothic, sans-serif",
              fontSize: "55px",
              fontWeight: "800",
              margin: "auto",
              position: "absolute",
              textAlign: "center",
              textShadow: "2px 2px 2px white",
              top: "40%",
              width: "60%",
            },
            text: {
              default: "QP1 : Is Cricket a sport?",
            },
          },
          {
            events: [
              {
                payload: "text-1",
                trigger: "click",
                type: "externalX",
              },
            ],
            id: "btn-left-1p-001",
            styles: {
              backgroundColor: "none",
              border: "2px solid #8c5638",
              color: "#8c5638",
              fontWeight: "700",
              height: "6%",
              left: "10%",
              padding: "auto",
              position: "absolute",
              textAlign: "center",
              top: "10%",
              width: "13%",
            },
            text: {
              default: "LEFT",
            },
          },
          {
            events: [
              {
                payload: "text-1",
                trigger: "click",
                type: "externalY",
              },
            ],
            id: "btn-down-1p-001",
            styles: {
              backgroundColor: "none",
              border: "2px solid #8c5638",
              color: "#8c5638",
              fontWeight: "700",
              height: "6%",
              left: "90%",
              padding: "auto",
              position: "absolute",
              textAlign: "center",
              top: "10%",
              width: "13%",
            },
            text: {
              default: "DOWN",
            },
          },
          {
            events: [
              {
                payload: {
                  key: "answer",
                  value: "YES",
                },
                trigger: "click",
                type: "ACTION.CHECKSTATE",
              },
            ],
            id: "btn-check-1p-001",
            styles: {
              backgroundColor: "none",
              color: "#8c5638",
              fontWeight: "700",
              height: "10%",
              left: "85%",
              padding: "auto",
              position: "absolute",
              textAlign: "center",
              top: "90%",
              width: "25%",
            },
            text: {
              default: "CHECK",
            },
          },
          {
            animations: [
              {
                delay: 0.3,
                direction: "normal",
                duration: 1.5,
                iterationCount: 1,
                timingFunction: "ease",
                trigger: "click",
                type: "scaleUpAnimation",
              },
            ],
            events: [
              {
                payload: {
                  key: "answer",
                  value: "YES",
                },
                trigger: "click",
                type: "ACTION.SETSTATE",
              },
            ],
            id: "option-1p-001",
            styles: {
              backgroundColor: "none",
              border: "4px solid #8c5638",
              color: "#8c5638",
              fontSize: "2rem",
              fontWeight: "600",
              height: "10%",
              left: "33%",
              padding: "1rem",
              position: "absolute",
              textAlign: "left",
              top: "65%",
            },
            text: {
              default: "Yes",
            },
          },
          {
            animations: [
              {
                delay: 0.3,
                direction: "normal",
                duration: 1.5,
                iterationCount: 1,
                timingFunction: "ease",
                trigger: "click",
                type: "scaleUpAnimation",
              },
            ],
            events: [
              {
                payload: {
                  key: "answer",
                  value: "NO",
                },
                trigger: "click",
                type: "ACTION.SETSTATE",
              },
            ],
            id: "option-1p-002",
            styles: {
              backgroundColor: "none",
              border: "4px solid #8c5638",
              color: "#8c5638",
              fontSize: "2rem",
              fontWeight: "600",
              height: "10%",
              left: "66%",
              padding: "1rem",
              position: "absolute",
              textAlign: "left",
              top: "65%",
            },
            text: {
              default: "No",
            },
          },
          {
            events: [
              {
                payload: "",
                trigger: "click",
                type: "ACTION.PREV",
              },
            ],
            id: "btn-prev-1p-001",
            imageUrl:
              "https://firebasestorage.googleapis.com/v0/b/thegoodgametheory-quiz.appspot.com/o/assets%2Fbutton_prev.svg?alt=media&token=811ebf77-dd80-4025-ba8a-f862a9550291",
            styles: {
              height: "3.3rem",
              left: "40%",
              position: "absolute",
              top: "90%",
              width: "3rem",
            },
          },
          {
            events: [
              {
                payload: "",
                trigger: "click",
                type: "ACTION.NEXT",
              },
            ],
            id: "btn-next-1p-001",
            imageUrl:
              "https://firebasestorage.googleapis.com/v0/b/thegoodgametheory-quiz.appspot.com/o/assets%2Fbutton_next.svg?alt=media&token=e40a5d10-a663-4461-9cb1-b29bd93dde0b",
            styles: {
              height: "3.3rem",
              left: "60%",
              position: "absolute",
              top: "90%",
              width: "3rem",
            },
          },
          {
            id: "img-bg-1p-001",
            imageUrl:
              "https://firebasestorage.googleapis.com/v0/b/thegoodgametheory-quiz.appspot.com/o/assets%2Fbg-b1.png?alt=media&token=dd173f0e-3cb7-4879-aa64-82e379ac0623",
            styles: {
              borderRadius: "10px",
              height: "100vh",
              position: "absolute",
              width: "100vw",
              zIndex: "-1",
            },
          },
        ],
      },
    },
  ],
  title: "First Quiz Game",
  views: 1500,
};

export default mockData;