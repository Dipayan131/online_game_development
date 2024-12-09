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
            id: "page-1",
            styles: {
              backgroundColor: "#FBA834",
              color: "black",
              fontWeight: "bold",
              padding: "8px 16px",
              top: "70%",
              width: "10%",
              left: "25%",
              border: "4px solid black",
              borderRadius: "10px",
              cursor: "pointer",
            },
            text: {
              default: "1",
            },
            events: [
              {
                trigger: "click",
                type: "ACTION.GOTOPAGE",
                payload: {
                  pageNumber: 1,
                  functionBody: `
                  return function checkAnswers(data) {
                    const countValue = data['answer'];
                    
                    return countValue > 10 ? true : false;
                }                
                  `,
                },
              },
            ],
          },
          {
            id: "page-2",
            styles: {
              backgroundColor: "#FBA834",
              color: "black",
              fontWeight: "bold",
              padding: "8px 16px",
              top: "70%",
              width: "10%",
              left: "38%",
              border: "4px solid black",
              borderRadius: "10px",
              cursor: "pointer",
            },
            text: {
              default: "2",
            },
            events: [
              {
                trigger: "click",
                type: "ACTION.GOTOPAGE",
                payload: {
                  pageNumber: 2,
                  functionBody: `
                  return function checkAnswers(data) {
                    const countValue = data['answer'];
                    
                    return countValue < 20 ? true : false;
                }                
                  `,
                },
              },
            ],
          },
          {
            id: "page-3",
            styles: {
              backgroundColor: "#FBA834",
              color: "black",
              fontWeight: "bold",
              padding: "8px 16px",
              top: "70%",
              width: "10%",
              left: "51%",
              border: "4px solid black",
              borderRadius: "10px",
              cursor: "pointer",
            },
            text: {
              default: "3",
            },
            events: [
              {
                trigger: "click",
                type: "ACTION.GOTOPAGE",
                payload: {
                  pageNumber: 3,
                  functionBody: `
                  return function checkAnswers(data) {
                    const countValue = data['answer'];
                    
                    return countValue > 20 ? true : false;
                }                
                  `,
                },
              },
            ],
          },
          {
            id: "page-4",
            styles: {
              backgroundColor: "#FBA834",
              color: "black",
              fontWeight: "bold",
              padding: "8px 16px",
              top: "70%",
              width: "10%",
              left: "68%",
              border: "4px solid black",
              borderRadius: "10px",
              cursor: "pointer",
            },
            text: {
              default: "4",
            },
            events: [
              {
                trigger: "click",
                type: "ACTION.GOTOPAGE",
                payload: {
                  pageNumber: 4,
                  functionBody: `
                  return function checkAnswers(data) {
                    const countValue = data['answer'];
                    
                    return countValue > 40 ? true : false;
                }                
                  `,
                },
              },
            ],
          },
          {
            id: "page-5",
            styles: {
              backgroundColor: "#FBA834",
              color: "black",
              fontWeight: "bold",
              padding: "8px 16px",
              top: "70%",
              width: "10%",
              left: "86%",
              border: "4px solid black",
              borderRadius: "10px",
              cursor: "pointer",
            },
            text: {
              default: "5",
            },
            events: [
              {
                trigger: "click",
                type: "ACTION.GOTOPAGE",
                payload: {
                  pageNumber: 5,
                  functionBody: `
                  return function checkAnswers(data) {
                    const countValue = data['answer'];
                    
                    return countValue < 50 ? true : false;
                }                
                  `,
                },
              },
            ],
          },
          {
            id: "page-6",
            styles: {
              backgroundColor: "#FBA834",
              color: "black",
              fontWeight: "bold",
              padding: "8px 16px",
              top: "70%",
              width: "10%",
              left: "96%",
              border: "4px solid black",
              borderRadius: "10px",
              cursor: "pointer",
            },
            text: {
              default: "6",
            },
            events: [
              {
                trigger: "click",
                type: "ACTION.GOTOPAGE",
                payload: {
                  pageNumber: 6,
                  functionBody: `
                  return function checkAnswers(data) {
                    return true;
                }                
                  `,
                },
              },
            ],
          },
          {
            id: "inc-button-01",
            styles: {
              backgroundColor: "#FBA834",
              color: "black",
              fontWeight: "bold",
              height: "8%",
              padding: "10px",
              position: "absolute",
              textAlign: "center",
              top: "30%",
              width: "20%",
              border: "4px solid black",
              borderRadius: "10px",
              cursor: "pointer",
              left: "80%",
              fontSize: "20px",
              transition: "backgroundColor 0.3s",
              hover: {
                backgroundColor: "green",
              },
            },
            text: {
              default: "INCREMENT",
            },
            events: [
              {
                payload: {
                  functionBody:
                    "return function getAnswer(data) { const count = data['answer']; console.log('hi',count); if(count && count > 700) return 1; return count+10 || 0; }",
                  key: "answer",
                },
                trigger: "click",
                type: "ACTION.UPDATESTATE",
              },
            ],
          },
          {
            id: "img-3",
            styles: {
              borderRadius: "10px",
              zIndex: "-1",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "60vw",
              height: "100vh",
              position: "absolute",
              top: "40%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            },
            imageUrl:
              "https://firebasestorage.googleapis.com/v0/b/thegoodgametheory-quiz.appspot.com/o/assets%2FBlue_and_Green_Modern_Gradient_Trivia_Night_Game_Presentation_3-removebg-preview.png?alt=media&token=f87176bf-7bf7-4ea7-9001-eb20ef51ef6e",
          },
          {
            id: "img-2",
            imageUrl:
              "https://firebasestorage.googleapis.com/v0/b/thegoodgametheory-quiz.appspot.com/o/assets%2Ftempimage.png?alt=media&token=99bc959d-44c5-49f4-b245-2933c99fc1d3",
            styles: {
              height: "30%",
              transform: "translate(-50%, -50%) scale(0.5)",
              width: "100%",
              padding: "10px",
              paddingLeft: "17px",
              position: "absolute",
              textAlign: "left",
              top: "90%",
            },
          },
          {
            id: "background",
            styles: {
              backgroundImage:
                "url('https://firebasestorage.googleapis.com/v0/b/thegoodgametheory-quiz.appspot.com/o/assets%2Fbackgroundimage.png?alt=media&token=1f432ba8-ddc0-4dda-910c-3f8861c57e4e')",
              borderRadius: "0px",
              height: "100vh",
              width: "100vw",
              zIndex: "-1",
              position: "absolute",
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
              left: "5%",
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
              left: "95%",
              position: "absolute",
              width: "5rem",
            },
          },
        ],
      },
      portrait: {
        divs: [
          {
            id: "category-display",
            styles: {
              height: "60vh",
              position: "absolute",
              width: "80%",
              fontFamily: "Monospace",
              fontSize: "30px",
              left: "15%",
              top: "18%",
              transform: "translateY(-50%)",
              textAlign: "center",
              fontWeight: "bold",
              color: "Black",
              animationName: "panX",
              animationDelay: "0.3s",
              animationDirection: "normal",
              animationDuration: "1.5s",
              animationIterationCount: "1",
              animationTimingFunction: "ease",
            },
            subscription: {
              renderFunctions: [
                {
                  functionBody:
                    "return function getAnswer(data) { const answer = data['ANSWER']; return answer + \" - Category\"; }",
                  id: "MEHAK",
                },
              ],
              sources: [
                {
                  id: "ANSWER",
                  subscribeTo: "answer",
                },
              ],
            },
            text: {
              default: "Score: 1",
              subscribeTo: "MEHAK",
            },
          },
          {
            id: "option-1",
            styles: {
              backgroundColor: "#FBA834",
              color: "black",
              fontWeight: "bold",
              height: "8%",
              padding: "10px",
              position: "absolute",
              textAlign: "center",
              top: "30%",
              width: "30%",
              border: "4px solid black",
              borderRadius: "10px",
              cursor: "pointer",
              left: "50%",
              fontSize: "20px",
              transition: "backgroundColor 0.3s",
              hover: {
                backgroundColor: "green",
              },
            },
            text: "MUSIC",
            events: [
              {
                payload: {
                  key: "answer",
                  value: "MUSIC",
                },
                trigger: "click",
                type: "ACTION.SETSTATE",
              },
            ],
          },
          {
            id: "option-2",
            styles: {
              backgroundColor: "#FBA834",
              color: "black",
              fontWeight: "bold",
              height: "8%",
              padding: "10px",
              position: "absolute",
              textAlign: "center",
              top: "40%",
              width: "30%",
              border: "4px solid black",
              borderRadius: "10px",
              cursor: "pointer",
              left: "50%",
              fontSize: "20px",
              transition: "backgroundColor 0.3s",
              hover: {
                backgroundColor: "green",
              },
            },
            text: "HISTORY",
            events: [
              {
                payload: {
                  key: "answer",
                  value: "HISTORY",
                },
                trigger: "click",
                type: "ACTION.SETSTATE",
              },
            ],
          },
          {
            id: "option-3",
            styles: {
              backgroundColor: "#FBA834",
              color: "black",
              fontWeight: "bold",
              height: "8%",
              padding: "10px",
              position: "absolute",
              textAlign: "center",
              top: "50%",
              width: "30%",
              border: "4px solid black",
              borderRadius: "10px",
              cursor: "pointer",
              left: "50%",
              fontSize: "20px",
              hover: {
                backgroundColor: "green",
              },
              transition: "backgroundColor 0.3s",
            },
            text: "MOVIES",
            events: [
              {
                payload: {
                  key: "answer",
                  value: "MOVIES",
                },
                trigger: "click",
                type: "ACTION.SETSTATE",
              },
            ],
          },
          {
            id: "option-4",
            styles: {
              backgroundColor: "#FBA834",
              color: "black",
              fontWeight: "bold",
              height: "8%",
              padding: "10px",
              position: "absolute",
              textAlign: "center",
              top: "60%",
              width: "30%",
              border: "4px solid black",
              borderRadius: "10px",
              cursor: "pointer",
              left: "50%",
              fontSize: "15px",
              hover: {
                backgroundColor: "green",
              },
              transition: "backgroundColor 0.3s",
            },
            text: "TECHNOLOGY",
            events: [
              {
                payload: {
                  key: "answer",
                  value: "TECHNOLOGY",
                },
                trigger: "click",
                type: "ACTION.SETSTATE",
              },
            ],
          },
          {
            id: "img-3",
            styles: {
              borderRadius: "10px",
              zIndex: "-1",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "60vw",
              height: "100vh",
              position: "absolute",
              top: "40%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            },
            imageUrl:
              "https://firebasestorage.googleapis.com/v0/b/thegoodgametheory-quiz.appspot.com/o/assets%2FBlue_and_Green_Modern_Gradient_Trivia_Night_Game_Presentation_3-removebg-preview.png?alt=media&token=f87176bf-7bf7-4ea7-9001-eb20ef51ef6e",
          },
          {
            id: "img-2",
            imageUrl:
              "https://firebasestorage.googleapis.com/v0/b/thegoodgametheory-quiz.appspot.com/o/assets%2Ftempimage.png?alt=media&token=99bc959d-44c5-49f4-b245-2933c99fc1d3",
            styles: {
              height: "30%",
              transform: "translate(-50%, -50%) scale(0.5)",
              width: "100%",
              padding: "10px",
              paddingLeft: "17px",
              position: "absolute",
              textAlign: "left",
              top: "90%",
            },
          },
          {
            id: "background",
            styles: {
              backgroundImage:
                "url('https://firebasestorage.googleapis.com/v0/b/thegoodgametheory-quiz.appspot.com/o/assets%2Fbackgroundimage.png?alt=media&token=1f432ba8-ddc0-4dda-910c-3f8861c57e4e')",
              borderRadius: "0px",
              height: "100vh",
              width: "100vw",
              zIndex: "-1",
              position: "absolute",
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
              left: "5%",
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
              left: "95%",
              position: "absolute",
              width: "5rem",
            },
          },
          {
            id: "img-16",
            styles: {
              borderRadius: "10px",
              zIndex: "-1",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "60vw",
              height: "80vh",
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            },
            imageUrl:
              "https://firebasestorage.googleapis.com/v0/b/thegoodgametheory-quiz.appspot.com/o/assets%2FBlue_and_Green_Modern_Gradient_Trivia_Night_Game_Presentation__9_-removebg-preview.png?alt=media&token=f7257399-b2c7-466f-a756-8fd81cd72c9d",
          },
        ],
      },
    },
    {
      category: "info",
      landscape: {
        divs: [
          {
            id: "category-display-0",
            styles: {
              height: "60vh",
              position: "absolute",
              width: "50%",
              fontFamily: "Monospace",
              fontSize: "30px",
              left: "25%",
              top: "10%",
              transform: "translateY(-50%)",
              textAlign: "center",
              fontWeight: "bold",
              color: "Black",
            },
            text: {
              default: "Score: 0",
              subscribeTo: "score",
            },
            subscription: {
              // renderFunctions: [
              //   {
              //     functionBody: `
              //       return function updateScore(data) {
              //         const result = data['result-page-2'];
              //         const currentScore = data['scoreVal'];
              //         return currentScore;
              //       }
              //     `,
              //     id: "score",
              //   },
              // ],
              sources: [
                {
                  id: "result-page-1",
                  subscribeTo: "result-page-1",
                },
              ],
            },
          },
          {
            id: "category-display-0002",
            styles: {
              height: "60vh",
              position: "absolute",
              width: "50%",
              fontFamily: "Monospace",
              fontSize: "30px",
              left: "0%",
              // top: "20%",
              top: {
                default: "20%",
                subscribeTo: "ANSWER",
              },
              transform: "translateY(-50%)",
              textAlign: "center",
              fontWeight: "bold",
              color: {
                default: "black",
                subscribeTo: "COLOR",
              },
            },
            subscription: {
              renderFunctions: [
                {
                  functionBody:
                    "return function getColor(data) { const answer = data['ANSWER']; if (answer === '20%') { return 'red'; } else { return 'green'; } }",
                  id: "COLOR",
                },
              ],
              sources: [
                {
                  id: "ANSWER",
                  subscribeTo: "answer",
                },
              ],
            },
            text: {
              default: "Score: 001kk",
              subscribeTo: "COLOR",
            },
          },
          {
            id: "category-display",
            styles: {
              height: "60vh",
              position: "absolute",
              width: "50%",
              fontFamily: "Monospace",
              left: "20%",
              top: "20%",
              transform: "translateY(-50%)",
              textAlign: "center",
              fontWeight: "bold",
              fontSize: "20px",
              color: "Black",
            },
            // subscribeTo: "MEHAK",
            subscription: {
              renderFunctions: [
                {
                  functionBody:
                    "return function getAnswer(data) { const answer = data['ANSWER']; return answer; }",
                  id: "MEHAK",
                },
                {
                  functionBody:
                    "return function getFontSize(data) { const fontSize = data['FONT_SIZE']; return fontSize + 1 || 0; }",
                  id: "FONT_SIZE",
                  // saveId: "fontSize",
                },
              ],
              sources: [
                {
                  id: "ANSWER",
                  subscribeTo: "answer",
                },
                {
                  id: "COUNT",
                  subscribeTo: "count",
                },
              ],
            },
            text: {
              default: "count",
              subscribeTo: "COUNT",
            },
          },
          {
            id: "inc-button-01",
            styles: {
              backgroundColor: "#FBA834",
              color: "black",
              fontWeight: "bold",
              height: "8%",
              padding: "10px",
              position: "absolute",
              textAlign: "center",
              top: "30%",
              width: "20%",
              border: "4px solid black",
              borderRadius: "10px",
              cursor: "pointer",
              left: "80%",
              fontSize: "20px",
              transition: "backgroundColor 0.3s",
              hover: {
                backgroundColor: "green",
              },
            },
            text: {
              default: "INCREMENT",
            },
            events: [
              {
                payload: {
                  functionBody:
                    "return function getAnswer(data) { const count = data['answer']; console.log('hi',count); if(count && count > 700) return 1; return count+10 || 0; }",
                  key: "answer",
                },
                trigger: "click",
                type: "ACTION.UPDATESTATE",
              },
            ],
          },
          {
            id: "rep-button-01",
            styles: {
              backgroundColor: "#FBA834",
              color: "black",
              fontWeight: "bold",
              height: "8%",
              padding: "10px",
              position: "absolute",
              textAlign: "center",
              top: "60%",
              width: "20%",
              border: "4px solid black",
              borderRadius: "10px",
              cursor: "pointer",
              left: "80%",
              fontSize: "20px",
              transition: "backgroundColor 0.3s",
              hover: {
                backgroundColor: "green",
              },
            },
            text: {
              default: "REPEAT",
            },
            events: [
              {
                payload: {
                  functionBody:
                    "return function getAnswer(data) { const count = data['answer']; console.log('hi',count); if(count && count > 700) return 1; return count+10 || 0; }",
                  key: "answer",
                },
                trigger: "click",
                type: "ACTION.REPEATSTATE",
              },
            ],
          },
          {
            id: "option-1",
            styles: {
              backgroundColor: "#FBA834",
              color: "black",
              fontWeight: "bold",
              height: "8%",
              padding: "10px",
              position: "absolute",
              textAlign: "center",
              top: "30%",
              width: "20%",
              border: "4px solid black",
              borderRadius: "10px",
              cursor: "pointer",
              left: "50%",
              fontSize: "20px",
              transition: "backgroundColor 0.3s",
              hover: {
                backgroundColor: "green",
              },
            },

            text: {
              default: "MUSIC",
            },
            events: [
              {
                trigger: "click",
                type: "ACTION.SETSTATE",
                payload: {
                  key: "answer1-page-1",
                  value: "MUSIC",
                },
              },
            ],
          },
          {
            id: "option-2",
            styles: {
              backgroundColor: "#FBA834",
              color: "black",
              fontWeight: "bold",
              height: "8%",
              padding: "10px",
              position: "absolute",
              textAlign: "center",
              top: "40%",
              width: "20%",
              border: "4px solid black",
              borderRadius: "10px",
              cursor: "pointer",
              left: "50%",
              fontSize: "20px",
              transition: "backgroundColor 0.3s",
              hover: {
                backgroundColor: "green",
              },
            },

            text: {
              default: "HISTORY",
            },
            events: [
              {
                trigger: "click",
                type: "ACTION.SETSTATE",
                payload: {
                  key: "answer2-page-1",
                  value: "HISTORY",
                },
              },
            ],
          },
          {
            id: "option-3",
            styles: {
              backgroundColor: "#FBA834",
              color: "black",
              fontWeight: "bold",
              height: "8%",
              padding: "10px",
              position: "absolute",
              textAlign: "center",
              top: "50%",
              width: "20%",
              border: "4px solid black",
              borderRadius: "10px",
              cursor: "pointer",
              left: "50%",
              fontSize: "20px",
              hover: {
                backgroundColor: "green",
              },
              transition: "backgroundColor 0.3s",
            },

            text: {
              default: "MOVIES",
            },
            events: [
              {
                trigger: "click",
                type: "ACTION.SETSTATE",
                payload: {
                  key: "answer3-page-1",
                  value: "MOVIES",
                },
              },
            ],
          },
          {
            id: "option-4",
            styles: {
              backgroundColor: "#FBA834",
              color: "black",
              fontWeight: "bold",
              height: "8%",
              padding: "10px",
              position: "absolute",
              textAlign: "center",
              top: "60%",
              width: "20%",
              border: "4px solid black",
              borderRadius: "10px",
              cursor: "pointer",
              left: "50%",
              fontSize: "20px",
              hover: {
                backgroundColor: "green",
              },
              transition: "backgroundColor 0.3s",
            },

            text: {
              default: "TECHNOLOGY",
            },
            events: [
              {
                trigger: "click",
                type: "ACTION.SETSTATE",
                payload: {
                  key: "answer4-page-1",
                  value: "TECHNOLOGY",
                },
              },
            ],
          },
          {
            id: "check-button-page-1",
            styles: {
              backgroundColor: "#FBA834",
              color: "black",
              fontWeight: "bold",
              height: "8%",
              padding: "10px",
              position: "absolute",
              textAlign: "center",
              top: "70%",
              width: "20%",
              border: "4px solid black",
              borderRadius: "10px",
              cursor: "pointer",
              left: "50%",
              fontSize: "20px",
              transition: "backgroundColor 0.3s",
              hover: {
                backgroundColor: "green",
              },
            },
            text: {
              default: "Check",
            },
            events: [
              {
                trigger: "click",
                type: "ACTION.UPDATESTATE",
                payload: {
                  key: "result-page-1",
                  functionBody: `
                      return function checkAnswers(data) {
                        const answer1 = data['answer1-page-1'];
                        const answer2 = data['answer2-page-1'];
                        const answer3 = data['answer3-page-1'];
                        const correctAnswers = ['MUSIC', 'HISTORY', 'MOVIES'];
                        const isCorrect = correctAnswers.includes(answer1) && correctAnswers.includes(answer2) && correctAnswers.includes(answer3);
                        return isCorrect ? 'Correct' : 'Incorrect';
                      }
                    `,
                },
                callback: "ACTION.UPDATESTATE",
                callbackPayload: {
                  key: "scoreVal",
                  functionBody: `
                    return function updateScore(data) {
                      const answer1 = data['answer1-page-1'];
                      const answer2 = data['answer2-page-1'];
                      const answer3 = data['answer3-page-1'];
                      const correctAnswers = ['MUSIC', 'HISTORY', 'MOVIES'];
                      const isCorrect = correctAnswers.includes(answer1) && correctAnswers.includes(answer2) && correctAnswers.includes(answer3);
                      const currentScore = data['scoreVal'] || 0;
                      if(isCorrect) {
                        return currentScore+10;
                      }
                      return currentScore;
                    }
                  `,
                },
                delay: 5,
              },
            ],
          },
          {
            id: "result-div-page-1",
            styles: {
              backgroundColor: "#FBA834",
              color: "black",
              fontWeight: "bold",
              padding: "20px",
              position: "absolute",
              textAlign: "center",
              top: "80%",
              width: "20%",
              border: "4px solid black",
              borderRadius: "10px",
              left: "50%",
              fontSize: "20px",
              visibility: {
                default: "hidden",
                subscribeTo: "visibilityState",
              },
            },
            subscription: {
              renderFunctions: [
                {
                  functionBody:
                    "return function getResult(data) { return data['result-page-1'] || ''; }",
                  id: "resultText",
                },
                {
                  functionBody:
                    "return function getVisibility(data) { return data['result-page-1'] ? 'visible' : 'hidden'; }",
                  id: "visibilityState",
                },
              ],
              sources: [
                {
                  id: "result-page-1",
                  subscribeTo: "result-page-1",
                },
              ],
            },
            text: {
              default: "",
              subscribeTo: "resultText",
            },
          },
          {
            id: "img-3",
            styles: {
              borderRadius: "10px",
              zIndex: "-1",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "60vw",
              height: "100vh",
              position: "absolute",
              top: "40%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            },
            imageUrl:
              "https://firebasestorage.googleapis.com/v0/b/thegoodgametheory-quiz.appspot.com/o/assets%2FBlue_and_Green_Modern_Gradient_Trivia_Night_Game_Presentation_3-removebg-preview.png?alt=media&token=f87176bf-7bf7-4ea7-9001-eb20ef51ef6e",
          },
          {
            id: "img-2",
            imageUrl:
              "https://firebasestorage.googleapis.com/v0/b/thegoodgametheory-quiz.appspot.com/o/assets%2Ftempimage.png?alt=media&token=99bc959d-44c5-49f4-b245-2933c99fc1d3",
            styles: {
              height: "30%",
              transform: "translate(-50%, -50%) scale(0.5)",
              width: "100%",
              padding: "10px",
              paddingLeft: "17px",
              position: "absolute",
              textAlign: "left",
              top: "90%",
            },
          },
          {
            id: "background",
            styles: {
              backgroundImage:
                "url('https://firebasestorage.googleapis.com/v0/b/thegoodgametheory-quiz.appspot.com/o/assets%2Fbackgroundimage.png?alt=media&token=1f432ba8-ddc0-4dda-910c-3f8861c57e4e')",
              borderRadius: "0px",
              height: "100vh",
              width: "100vw",
              zIndex: "-1",
              position: "absolute",
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
              left: "5%",
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
              left: "95%",
              position: "absolute",
              width: "5rem",
            },
          },
        ],
      },
      portrait: {
        divs: [
          {
            id: "category-display",
            styles: {
              height: "60vh",
              position: "absolute",
              width: "80%",
              fontFamily: "Monospace",
              fontSize: "30px",
              left: "15%",
              top: "18%",
              transform: "translateY(-50%)",
              textAlign: "center",
              fontWeight: "bold",
              color: "Black",
              animationName: "panX",
              animationDelay: "0.3s",
              animationDirection: "normal",
              animationDuration: "1.5s",
              animationIterationCount: "1",
              animationTimingFunction: "ease",
            },
            subscription: {
              renderFunctions: [
                {
                  functionBody:
                    "return function getAnswer(data) { const answer = data['ANSWER']; return answer + \" - Category\"; }",
                  id: "MEHAK",
                },
              ],
              sources: [
                {
                  id: "ANSWER",
                  subscribeTo: "answer",
                },
              ],
            },
            text: {
              default: "Score: 1",
              subscribeTo: "MEHAK",
            },
          },
          {
            id: "option-1",
            styles: {
              backgroundColor: "#FBA834",
              color: "black",
              fontWeight: "bold",
              height: "8%",
              padding: "10px",
              position: "absolute",
              textAlign: "center",
              top: "30%",
              width: "30%",
              border: "4px solid black",
              borderRadius: "10px",
              cursor: "pointer",
              left: "50%",
              fontSize: "20px",
              transition: "backgroundColor 0.3s",
              hover: {
                backgroundColor: "green",
              },
            },
            text: "MUSIC",
            events: [
              {
                payload: {
                  key: "answer",
                  value: "MUSIC",
                },
                trigger: "click",
                type: "ACTION.SETSTATE",
              },
            ],
          },
          {
            id: "option-2",
            styles: {
              backgroundColor: "#FBA834",
              color: "black",
              fontWeight: "bold",
              height: "8%",
              padding: "10px",
              position: "absolute",
              textAlign: "center",
              top: "40%",
              width: "30%",
              border: "4px solid black",
              borderRadius: "10px",
              cursor: "pointer",
              left: "50%",
              fontSize: "20px",
              transition: "backgroundColor 0.3s",
              hover: {
                backgroundColor: "green",
              },
            },
            text: "HISTORY",
            events: [
              {
                payload: {
                  key: "answer",
                  value: "HISTORY",
                },
                trigger: "click",
                type: "ACTION.SETSTATE",
              },
            ],
          },
          {
            id: "option-3",
            styles: {
              backgroundColor: "#FBA834",
              color: "black",
              fontWeight: "bold",
              height: "8%",
              padding: "10px",
              position: "absolute",
              textAlign: "center",
              top: "50%",
              width: "30%",
              border: "4px solid black",
              borderRadius: "10px",
              cursor: "pointer",
              left: "50%",
              fontSize: "20px",
              hover: {
                backgroundColor: "green",
              },
              transition: "backgroundColor 0.3s",
            },
            text: "MOVIES",
            events: [
              {
                payload: {
                  key: "answer",
                  value: "MOVIES",
                },
                trigger: "click",
                type: "ACTION.SETSTATE",
              },
            ],
          },
          {
            id: "option-4",
            styles: {
              backgroundColor: "#FBA834",
              color: "black",
              fontWeight: "bold",
              height: "8%",
              padding: "10px",
              position: "absolute",
              textAlign: "center",
              top: "60%",
              width: "30%",
              border: "4px solid black",
              borderRadius: "10px",
              cursor: "pointer",
              left: "50%",
              fontSize: "15px",
              hover: {
                backgroundColor: "green",
              },
              transition: "backgroundColor 0.3s",
            },
            text: "TECHNOLOGY",
            events: [
              {
                payload: {
                  key: "answer",
                  value: "TECHNOLOGY",
                },
                trigger: "click",
                type: "ACTION.SETSTATE",
              },
            ],
          },
          {
            id: "img-3",
            styles: {
              borderRadius: "10px",
              zIndex: "-1",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "60vw",
              height: "100vh",
              position: "absolute",
              top: "40%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            },
            imageUrl:
              "https://firebasestorage.googleapis.com/v0/b/thegoodgametheory-quiz.appspot.com/o/assets%2FBlue_and_Green_Modern_Gradient_Trivia_Night_Game_Presentation_3-removebg-preview.png?alt=media&token=f87176bf-7bf7-4ea7-9001-eb20ef51ef6e",
          },
          {
            id: "img-2",
            imageUrl:
              "https://firebasestorage.googleapis.com/v0/b/thegoodgametheory-quiz.appspot.com/o/assets%2Ftempimage.png?alt=media&token=99bc959d-44c5-49f4-b245-2933c99fc1d3",
            styles: {
              height: "30%",
              transform: "translate(-50%, -50%) scale(0.5)",
              width: "100%",
              padding: "10px",
              paddingLeft: "17px",
              position: "absolute",
              textAlign: "left",
              top: "90%",
            },
          },
          {
            id: "background",
            styles: {
              backgroundImage:
                "url('https://firebasestorage.googleapis.com/v0/b/thegoodgametheory-quiz.appspot.com/o/assets%2Fbackgroundimage.png?alt=media&token=1f432ba8-ddc0-4dda-910c-3f8861c57e4e')",
              borderRadius: "0px",
              height: "100vh",
              width: "100vw",
              zIndex: "-1",
              position: "absolute",
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
              left: "5%",
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
              left: "95%",
              position: "absolute",
              width: "5rem",
            },
          },
          {
            id: "img-16",
            styles: {
              borderRadius: "10px",
              zIndex: "-1",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "60vw",
              height: "80vh",
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            },
            imageUrl:
              "https://firebasestorage.googleapis.com/v0/b/thegoodgametheory-quiz.appspot.com/o/assets%2FBlue_and_Green_Modern_Gradient_Trivia_Night_Game_Presentation__9_-removebg-preview.png?alt=media&token=f7257399-b2c7-466f-a756-8fd81cd72c9d",
          },
        ],
      },
    },
    {
      category: "info",
      landscape: {
        divs: [
          {
            id: "category-display-0",
            styles: {
              height: "60vh",
              position: "absolute",
              width: "50%",
              fontFamily: "Monospace",
              fontSize: "30px",
              left: "25%",
              top: "10%",
              transform: "translateY(-50%)",
              textAlign: "center",
              fontWeight: "bold",
              color: "Black",
            },
            text: {
              default: "Score: 0",
              subscribeTo: "score",
            },
            subscription: {
              // renderFunctions: [
              //   {
              //     functionBody: `
              //       return function updateScore(data) {
              //         const result = data['result-page-2'];
              //         const currentScore = data['scoreVal'];
              //         return currentScore;
              //       }
              //     `,
              //     id: "score",
              //   },
              // ],
              sources: [
                {
                  id: "ANSWER",
                  subscribeTo: "answer",
                },
                {
                  id: "result-page-2",
                  subscribeTo: "result-page-2",
                },
              ],
            },
          },
          {
            id: "modal-overlay",
            styles: {
              position: "absolute",
              height: "100vh",
              width: "100vw",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              zIndex: 1000,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              visibility: {
                default: "hidden",
                subscribeTo: "visNonVis",
              },
            },
            subscription: {
              renderFunctions: [
                {
                  functionBody:
                    "return function getVisibility(data) { return data['buttonEnabled'] ? 'visible' : 'hidden'; }",
                  id: "visNonVis",
                },
              ],
              sources: [
                {
                  id: "buttonEnabled",
                  subscribeTo: "buttonEnabled",
                },
              ],
            },
          },
          {
            id: "popup-div",
            parent: "modal-overlay",
            variant: "iframe",
            // inputType: "checkbox",
            src: "https://fr.wikipedia.org/wiki/Main_Page",
            // value: "agree",
            // checked: false,
            styles: {
              width: "640",
              height: "480",
              position: "relative",
            },
          },
          {
            id: "close-button",
            parent: "modal-overlay",
            styles: {
              position: "absolute",
              top: "20px",
              right: "20px",
              fontSize: "24px",
              cursor: "pointer",
              zIndex: 1001,
              color: "#FBA834",
            },
            text: {
              default: "×",
            },
            events: [
              {
                trigger: "click",
                type: "ACTION.UPDATESTATE",
                payload: {
                  key: "confirmVisible",
                  functionBody:
                    "return function toggleConfirm(data) { return true; }",
                },
              },
            ],
          },
          {
            id: "confirm-overlay",
            styles: {
              position: "absolute",
              height: "100vh",
              width: "100vw",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              zIndex: 1001,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              visibility: {
                default: "hidden",
                subscribeTo: "visConfirm",
              },
            },
            subscription: {
              renderFunctions: [
                {
                  functionBody:
                    "return function getVisibility(data) { return data['confirmVisible'] ? 'visible' : 'hidden'; }",
                  id: "visConfirm",
                },
              ],
              sources: [
                {
                  id: "confirmVisible",
                  subscribeTo: "confirmVisible",
                },
              ],
            },
          },
          {
            id: "confirm-box",
            parent: "confirm-overlay",
            styles: {
              backgroundColor: "#FBA834",
              color: "black",
              fontWeight: "bold",
              padding: "40px",
              borderRadius: "10px",
              position: "relative",
              maxWidth: "80%",
              maxHeight: "80%",
              overflow: "auto",
              boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            },
          },
          {
            id: "confirm-div",
            parent: "confirm-box",
            type: "div",
            styles: {
              marginBottom: "20px",
            },
            text: {
              default: "Are you sure you want to close the modal?",
            },
          },
          {
            id: "confirm-buttons",
            parent: "confirm-box",
            type: "div",
            styles: {
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            },
          },
          {
            id: "confirm-yes",
            parent: "confirm-buttons",
            type: "button",
            styles: {
              backgroundColor: "#FBA834",
              color: "black",
              fontWeight: "bold",
              display: "inline",
              padding: "10px 20px",
              borderRadius: "5px",
              border: "none",
              cursor: "pointer",
              marginRight: "10px",
              visibility: {
                default: "hidden",
                subscribeTo: "visConfirm",
              },
            },
            text: {
              default: "Yes",
            },
            events: [
              {
                trigger: "click",
                type: "ACTION.UPDATESTATES",
                payload: [
                  {
                    key: "confirmVisible",
                    functionBody:
                      "return function confirmNo(data) { return false; }",
                  },
                  {
                    key: "buttonEnabled",
                    functionBody:
                      "return function toggleButtonState(data) { return false; }",
                  },
                ],
              },
            ],
          },
          {
            id: "confirm-no",
            parent: "confirm-buttons",
            type: "button",
            styles: {
              backgroundColor: "#FBA834",
              display: "inline",
              color: "black",
              fontWeight: "bold",
              padding: "10px 20px",
              borderRadius: "5px",
              border: "none",
              cursor: "pointer",
            },
            text: {
              default: "No",
            },
            events: [
              {
                trigger: "click",
                type: "ACTION.UPDATESTATE",
                payload: {
                  key: "confirmVisible",
                  functionBody:
                    "return function confirmNo(data) { return false; }",
                },
              },
            ],
          },
          {
            id: "modal-toggle-button",
            type: "button",
            styles: {
              backgroundColor: "#FBA834",
              color: "black",
              fontWeight: "bold",
              height: "8%",
              padding: "10px",
              position: "absolute",
              textAlign: "center",
              top: "40%",
              width: "20%",
              border: "4px solid black",
              borderRadius: "10px",
              cursor: "pointer",
              left: "80%",
              fontSize: "20px",
              transition: "backgroundColor 0.3s",
              hover: {
                backgroundColor: "green",
              },
            },
            text: {
              default: "Toggle Modal",
            },
            events: [
              {
                trigger: "click",
                type: "ACTION.UPDATESTATE",
                payload: {
                  key: "buttonEnabled",
                  functionBody:
                    "return function toggleButtonState(data) { return !data['buttonEnabled']; }",
                },
              },
            ],
          },
          {
            id: "category-display",
            styles: {
              height: "60vh",
              position: "absolute",
              width: "50%",
              fontFamily: "Monospace",
              left: "5%",
              top: {
                default: "20%",
                subscribeTo: "ANSWER",
              },
              transform: "translateY(-50%)",
              textAlign: "center",
              fontWeight: "bold",
              fontSize: "20px",
              color: "Black",
            },
            subscribeTo: "MEHAK",
            subscription: {
              renderFunctions: [
                {
                  functionBody:
                    "return function getAnswer(data) { const answer = data['ANSWER']; return answer; }",
                  id: "MEHAK",
                },
                {
                  functionBody:
                    "return function getFontSize(data) { const fontSize = data['FONT_SIZE']; return fontSize + 1 || 0; }",
                  id: "FONT_SIZE",
                  // saveId: "fontSize",
                },
              ],
              sources: [
                {
                  id: "ANSWER",
                  subscribeTo: "answer",
                },
              ],
            },
            text: {
              default: "",
              subscribeTo: "MEHAK",
            },
          },
          {
            id: "inc-button-01",
            styles: {
              backgroundColor: "#FBA834",
              color: "black",
              fontWeight: "bold",
              height: "8%",
              padding: "10px",
              position: "absolute",
              textAlign: "center",
              top: "30%",
              width: "20%",
              border: "4px solid black",
              borderRadius: "10px",
              cursor: "pointer",
              left: "80%",
              fontSize: "20px",
              transition: "backgroundColor 0.3s",
              hover: {
                backgroundColor: "green",
              },
            },

            text: {
              default: "INCREMENT",
            },
            events: [
              {
                payload: {
                  key: "answer",
                  value: "10%",
                },
                trigger: "click",
                type: "ACTION.SETSTATE",
              },
            ],
          },
          // {
          //   id: "radio-input",
          //   variant: "input",
          //   inputType: "radio",
          //   styles: {
          //     margin: "5px",
          //   },
          // },
          {
            id: "option-1-page-2",
            styles: {
              backgroundColor: "#FBA834",
              color: "black",
              fontWeight: "bold",
              height: "8%",
              padding: "10px",
              position: "absolute",
              textAlign: "center",
              top: "30%",
              width: "20%",
              border: "4px solid black",
              borderRadius: "10px",
              cursor: "pointer",
              left: "50%",
              fontSize: "20px",
              transition: "backgroundColor 0.3s",
              hover: {
                backgroundColor: "green",
              },
            },

            text: {
              default: "MUSIC",
            },
            events: [
              {
                trigger: "click",
                type: "ACTION.SETSTATE",
                payload: {
                  key: "answer1-page-2",
                  value: "MUSIC",
                },
              },
            ],
          },
          {
            id: "option-2-page-2",
            styles: {
              backgroundColor: "#FBA834",
              color: "black",
              fontWeight: "bold",
              height: "8%",
              padding: "10px",
              position: "absolute",
              textAlign: "center",
              top: "40%",
              width: "20%",
              border: "4px solid black",
              borderRadius: "10px",
              cursor: "pointer",
              left: "50%",
              fontSize: "20px",
              transition: "backgroundColor 0.3s",
              hover: {
                backgroundColor: "green",
              },
            },

            text: {
              default: "HISTORY",
            },
            events: [
              {
                trigger: "click",
                type: "ACTION.SETSTATE",
                payload: {
                  key: "answer2-page-2",
                  value: "HISTORY",
                },
              },
            ],
          },
          {
            id: "option-3-page-2",
            styles: {
              backgroundColor: "#FBA834",
              color: "black",
              fontWeight: "bold",
              height: "8%",
              padding: "10px",
              position: "absolute",
              textAlign: "center",
              top: "50%",
              width: "20%",
              border: "4px solid black",
              borderRadius: "10px",
              cursor: "pointer",
              left: "50%",
              fontSize: "20px",
              hover: {
                backgroundColor: "green",
              },
              transition: "backgroundColor 0.3s",
            },

            text: {
              default: "MOVIES",
            },
            events: [
              {
                trigger: "click",
                type: "ACTION.SETSTATE",
                payload: {
                  key: "answer3-page-2",
                  value: "MOVIES",
                },
              },
            ],
          },
          {
            id: "option-4-page-2",
            styles: {
              backgroundColor: "#FBA834",
              color: "black",
              fontWeight: "bold",
              height: "8%",
              padding: "10px",
              position: "absolute",
              textAlign: "center",
              top: "60%",
              width: "20%",
              border: "4px solid black",
              borderRadius: "10px",
              cursor: "pointer",
              left: "50%",
              fontSize: "20px",
              hover: {
                backgroundColor: "green",
              },
              transition: "backgroundColor 0.3s",
            },

            text: {
              default: "TECHNOLOGY",
            },
            events: [
              {
                trigger: "click",
                type: "ACTION.SETSTATE",
                payload: {
                  key: "answer4-page-2",
                  value: "TECHNOLOGY",
                },
              },
            ],
          },
          {
            id: "check-button-page-2",
            styles: {
              backgroundColor: "#FBA834",
              color: "black",
              fontWeight: "bold",
              height: "8%",
              padding: "10px",
              position: "absolute",
              textAlign: "center",
              top: "70%",
              width: "20%",
              border: "4px solid black",
              borderRadius: "10px",
              cursor: "pointer",
              left: "50%",
              fontSize: "20px",
              transition: "backgroundColor 0.3s",
              hover: {
                backgroundColor: "green",
              },
            },
            text: {
              default: "Check",
            },
            events: [
              {
                trigger: "click",
                type: "ACTION.UPDATESTATE",
                payload: {
                  key: "result-page-2",
                  functionBody: `
                    return function checkAnswers(data) {
                      const answer1 = data['answer1-page-2'];
                      const answer2 = data['answer2-page-2'];
                      const answer3 = data['answer3-page-2'];
                      const correctAnswers = ['MUSIC', 'HISTORY', 'MOVIES'];
                      const isCorrect = correctAnswers.includes(answer1) && correctAnswers.includes(answer2) && correctAnswers.includes(answer3);
                      return isCorrect ? 'Correct' : 'Incorrect';
                    }
                  `,
                },
              },
            ],
          },
          {
            id: "result-div-page-2",
            styles: {
              backgroundColor: "#FBA834",
              color: "black",
              fontWeight: "bold",
              padding: "20px",
              position: "absolute",
              textAlign: "center",
              top: "80%",
              width: "20%",
              border: "4px solid black",
              borderRadius: "10px",
              left: "50%",
              fontSize: "20px",
              visibility: {
                default: "hidden",
                subscribeTo: "visibilityState",
              },
            },
            subscription: {
              renderFunctions: [
                {
                  functionBody:
                    "return function getResult(data) { return data['result-page-2'] || ''; }",
                  id: "resultText",
                },
                {
                  functionBody:
                    "return function getVisibility(data) { return data['result-page-2'] ? 'visible' : 'hidden'; }",
                  id: "visibilityState",
                },
              ],
              sources: [
                {
                  id: "result-page-2",
                  subscribeTo: "result-page-2",
                },
              ],
            },
            text: {
              default: "",
              subscribeTo: "resultText",
            },
          },
          {
            id: "img-3",
            styles: {
              borderRadius: "10px",
              zIndex: "-1",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "60vw",
              height: "100vh",
              position: "absolute",
              top: "40%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            },
            imageUrl:
              "https://firebasestorage.googleapis.com/v0/b/thegoodgametheory-quiz.appspot.com/o/assets%2FBlue_and_Green_Modern_Gradient_Trivia_Night_Game_Presentation_3-removebg-preview.png?alt=media&token=f87176bf-7bf7-4ea7-9001-eb20ef51ef6e",
          },
          {
            id: "img-2",
            imageUrl:
              "https://firebasestorage.googleapis.com/v0/b/thegoodgametheory-quiz.appspot.com/o/assets%2Ftempimage.png?alt=media&token=99bc959d-44c5-49f4-b245-2933c99fc1d3",
            styles: {
              height: "30%",
              transform: "translate(-50%, -50%) scale(0.5)",
              width: "100%",
              padding: "10px",
              paddingLeft: "17px",
              position: "absolute",
              textAlign: "left",
              top: "90%",
            },
          },
          {
            id: "background",
            styles: {
              backgroundImage:
                "url('https://firebasestorage.googleapis.com/v0/b/thegoodgametheory-quiz.appspot.com/o/assets%2Fbackgroundimage.png?alt=media&token=1f432ba8-ddc0-4dda-910c-3f8861c57e4e')",
              borderRadius: "0px",
              height: "100vh",
              width: "100vw",
              zIndex: "-1",
              position: "absolute",
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
              left: "5%",
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
              left: "95%",
              position: "absolute",
              width: "5rem",
            },
          },
        ],
      },
      portrait: {
        divs: [
          {
            id: "category-display",
            styles: {
              height: "60vh",
              position: "absolute",
              width: "80%",
              fontFamily: "Monospace",
              fontSize: "30px",
              left: "15%",
              top: "18%",
              transform: "translateY(-50%)",
              textAlign: "center",
              fontWeight: "bold",
              color: "Black",
              animationName: "panX",
              animationDelay: "0.3s",
              animationDirection: "normal",
              animationDuration: "1.5s",
              animationIterationCount: "1",
              animationTimingFunction: "ease",
            },
            subscription: {
              renderFunctions: [
                {
                  functionBody:
                    "return function getAnswer(data) { const answer = data['ANSWER']; return answer + \" - Category\"; }",
                  id: "MEHAK",
                },
              ],
              sources: [
                {
                  id: "ANSWER",
                  subscribeTo: "answer",
                },
              ],
            },
            text: {
              default: "Score: 1",
              subscribeTo: "MEHAK",
            },
          },
          {
            id: "option-1",
            styles: {
              backgroundColor: "#FBA834",
              color: "black",
              fontWeight: "bold",
              height: "8%",
              padding: "10px",
              position: "absolute",
              textAlign: "center",
              top: "30%",
              width: "30%",
              border: "4px solid black",
              borderRadius: "10px",
              cursor: "pointer",
              left: "50%",
              fontSize: "20px",
              transition: "backgroundColor 0.3s",
              hover: {
                backgroundColor: "green",
              },
            },
            text: "MUSIC",
            events: [
              {
                payload: {
                  key: "answer",
                  value: "MUSIC",
                },
                trigger: "click",
                type: "ACTION.SETSTATE",
              },
            ],
          },
          {
            id: "option-2",
            styles: {
              backgroundColor: "#FBA834",
              color: "black",
              fontWeight: "bold",
              height: "8%",
              padding: "10px",
              position: "absolute",
              textAlign: "center",
              top: "40%",
              width: "30%",
              border: "4px solid black",
              borderRadius: "10px",
              cursor: "pointer",
              left: "50%",
              fontSize: "20px",
              transition: "backgroundColor 0.3s",
              hover: {
                backgroundColor: "green",
              },
            },
            text: "HISTORY",
            events: [
              {
                payload: {
                  key: "answer",
                  value: "HISTORY",
                },
                trigger: "click",
                type: "ACTION.SETSTATE",
              },
            ],
          },
          {
            id: "option-3",
            styles: {
              backgroundColor: "#FBA834",
              color: "black",
              fontWeight: "bold",
              height: "8%",
              padding: "10px",
              position: "absolute",
              textAlign: "center",
              top: "50%",
              width: "30%",
              border: "4px solid black",
              borderRadius: "10px",
              cursor: "pointer",
              left: "50%",
              fontSize: "20px",
              hover: {
                backgroundColor: "green",
              },
              transition: "backgroundColor 0.3s",
            },
            text: "MOVIES",
            events: [
              {
                payload: {
                  key: "answer",
                  value: "MOVIES",
                },
                trigger: "click",
                type: "ACTION.SETSTATE",
              },
            ],
          },
          {
            id: "option-4",
            styles: {
              backgroundColor: "#FBA834",
              color: "black",
              fontWeight: "bold",
              height: "8%",
              padding: "10px",
              position: "absolute",
              textAlign: "center",
              top: "60%",
              width: "30%",
              border: "4px solid black",
              borderRadius: "10px",
              cursor: "pointer",
              left: "50%",
              fontSize: "15px",
              hover: {
                backgroundColor: "green",
              },
              transition: "backgroundColor 0.3s",
            },
            text: "TECHNOLOGY",
            events: [
              {
                payload: {
                  key: "answer",
                  value: "TECHNOLOGY",
                },
                trigger: "click",
                type: "ACTION.SETSTATE",
              },
            ],
          },
          {
            id: "img-3",
            styles: {
              borderRadius: "10px",
              zIndex: "-1",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "60vw",
              height: "100vh",
              position: "absolute",
              top: "40%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            },
            imageUrl:
              "https://firebasestorage.googleapis.com/v0/b/thegoodgametheory-quiz.appspot.com/o/assets%2FBlue_and_Green_Modern_Gradient_Trivia_Night_Game_Presentation_3-removebg-preview.png?alt=media&token=f87176bf-7bf7-4ea7-9001-eb20ef51ef6e",
          },
          {
            id: "img-2",
            imageUrl:
              "https://firebasestorage.googleapis.com/v0/b/thegoodgametheory-quiz.appspot.com/o/assets%2Ftempimage.png?alt=media&token=99bc959d-44c5-49f4-b245-2933c99fc1d3",
            styles: {
              height: "30%",
              transform: "translate(-50%, -50%) scale(0.5)",
              width: "100%",
              padding: "10px",
              paddingLeft: "17px",
              position: "absolute",
              textAlign: "left",
              top: "90%",
            },
          },
          {
            id: "background",
            styles: {
              backgroundImage:
                "url('https://firebasestorage.googleapis.com/v0/b/thegoodgametheory-quiz.appspot.com/o/assets%2Fbackgroundimage.png?alt=media&token=1f432ba8-ddc0-4dda-910c-3f8861c57e4e')",
              borderRadius: "0px",
              height: "100vh",
              width: "100vw",
              zIndex: "-1",
              position: "absolute",
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
              left: "5%",
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
              left: "95%",
              position: "absolute",
              width: "5rem",
            },
          },
          {
            id: "img-16",
            styles: {
              borderRadius: "10px",
              zIndex: "-1",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "60vw",
              height: "80vh",
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            },
            imageUrl:
              "https://firebasestorage.googleapis.com/v0/b/thegoodgametheory-quiz.appspot.com/o/assets%2FBlue_and_Green_Modern_Gradient_Trivia_Night_Game_Presentation__9_-removebg-preview.png?alt=media&token=f7257399-b2c7-466f-a756-8fd81cd72c9d",
          },
        ],
      },
    },
    {
      category: "info",
      landscape: {
        divs: [
          {
            id: "category-display-0",
            styles: {
              height: "60vh",
              position: "absolute",
              width: "50%",
              fontFamily: "Monospace",
              fontSize: "30px",
              left: "25%",
              top: "10%",
              transform: "translateY(-50%)",
              textAlign: "center",
              fontWeight: "bold",
              color: "Black",
            },
            // subscribeTo: "MEHAK",
            subscription: {
              renderFunctions: [
                // {
                //   functionBody:
                //     "return function getAnswer(data) { const answer = data['ANSWER']; return answer + \" - Selected Category\"; }",
                //   id: "MEHAK",
                // },
              ],
              sources: [
                {
                  id: "ANSWER",
                  subscribeTo: "answer",
                },
              ],
            },
            text: {
              default: "Score: 12",
            },
          },
          {
            id: "category-display",
            styles: {
              height: "60vh",
              position: "absolute",
              width: "50%",
              fontFamily: "Monospace",
              left: "5%",
              top: {
                default: "20%",
                subscribeTo: "ANSWER",
              },
              transform: "translateY(-50%)",
              textAlign: "center",
              fontWeight: "bold",
              fontSize: "20px",
              color: "Black",
            },
            subscribeTo: "MEHAK",
            subscription: {
              renderFunctions: [
                {
                  functionBody:
                    "return function getAnswer(data) { const answer = data['ANSWER']; return answer; }",
                  id: "MEHAK",
                },
                {
                  functionBody:
                    "return function getFontSize(data) { const fontSize = data['FONT_SIZE']; return fontSize + 1 || 0; }",
                  id: "FONT_SIZE",
                  // saveId: "fontSize",
                },
              ],
              sources: [
                {
                  id: "ANSWER",
                  subscribeTo: "answer",
                },
              ],
            },
            text: {
              default: "",
              subscribeTo: "MEHAK",
            },
          },
          {
            id: "inc-button-01",
            styles: {
              backgroundColor: "#FBA834",
              color: "black",
              fontWeight: "bold",
              height: "8%",
              padding: "10px",
              position: "absolute",
              textAlign: "center",
              top: "30%",
              width: "20%",
              border: "4px solid black",
              borderRadius: "10px",
              cursor: "pointer",
              left: "80%",
              fontSize: "20px",
              transition: "backgroundColor 0.3s",
              hover: {
                backgroundColor: "green",
              },
            },

            text: {
              default: "INCREMENT",
            },
            events: [
              {
                payload: {
                  key: "answer",
                  value: "10%",
                },
                trigger: "click",
                type: "ACTION.SETSTATE",
              },
            ],
          },
          {
            id: "page-1",
            styles: {
              backgroundColor: "#FBA834",
              color: "black",
              fontWeight: "bold",
              padding: "8px 16px",
              top: "70%",
              width: "10%",
              left: "55%",
              border: "4px solid black",
              borderRadius: "10px",
              cursor: "pointer",
            },
            text: {
              default: "1",
            },
            events: [
              {
                trigger: "click",
                type: "ACTION.GOTOPAGE",
                payload: {
                  pageNumber: 0,
                },
              },
            ],
          },
          {
            id: "page-2",
            styles: {
              backgroundColor: "#FBA834",
              color: "black",
              fontWeight: "bold",
              padding: "8px 16px",
              top: "70%",
              width: "10%",
              left: "80%",
              border: "4px solid black",
              borderRadius: "10px",
              cursor: "pointer",
            },
            text: {
              default: "2",
            },
            events: [
              {
                trigger: "click",
                type: "ACTION.GOTOPAGE",
                payload: {
                  pageNumber: 1,
                },
              },
            ],
          },
          {
            id: "option-1",
            styles: {
              backgroundColor: "#FBA834",
              color: "black",
              fontWeight: "bold",
              height: "8%",
              padding: "10px",
              position: "absolute",
              textAlign: "center",
              top: "30%",
              width: "20%",
              border: "4px solid black",
              borderRadius: "10px",
              cursor: "pointer",
              left: "50%",
              fontSize: "20px",
              transition: "backgroundColor 0.3s",
              hover: {
                backgroundColor: "green",
              },
            },

            text: {
              default: "MUSIC",
            },
            events: [
              {
                payload: {
                  key: "answer",
                  value: "10%",
                },
                trigger: "click",
                type: "ACTION.SETSTATE",
              },
            ],
          },
          {
            id: "option-2",
            styles: {
              backgroundColor: "#FBA834",
              color: "black",
              fontWeight: "bold",
              height: "8%",
              padding: "10px",
              position: "absolute",
              textAlign: "center",
              top: "40%",
              width: "20%",
              border: "4px solid black",
              borderRadius: "10px",
              cursor: "pointer",
              left: "50%",
              fontSize: "20px",
              transition: "backgroundColor 0.3s",
              hover: {
                backgroundColor: "green",
              },
            },

            text: {
              default: "HISTORY",
            },
            events: [
              {
                payload: {
                  key: "answer",
                  value: "20%",
                },
                trigger: "click",
                type: "ACTION.SETSTATE",
              },
            ],
          },
          {
            id: "option-3",
            styles: {
              backgroundColor: "#FBA834",
              color: "black",
              fontWeight: "bold",
              height: "8%",
              padding: "10px",
              position: "absolute",
              textAlign: "center",
              top: "50%",
              width: "20%",
              border: "4px solid black",
              borderRadius: "10px",
              cursor: "pointer",
              left: "50%",
              fontSize: "20px",
              hover: {
                backgroundColor: "green",
              },
              transition: "backgroundColor 0.3s",
            },

            text: {
              default: "MOVIES",
            },
            events: [
              {
                payload: {
                  key: "answer",
                  value: "30%",
                },
                trigger: "click",
                type: "ACTION.SETSTATE",
              },
            ],
          },
          {
            id: "option-4",
            styles: {
              backgroundColor: "#FBA834",
              color: "black",
              fontWeight: "bold",
              height: "8%",
              padding: "10px",
              position: "absolute",
              textAlign: "center",
              top: "60%",
              width: "20%",
              border: "4px solid black",
              borderRadius: "10px",
              cursor: "pointer",
              left: "50%",
              fontSize: "20px",
              hover: {
                backgroundColor: "green",
              },
              transition: "backgroundColor 0.3s",
            },

            text: {
              default: "TECHNOLOGY",
            },
            events: [
              {
                payload: {
                  key: "answer",
                  value: "40%",
                },
                trigger: "click",
                type: "ACTION.SETSTATE",
              },
            ],
          },
          {
            id: "img-3",
            styles: {
              borderRadius: "10px",
              zIndex: "-1",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "60vw",
              height: "100vh",
              position: "absolute",
              top: "40%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            },
            imageUrl:
              "https://firebasestorage.googleapis.com/v0/b/thegoodgametheory-quiz.appspot.com/o/assets%2FBlue_and_Green_Modern_Gradient_Trivia_Night_Game_Presentation_3-removebg-preview.png?alt=media&token=f87176bf-7bf7-4ea7-9001-eb20ef51ef6e",
          },
          {
            id: "img-2",
            imageUrl:
              "https://firebasestorage.googleapis.com/v0/b/thegoodgametheory-quiz.appspot.com/o/assets%2Ftempimage.png?alt=media&token=99bc959d-44c5-49f4-b245-2933c99fc1d3",
            styles: {
              height: "30%",
              transform: "translate(-50%, -50%) scale(0.5)",
              width: "100%",
              padding: "10px",
              paddingLeft: "17px",
              position: "absolute",
              textAlign: "left",
              top: "90%",
            },
          },
          {
            id: "background",
            styles: {
              backgroundImage:
                "url('https://firebasestorage.googleapis.com/v0/b/thegoodgametheory-quiz.appspot.com/o/assets%2Fbackgroundimage.png?alt=media&token=1f432ba8-ddc0-4dda-910c-3f8861c57e4e')",
              borderRadius: "0px",
              height: "100vh",
              width: "100vw",
              zIndex: "-1",
              position: "absolute",
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
              left: "5%",
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
              left: "95%",
              position: "absolute",
              width: "5rem",
            },
          },
        ],
      },
      portrait: {
        divs: [
          {
            id: "category-display",
            styles: {
              height: "60vh",
              position: "absolute",
              width: "80%",
              fontFamily: "Monospace",
              fontSize: "30px",
              left: "15%",
              top: "18%",
              transform: "translateY(-50%)",
              textAlign: "center",
              fontWeight: "bold",
              color: "Black",
              animationName: "panX",
              animationDelay: "0.3s",
              animationDirection: "normal",
              animationDuration: "1.5s",
              animationIterationCount: "1",
              animationTimingFunction: "ease",
            },
            subscription: {
              renderFunctions: [
                {
                  functionBody:
                    "return function getAnswer(data) { const answer = data['ANSWER']; return answer + \" - Category\"; }",
                  id: "MEHAK",
                },
              ],
              sources: [
                {
                  id: "ANSWER",
                  subscribeTo: "answer",
                },
              ],
            },
            text: {
              default: "Score: 1",
              subscribeTo: "MEHAK",
            },
          },
          {
            id: "option-1",
            styles: {
              backgroundColor: "#FBA834",
              color: "black",
              fontWeight: "bold",
              height: "8%",
              padding: "10px",
              position: "absolute",
              textAlign: "center",
              top: "30%",
              width: "30%",
              border: "4px solid black",
              borderRadius: "10px",
              cursor: "pointer",
              left: "50%",
              fontSize: "20px",
              transition: "backgroundColor 0.3s",
              hover: {
                backgroundColor: "green",
              },
            },
            text: "MUSIC",
            events: [
              {
                payload: {
                  key: "answer",
                  value: "MUSIC",
                },
                trigger: "click",
                type: "ACTION.SETSTATE",
              },
            ],
          },
          {
            id: "option-2",
            styles: {
              backgroundColor: "#FBA834",
              color: "black",
              fontWeight: "bold",
              height: "8%",
              padding: "10px",
              position: "absolute",
              textAlign: "center",
              top: "40%",
              width: "30%",
              border: "4px solid black",
              borderRadius: "10px",
              cursor: "pointer",
              left: "50%",
              fontSize: "20px",
              transition: "backgroundColor 0.3s",
              hover: {
                backgroundColor: "green",
              },
            },
            text: "HISTORY",
            events: [
              {
                payload: {
                  key: "answer",
                  value: "HISTORY",
                },
                trigger: "click",
                type: "ACTION.SETSTATE",
              },
            ],
          },
          {
            id: "option-3",
            styles: {
              backgroundColor: "#FBA834",
              color: "black",
              fontWeight: "bold",
              height: "8%",
              padding: "10px",
              position: "absolute",
              textAlign: "center",
              top: "50%",
              width: "30%",
              border: "4px solid black",
              borderRadius: "10px",
              cursor: "pointer",
              left: "50%",
              fontSize: "20px",
              hover: {
                backgroundColor: "green",
              },
              transition: "backgroundColor 0.3s",
            },
            text: "MOVIES",
            events: [
              {
                payload: {
                  key: "answer",
                  value: "MOVIES",
                },
                trigger: "click",
                type: "ACTION.SETSTATE",
              },
            ],
          },
          {
            id: "option-4",
            styles: {
              backgroundColor: "#FBA834",
              color: "black",
              fontWeight: "bold",
              height: "8%",
              padding: "10px",
              position: "absolute",
              textAlign: "center",
              top: "60%",
              width: "30%",
              border: "4px solid black",
              borderRadius: "10px",
              cursor: "pointer",
              left: "50%",
              fontSize: "15px",
              hover: {
                backgroundColor: "green",
              },
              transition: "backgroundColor 0.3s",
            },
            text: "TECHNOLOGY",
            events: [
              {
                payload: {
                  key: "answer",
                  value: "TECHNOLOGY",
                },
                trigger: "click",
                type: "ACTION.SETSTATE",
              },
            ],
          },
          {
            id: "img-3",
            styles: {
              borderRadius: "10px",
              zIndex: "-1",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "60vw",
              height: "100vh",
              position: "absolute",
              top: "40%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            },
            imageUrl:
              "https://firebasestorage.googleapis.com/v0/b/thegoodgametheory-quiz.appspot.com/o/assets%2FBlue_and_Green_Modern_Gradient_Trivia_Night_Game_Presentation_3-removebg-preview.png?alt=media&token=f87176bf-7bf7-4ea7-9001-eb20ef51ef6e",
          },
          {
            id: "img-2",
            imageUrl:
              "https://firebasestorage.googleapis.com/v0/b/thegoodgametheory-quiz.appspot.com/o/assets%2Ftempimage.png?alt=media&token=99bc959d-44c5-49f4-b245-2933c99fc1d3",
            styles: {
              height: "30%",
              transform: "translate(-50%, -50%) scale(0.5)",
              width: "100%",
              padding: "10px",
              paddingLeft: "17px",
              position: "absolute",
              textAlign: "left",
              top: "90%",
            },
          },
          {
            id: "background",
            styles: {
              backgroundImage:
                "url('https://firebasestorage.googleapis.com/v0/b/thegoodgametheory-quiz.appspot.com/o/assets%2Fbackgroundimage.png?alt=media&token=1f432ba8-ddc0-4dda-910c-3f8861c57e4e')",
              borderRadius: "0px",
              height: "100vh",
              width: "100vw",
              zIndex: "-1",
              position: "absolute",
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
              left: "5%",
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
              left: "95%",
              position: "absolute",
              width: "5rem",
            },
          },
          {
            id: "img-16",
            styles: {
              borderRadius: "10px",
              zIndex: "-1",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "60vw",
              height: "80vh",
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            },
            imageUrl:
              "https://firebasestorage.googleapis.com/v0/b/thegoodgametheory-quiz.appspot.com/o/assets%2FBlue_and_Green_Modern_Gradient_Trivia_Night_Game_Presentation__9_-removebg-preview.png?alt=media&token=f7257399-b2c7-466f-a756-8fd81cd72c9d",
          },
        ],
      },
    },
    {
      category: "info",
      landscape: {
        divs: [
          {
            id: "category-display-0",
            styles: {
              height: "60vh",
              position: "absolute",
              width: "50%",
              fontFamily: "Monospace",
              fontSize: "30px",
              left: "25%",
              top: "10%",
              transform: "translateY(-50%)",
              textAlign: "center",
              fontWeight: "bold",
              color: "Black",
            },
            // subscribeTo: "MEHAK",
            subscription: {
              renderFunctions: [
                // {
                //   functionBody:
                //     "return function getAnswer(data) { const answer = data['ANSWER']; return answer + \" - Selected Category\"; }",
                //   id: "MEHAK",
                // },
              ],
              sources: [
                {
                  id: "ANSWER",
                  subscribeTo: "answer",
                },
              ],
            },
            text: {
              default: "Score: 12",
            },
          },
          {
            id: "category-display",
            styles: {
              height: "60vh",
              position: "absolute",
              width: "50%",
              fontFamily: "Monospace",
              left: "5%",
              top: {
                default: "20%",
                subscribeTo: "ANSWER",
              },
              transform: "translateY(-50%)",
              textAlign: "center",
              fontWeight: "bold",
              fontSize: "20px",
              color: "Black",
            },
            subscribeTo: "MEHAK",
            subscription: {
              renderFunctions: [
                {
                  functionBody:
                    "return function getAnswer(data) { const answer = data['ANSWER']; return answer; }",
                  id: "MEHAK",
                },
                {
                  functionBody:
                    "return function getFontSize(data) { const fontSize = data['FONT_SIZE']; return fontSize + 1 || 0; }",
                  id: "FONT_SIZE",
                  // saveId: "fontSize",
                },
              ],
              sources: [
                {
                  id: "ANSWER",
                  subscribeTo: "answer",
                },
              ],
            },
            text: {
              default: "",
              subscribeTo: "MEHAK",
            },
          },
          {
            id: "inc-button-01",
            styles: {
              backgroundColor: "#FBA834",
              color: "black",
              fontWeight: "bold",
              height: "8%",
              padding: "10px",
              position: "absolute",
              textAlign: "center",
              top: "30%",
              width: "20%",
              border: "4px solid black",
              borderRadius: "10px",
              cursor: "pointer",
              left: "80%",
              fontSize: "20px",
              transition: "backgroundColor 0.3s",
              hover: {
                backgroundColor: "green",
              },
            },

            text: {
              default: "INCREMENT",
            },
            events: [
              {
                payload: {
                  key: "answer",
                  value: "10%",
                },
                trigger: "click",
                type: "ACTION.SETSTATE",
              },
            ],
          },
          {
            id: "option-1",
            styles: {
              backgroundColor: "#FBA834",
              color: "black",
              fontWeight: "bold",
              height: "8%",
              padding: "10px",
              position: "absolute",
              textAlign: "center",
              top: "30%",
              width: "20%",
              border: "4px solid black",
              borderRadius: "10px",
              cursor: "pointer",
              left: "50%",
              fontSize: "20px",
              transition: "backgroundColor 0.3s",
              hover: {
                backgroundColor: "green",
              },
            },

            text: {
              default: "MUSIC",
            },
            events: [
              {
                payload: {
                  key: "answer",
                  value: "10%",
                },
                trigger: "click",
                type: "ACTION.SETSTATE",
              },
            ],
          },
          {
            id: "option-2",
            styles: {
              backgroundColor: "#FBA834",
              color: "black",
              fontWeight: "bold",
              height: "8%",
              padding: "10px",
              position: "absolute",
              textAlign: "center",
              top: "40%",
              width: "20%",
              border: "4px solid black",
              borderRadius: "10px",
              cursor: "pointer",
              left: "50%",
              fontSize: "20px",
              transition: "backgroundColor 0.3s",
              hover: {
                backgroundColor: "green",
              },
            },

            text: {
              default: "HISTORY",
            },
            events: [
              {
                payload: {
                  key: "answer",
                  value: "20%",
                },
                trigger: "click",
                type: "ACTION.SETSTATE",
              },
            ],
          },
          {
            id: "option-3",
            styles: {
              backgroundColor: "#FBA834",
              color: "black",
              fontWeight: "bold",
              height: "8%",
              padding: "10px",
              position: "absolute",
              textAlign: "center",
              top: "50%",
              width: "20%",
              border: "4px solid black",
              borderRadius: "10px",
              cursor: "pointer",
              left: "50%",
              fontSize: "20px",
              hover: {
                backgroundColor: "green",
              },
              transition: "backgroundColor 0.3s",
            },

            text: {
              default: "MOVIES",
            },
            events: [
              {
                payload: {
                  key: "answer",
                  value: "30%",
                },
                trigger: "click",
                type: "ACTION.SETSTATE",
              },
            ],
          },
          {
            id: "option-4",
            styles: {
              backgroundColor: "#FBA834",
              color: "black",
              fontWeight: "bold",
              height: "8%",
              padding: "10px",
              position: "absolute",
              textAlign: "center",
              top: "60%",
              width: "20%",
              border: "4px solid black",
              borderRadius: "10px",
              cursor: "pointer",
              left: "50%",
              fontSize: "20px",
              hover: {
                backgroundColor: "green",
              },
              transition: "backgroundColor 0.3s",
            },

            text: {
              default: "TECHNOLOGY",
            },
            events: [
              {
                payload: {
                  key: "answer",
                  value: "40%",
                },
                trigger: "click",
                type: "ACTION.SETSTATE",
              },
            ],
          },
          {
            id: "img-3",
            styles: {
              borderRadius: "10px",
              zIndex: "-1",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "60vw",
              height: "100vh",
              position: "absolute",
              top: "40%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            },
            imageUrl:
              "https://firebasestorage.googleapis.com/v0/b/thegoodgametheory-quiz.appspot.com/o/assets%2FBlue_and_Green_Modern_Gradient_Trivia_Night_Game_Presentation_3-removebg-preview.png?alt=media&token=f87176bf-7bf7-4ea7-9001-eb20ef51ef6e",
          },
          {
            id: "img-2",
            imageUrl:
              "https://firebasestorage.googleapis.com/v0/b/thegoodgametheory-quiz.appspot.com/o/assets%2Ftempimage.png?alt=media&token=99bc959d-44c5-49f4-b245-2933c99fc1d3",
            styles: {
              height: "30%",
              transform: "translate(-50%, -50%) scale(0.5)",
              width: "100%",
              padding: "10px",
              paddingLeft: "17px",
              position: "absolute",
              textAlign: "left",
              top: "90%",
            },
          },
          {
            id: "background",
            styles: {
              backgroundImage:
                "url('https://firebasestorage.googleapis.com/v0/b/thegoodgametheory-quiz.appspot.com/o/assets%2Fbackgroundimage.png?alt=media&token=1f432ba8-ddc0-4dda-910c-3f8861c57e4e')",
              borderRadius: "0px",
              height: "100vh",
              width: "100vw",
              zIndex: "-1",
              position: "absolute",
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
              left: "5%",
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
              left: "95%",
              position: "absolute",
              width: "5rem",
            },
          },
        ],
      },
      portrait: {
        divs: [
          {
            id: "category-display",
            styles: {
              height: "60vh",
              position: "absolute",
              width: "80%",
              fontFamily: "Monospace",
              fontSize: "30px",
              left: "15%",
              top: "18%",
              transform: "translateY(-50%)",
              textAlign: "center",
              fontWeight: "bold",
              color: "Black",
              animationName: "panX",
              animationDelay: "0.3s",
              animationDirection: "normal",
              animationDuration: "1.5s",
              animationIterationCount: "1",
              animationTimingFunction: "ease",
            },
            subscription: {
              renderFunctions: [
                {
                  functionBody:
                    "return function getAnswer(data) { const answer = data['ANSWER']; return answer + \" - Category\"; }",
                  id: "MEHAK",
                },
              ],
              sources: [
                {
                  id: "ANSWER",
                  subscribeTo: "answer",
                },
              ],
            },
            text: {
              default: "Score: 1",
              subscribeTo: "MEHAK",
            },
          },
          {
            id: "option-1",
            styles: {
              backgroundColor: "#FBA834",
              color: "black",
              fontWeight: "bold",
              height: "8%",
              padding: "10px",
              position: "absolute",
              textAlign: "center",
              top: "30%",
              width: "30%",
              border: "4px solid black",
              borderRadius: "10px",
              cursor: "pointer",
              left: "50%",
              fontSize: "20px",
              transition: "backgroundColor 0.3s",
              hover: {
                backgroundColor: "green",
              },
            },
            text: "MUSIC",
            events: [
              {
                payload: {
                  key: "answer",
                  value: "MUSIC",
                },
                trigger: "click",
                type: "ACTION.SETSTATE",
              },
            ],
          },
          {
            id: "option-2",
            styles: {
              backgroundColor: "#FBA834",
              color: "black",
              fontWeight: "bold",
              height: "8%",
              padding: "10px",
              position: "absolute",
              textAlign: "center",
              top: "40%",
              width: "30%",
              border: "4px solid black",
              borderRadius: "10px",
              cursor: "pointer",
              left: "50%",
              fontSize: "20px",
              transition: "backgroundColor 0.3s",
              hover: {
                backgroundColor: "green",
              },
            },
            text: "HISTORY",
            events: [
              {
                payload: {
                  key: "answer",
                  value: "HISTORY",
                },
                trigger: "click",
                type: "ACTION.SETSTATE",
              },
            ],
          },
          {
            id: "option-3",
            styles: {
              backgroundColor: "#FBA834",
              color: "black",
              fontWeight: "bold",
              height: "8%",
              padding: "10px",
              position: "absolute",
              textAlign: "center",
              top: "50%",
              width: "30%",
              border: "4px solid black",
              borderRadius: "10px",
              cursor: "pointer",
              left: "50%",
              fontSize: "20px",
              hover: {
                backgroundColor: "green",
              },
              transition: "backgroundColor 0.3s",
            },
            text: "MOVIES",
            events: [
              {
                payload: {
                  key: "answer",
                  value: "MOVIES",
                },
                trigger: "click",
                type: "ACTION.SETSTATE",
              },
            ],
          },
          {
            id: "option-4",
            styles: {
              backgroundColor: "#FBA834",
              color: "black",
              fontWeight: "bold",
              height: "8%",
              padding: "10px",
              position: "absolute",
              textAlign: "center",
              top: "60%",
              width: "30%",
              border: "4px solid black",
              borderRadius: "10px",
              cursor: "pointer",
              left: "50%",
              fontSize: "15px",
              hover: {
                backgroundColor: "green",
              },
              transition: "backgroundColor 0.3s",
            },
            text: "TECHNOLOGY",
            events: [
              {
                payload: {
                  key: "answer",
                  value: "TECHNOLOGY",
                },
                trigger: "click",
                type: "ACTION.SETSTATE",
              },
            ],
          },
          {
            id: "img-3",
            styles: {
              borderRadius: "10px",
              zIndex: "-1",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "60vw",
              height: "100vh",
              position: "absolute",
              top: "40%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            },
            imageUrl:
              "https://firebasestorage.googleapis.com/v0/b/thegoodgametheory-quiz.appspot.com/o/assets%2FBlue_and_Green_Modern_Gradient_Trivia_Night_Game_Presentation_3-removebg-preview.png?alt=media&token=f87176bf-7bf7-4ea7-9001-eb20ef51ef6e",
          },
          {
            id: "img-2",
            imageUrl:
              "https://firebasestorage.googleapis.com/v0/b/thegoodgametheory-quiz.appspot.com/o/assets%2Ftempimage.png?alt=media&token=99bc959d-44c5-49f4-b245-2933c99fc1d3",
            styles: {
              height: "30%",
              transform: "translate(-50%, -50%) scale(0.5)",
              width: "100%",
              padding: "10px",
              paddingLeft: "17px",
              position: "absolute",
              textAlign: "left",
              top: "90%",
            },
          },
          {
            id: "background",
            styles: {
              backgroundImage:
                "url('https://firebasestorage.googleapis.com/v0/b/thegoodgametheory-quiz.appspot.com/o/assets%2Fbackgroundimage.png?alt=media&token=1f432ba8-ddc0-4dda-910c-3f8861c57e4e')",
              borderRadius: "0px",
              height: "100vh",
              width: "100vw",
              zIndex: "-1",
              position: "absolute",
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
              left: "5%",
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
              left: "95%",
              position: "absolute",
              width: "5rem",
            },
          },
          {
            id: "img-16",
            styles: {
              borderRadius: "10px",
              zIndex: "-1",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "60vw",
              height: "80vh",
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            },
            imageUrl:
              "https://firebasestorage.googleapis.com/v0/b/thegoodgametheory-quiz.appspot.com/o/assets%2FBlue_and_Green_Modern_Gradient_Trivia_Night_Game_Presentation__9_-removebg-preview.png?alt=media&token=f7257399-b2c7-466f-a756-8fd81cd72c9d",
          },
        ],
      },
    },
    {
      category: "info",
      landscape: {
        divs: [
          {
            id: "category-display-0",
            styles: {
              height: "60vh",
              position: "absolute",
              width: "50%",
              fontFamily: "Monospace",
              fontSize: "30px",
              left: "25%",
              top: "10%",
              transform: "translateY(-50%)",
              textAlign: "center",
              fontWeight: "bold",
              color: "Black",
            },
            // subscribeTo: "MEHAK",
            subscription: {
              renderFunctions: [
                // {
                //   functionBody:
                //     "return function getAnswer(data) { const answer = data['ANSWER']; return answer + \" - Selected Category\"; }",
                //   id: "MEHAK",
                // },
              ],
              sources: [
                {
                  id: "ANSWER",
                  subscribeTo: "answer",
                },
              ],
            },
            text: {
              default: "Score: 12",
            },
          },
          {
            id: "category-display",
            styles: {
              height: "60vh",
              position: "absolute",
              width: "50%",
              fontFamily: "Monospace",
              left: "5%",
              top: {
                default: "20%",
                subscribeTo: "ANSWER",
              },
              transform: "translateY(-50%)",
              textAlign: "center",
              fontWeight: "bold",
              fontSize: "20px",
              color: "Black",
            },
            subscribeTo: "MEHAK",
            subscription: {
              renderFunctions: [
                {
                  functionBody:
                    "return function getAnswer(data) { const answer = data['ANSWER']; return answer; }",
                  id: "MEHAK",
                },
                {
                  functionBody:
                    "return function getFontSize(data) { const fontSize = data['FONT_SIZE']; return fontSize + 1 || 0; }",
                  id: "FONT_SIZE",
                  // saveId: "fontSize",
                },
              ],
              sources: [
                {
                  id: "ANSWER",
                  subscribeTo: "answer",
                },
              ],
            },
            text: {
              default: "",
              subscribeTo: "MEHAK",
            },
          },
          {
            id: "inc-button-01",
            styles: {
              backgroundColor: "#FBA834",
              color: "black",
              fontWeight: "bold",
              height: "8%",
              padding: "10px",
              position: "absolute",
              textAlign: "center",
              top: "30%",
              width: "20%",
              border: "4px solid black",
              borderRadius: "10px",
              cursor: "pointer",
              left: "80%",
              fontSize: "20px",
              transition: "backgroundColor 0.3s",
              hover: {
                backgroundColor: "green",
              },
            },

            text: {
              default: "INCREMENT",
            },
            events: [
              {
                payload: {
                  key: "answer",
                  value: "10%",
                },
                trigger: "click",
                type: "ACTION.SETSTATE",
              },
            ],
          },
          {
            id: "option-1",
            styles: {
              backgroundColor: "#FBA834",
              color: "black",
              fontWeight: "bold",
              height: "8%",
              padding: "10px",
              position: "absolute",
              textAlign: "center",
              top: "30%",
              width: "20%",
              border: "4px solid black",
              borderRadius: "10px",
              cursor: "pointer",
              left: "50%",
              fontSize: "20px",
              transition: "backgroundColor 0.3s",
              hover: {
                backgroundColor: "green",
              },
            },

            text: {
              default: "MUSIC",
            },
            events: [
              {
                payload: {
                  key: "answer",
                  value: "10%",
                },
                trigger: "click",
                type: "ACTION.SETSTATE",
              },
            ],
          },
          {
            id: "option-2",
            styles: {
              backgroundColor: "#FBA834",
              color: "black",
              fontWeight: "bold",
              height: "8%",
              padding: "10px",
              position: "absolute",
              textAlign: "center",
              top: "40%",
              width: "20%",
              border: "4px solid black",
              borderRadius: "10px",
              cursor: "pointer",
              left: "50%",
              fontSize: "20px",
              transition: "backgroundColor 0.3s",
              hover: {
                backgroundColor: "green",
              },
            },

            text: {
              default: "HISTORY",
            },
            events: [
              {
                payload: {
                  key: "answer",
                  value: "20%",
                },
                trigger: "click",
                type: "ACTION.SETSTATE",
              },
            ],
          },
          {
            id: "option-3",
            styles: {
              backgroundColor: "#FBA834",
              color: "black",
              fontWeight: "bold",
              height: "8%",
              padding: "10px",
              position: "absolute",
              textAlign: "center",
              top: "50%",
              width: "20%",
              border: "4px solid black",
              borderRadius: "10px",
              cursor: "pointer",
              left: "50%",
              fontSize: "20px",
              hover: {
                backgroundColor: "green",
              },
              transition: "backgroundColor 0.3s",
            },

            text: {
              default: "MOVIES",
            },
            events: [
              {
                payload: {
                  key: "answer",
                  value: "30%",
                },
                trigger: "click",
                type: "ACTION.SETSTATE",
              },
            ],
          },
          {
            id: "option-4",
            styles: {
              backgroundColor: "#FBA834",
              color: "black",
              fontWeight: "bold",
              height: "8%",
              padding: "10px",
              position: "absolute",
              textAlign: "center",
              top: "60%",
              width: "20%",
              border: "4px solid black",
              borderRadius: "10px",
              cursor: "pointer",
              left: "50%",
              fontSize: "20px",
              hover: {
                backgroundColor: "green",
              },
              transition: "backgroundColor 0.3s",
            },

            text: {
              default: "TECHNOLOGY",
            },
            events: [
              {
                payload: {
                  key: "answer",
                  value: "40%",
                },
                trigger: "click",
                type: "ACTION.SETSTATE",
              },
            ],
          },
          {
            id: "img-3",
            styles: {
              borderRadius: "10px",
              zIndex: "-1",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "60vw",
              height: "100vh",
              position: "absolute",
              top: "40%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            },
            imageUrl:
              "https://firebasestorage.googleapis.com/v0/b/thegoodgametheory-quiz.appspot.com/o/assets%2FBlue_and_Green_Modern_Gradient_Trivia_Night_Game_Presentation_3-removebg-preview.png?alt=media&token=f87176bf-7bf7-4ea7-9001-eb20ef51ef6e",
          },
          {
            id: "img-2",
            imageUrl:
              "https://firebasestorage.googleapis.com/v0/b/thegoodgametheory-quiz.appspot.com/o/assets%2Ftempimage.png?alt=media&token=99bc959d-44c5-49f4-b245-2933c99fc1d3",
            styles: {
              height: "30%",
              transform: "translate(-50%, -50%) scale(0.5)",
              width: "100%",
              padding: "10px",
              paddingLeft: "17px",
              position: "absolute",
              textAlign: "left",
              top: "90%",
            },
          },
          {
            id: "background",
            styles: {
              backgroundImage:
                "url('https://firebasestorage.googleapis.com/v0/b/thegoodgametheory-quiz.appspot.com/o/assets%2Fbackgroundimage.png?alt=media&token=1f432ba8-ddc0-4dda-910c-3f8861c57e4e')",
              borderRadius: "0px",
              height: "100vh",
              width: "100vw",
              zIndex: "-1",
              position: "absolute",
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
              left: "5%",
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
              left: "95%",
              position: "absolute",
              width: "5rem",
            },
          },
        ],
      },
      portrait: {
        divs: [
          {
            id: "category-display",
            styles: {
              height: "60vh",
              position: "absolute",
              width: "80%",
              fontFamily: "Monospace",
              fontSize: "30px",
              left: "15%",
              top: "18%",
              transform: "translateY(-50%)",
              textAlign: "center",
              fontWeight: "bold",
              color: "Black",
              animationName: "panX",
              animationDelay: "0.3s",
              animationDirection: "normal",
              animationDuration: "1.5s",
              animationIterationCount: "1",
              animationTimingFunction: "ease",
            },
            subscription: {
              renderFunctions: [
                {
                  functionBody:
                    "return function getAnswer(data) { const answer = data['ANSWER']; return answer + \" - Category\"; }",
                  id: "MEHAK",
                },
              ],
              sources: [
                {
                  id: "ANSWER",
                  subscribeTo: "answer",
                },
              ],
            },
            text: {
              default: "Score: 1",
              subscribeTo: "MEHAK",
            },
          },
          {
            id: "option-1",
            styles: {
              backgroundColor: "#FBA834",
              color: "black",
              fontWeight: "bold",
              height: "8%",
              padding: "10px",
              position: "absolute",
              textAlign: "center",
              top: "30%",
              width: "30%",
              border: "4px solid black",
              borderRadius: "10px",
              cursor: "pointer",
              left: "50%",
              fontSize: "20px",
              transition: "backgroundColor 0.3s",
              hover: {
                backgroundColor: "green",
              },
            },
            text: "MUSIC",
            events: [
              {
                payload: {
                  key: "answer",
                  value: "MUSIC",
                },
                trigger: "click",
                type: "ACTION.SETSTATE",
              },
            ],
          },
          {
            id: "option-2",
            styles: {
              backgroundColor: "#FBA834",
              color: "black",
              fontWeight: "bold",
              height: "8%",
              padding: "10px",
              position: "absolute",
              textAlign: "center",
              top: "40%",
              width: "30%",
              border: "4px solid black",
              borderRadius: "10px",
              cursor: "pointer",
              left: "50%",
              fontSize: "20px",
              transition: "backgroundColor 0.3s",
              hover: {
                backgroundColor: "green",
              },
            },
            text: "HISTORY",
            events: [
              {
                payload: {
                  key: "answer",
                  value: "HISTORY",
                },
                trigger: "click",
                type: "ACTION.SETSTATE",
              },
            ],
          },
          {
            id: "option-3",
            styles: {
              backgroundColor: "#FBA834",
              color: "black",
              fontWeight: "bold",
              height: "8%",
              padding: "10px",
              position: "absolute",
              textAlign: "center",
              top: "50%",
              width: "30%",
              border: "4px solid black",
              borderRadius: "10px",
              cursor: "pointer",
              left: "50%",
              fontSize: "20px",
              hover: {
                backgroundColor: "green",
              },
              transition: "backgroundColor 0.3s",
            },
            text: "MOVIES",
            events: [
              {
                payload: {
                  key: "answer",
                  value: "MOVIES",
                },
                trigger: "click",
                type: "ACTION.SETSTATE",
              },
            ],
          },
          {
            id: "option-4",
            styles: {
              backgroundColor: "#FBA834",
              color: "black",
              fontWeight: "bold",
              height: "8%",
              padding: "10px",
              position: "absolute",
              textAlign: "center",
              top: "60%",
              width: "30%",
              border: "4px solid black",
              borderRadius: "10px",
              cursor: "pointer",
              left: "50%",
              fontSize: "15px",
              hover: {
                backgroundColor: "green",
              },
              transition: "backgroundColor 0.3s",
            },
            text: "TECHNOLOGY",
            events: [
              {
                payload: {
                  key: "answer",
                  value: "TECHNOLOGY",
                },
                trigger: "click",
                type: "ACTION.SETSTATE",
              },
            ],
          },
          {
            id: "img-3",
            styles: {
              borderRadius: "10px",
              zIndex: "-1",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "60vw",
              height: "100vh",
              position: "absolute",
              top: "40%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            },
            imageUrl:
              "https://firebasestorage.googleapis.com/v0/b/thegoodgametheory-quiz.appspot.com/o/assets%2FBlue_and_Green_Modern_Gradient_Trivia_Night_Game_Presentation_3-removebg-preview.png?alt=media&token=f87176bf-7bf7-4ea7-9001-eb20ef51ef6e",
          },
          {
            id: "img-2",
            imageUrl:
              "https://firebasestorage.googleapis.com/v0/b/thegoodgametheory-quiz.appspot.com/o/assets%2Ftempimage.png?alt=media&token=99bc959d-44c5-49f4-b245-2933c99fc1d3",
            styles: {
              height: "30%",
              transform: "translate(-50%, -50%) scale(0.5)",
              width: "100%",
              padding: "10px",
              paddingLeft: "17px",
              position: "absolute",
              textAlign: "left",
              top: "90%",
            },
          },
          {
            id: "background",
            styles: {
              backgroundImage:
                "url('https://firebasestorage.googleapis.com/v0/b/thegoodgametheory-quiz.appspot.com/o/assets%2Fbackgroundimage.png?alt=media&token=1f432ba8-ddc0-4dda-910c-3f8861c57e4e')",
              borderRadius: "0px",
              height: "100vh",
              width: "100vw",
              zIndex: "-1",
              position: "absolute",
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
              left: "5%",
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
              left: "95%",
              position: "absolute",
              width: "5rem",
            },
          },
          {
            id: "img-16",
            styles: {
              borderRadius: "10px",
              zIndex: "-1",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "60vw",
              height: "80vh",
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            },
            imageUrl:
              "https://firebasestorage.googleapis.com/v0/b/thegoodgametheory-quiz.appspot.com/o/assets%2FBlue_and_Green_Modern_Gradient_Trivia_Night_Game_Presentation__9_-removebg-preview.png?alt=media&token=f7257399-b2c7-466f-a756-8fd81cd72c9d",
          },
        ],
      },
    },
    {
      category: "video-quiz",
      landscape: {
        divs: [
          {
            id: "background",
            styles: {
              backgroundImage:
                "url('https://firebasestorage.googleapis.com/v0/b/thegoodgametheory-quiz.appspot.com/o/assets%2Fbackgroundimage.png?alt=media&token=1f432ba8-ddc0-4dda-910c-3f8861c57e4e')",
              borderRadius: "0px",
              height: "100vh",
              width: "100vw",
              zIndex: "-1",
              position: "absolute",
            },
          },
          {
            id: "video-container",
            styles: {
              borderRadius: "10px",
              zIndex: "1",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "50vw",
              height: "50vh",
              padding: "10vh",
              position: "absolute",
              top: "20%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            },
            variant: "video",
            src: "https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
            autoPlay: false,
            loop: false,
            muted: false,
            controls: true,
          },
          {
            id: "question-text",
            styles: {
              position: "absolute",
              top: "55%",
              left: "50%",
              width: "80%",
              textAlign: "center",
              fontSize: "24px",
              fontWeight: "bold",
              color: "black",
            },
            text: {
              default: "What is the main topic of the video?",
            },
          },
          {
            id: "option-1",
            styles: {
              position: "absolute",
              top: "65%",
              left: "20%",
              width: "30%",
              padding: "10px",
              backgroundColor: "#FBA834",
              color: "black",
              fontWeight: "bold",
              textAlign: "center",
              borderRadius: "10px",
              cursor: "pointer",
              fontSize: "20px",
            },
            text: {
              default: "Climate Change",
            },
            events: [
              {
                trigger: "click",
                type: "ACTION.SETSTATE",
                payload: {
                  key: "selectedAnswer",
                  value: "Climate Change",
                },
              },
            ],
          },
          {
            id: "option-2",
            styles: {
              position: "absolute",
              top: "65%",
              left: "55%",
              width: "35%",
              padding: "10px",
              backgroundColor: "#FBA834",
              color: "black",
              fontWeight: "bold",
              textAlign: "center",
              borderRadius: "10px",
              cursor: "pointer",
              fontSize: "20px",
            },
            text: {
              default: "Space Exploration",
            },
            events: [
              {
                trigger: "click",
                type: "ACTION.SETSTATE",
                payload: {
                  key: "selectedAnswer",
                  value: "Space Exploration",
                },
              },
            ],
          },
          {
            id: "option-3",
            styles: {
              position: "absolute",
              top: "75%",
              left: "20%",
              width: "30%",
              padding: "10px",
              backgroundColor: "#FBA834",
              color: "black",
              fontWeight: "bold",
              textAlign: "center",
              borderRadius: "10px",
              cursor: "pointer",
              fontSize: "20px",
            },
            text: {
              default: "Artificial Intelligence",
            },
            events: [
              {
                trigger: "click",
                type: "ACTION.SETSTATE",
                payload: {
                  key: "selectedAnswer",
                  value: "Artificial Intelligence",
                },
              },
            ],
          },
          {
            id: "option-4",
            styles: {
              position: "absolute",
              top: "75%",
              left: "55%",
              width: "35%",
              padding: "10px",
              backgroundColor: "#FBA834",
              color: "black",
              fontWeight: "bold",
              textAlign: "center",
              borderRadius: "10px",
              cursor: "pointer",
              fontSize: "20px",
            },
            text: {
              default: "Renewable Energy",
            },
            events: [
              {
                trigger: "click",
                type: "ACTION.SETSTATE",
                payload: {
                  key: "selectedAnswer",
                  value: "Renewable Energy",
                },
              },
            ],
          },
          {
            id: "submit-button",
            styles: {
              position: "absolute",
              top: "85%",
              left: "40%",
              width: "20%",
              padding: "10px",
              backgroundColor: "#4CAF50",
              color: "white",
              fontWeight: "bold",
              textAlign: "center",
              borderRadius: "10px",
              cursor: "pointer",
              fontSize: "20px",
            },
            text: {
              default: "Submit Answer",
            },
            events: [
              {
                trigger: "click",
                type: "ACTION.UPDATESTATES",
                payload: [
                  {
                    key: "showFeedback",
                    functionBody:
                      "return function checkAnswer(data) { return data['selectedAnswer'] === 'Artificial Intelligence'; }",
                  },
                  {
                    key: "buttonEnabled",
                    functionBody:
                      "return function toggleButtonState(data) { return !data['buttonEnabledquiz']; }",
                  },
                ],
              },
            ],
          },
          {
            id: "modal-overlay-quiz",
            styles: {
              position: "absolute",
              height: "100vh",
              width: "100vw",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              zIndex: 1000,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              visibility: {
                default: "hidden",
                subscribeTo: "feedbackVisibility",
              },
            },
            subscription: {
              renderFunctions: [
                {
                  functionBody:
                    "return function getVisibility(data) { return data['showFeedback'] ? 'visible' : 'hidden'; }",
                  id: "feedbackVisibility",
                },
              ],
              sources: [
                {
                  id: "showFeedback",
                  subscribeTo: "showFeedback",
                },
              ],
            },
          },
          {
            id: "popup-div-quiz",
            parent: "modal-overlay-quiz",
            text: {
              default: "",
              subscribeTo: "feedbackText",
            },
            subscription: {
              renderFunctions: [
                {
                  functionBody:
                    "return function getFeedback(data) { return data['showFeedback'] ? 'Correct! Great job!' : 'Incorrect. Try again!'; }",
                  id: "feedbackText",
                },
              ],
              sources: [
                {
                  id: "showFeedback",
                  subscribeTo: "showFeedback",
                },
              ],
            },
          },
          {
            id: "close-button",
            parent: "modal-overlay-quiz",
            styles: {
              position: "absolute",
              top: "20px",
              right: "20px",
              fontSize: "24px",
              cursor: "pointer",
              zIndex: 1001,
              color: "#FBA834",
            },
            text: {
              default: "×",
            },
            events: [
              {
                trigger: "click",
                type: "ACTION.UPDATESTATE",
                payload: {
                  key: "buttonEnabled",
                  functionBody:
                    "return function toggleConfirm(data) { return true; }",
                },
              },
            ],
          },
          {
            id: "feedback-text",
            parent: "feedback-overlay",
            styles: {
              color: "white",
              fontSize: "36px",
              fontWeight: "bold",
              textAlign: "center",
            },
            text: {
              default: "",
              subscribeTo: "feedbackText",
            },
            subscription: {
              renderFunctions: [
                {
                  functionBody:
                    "return function getFeedback(data) { return data['showFeedback'] ? 'Correct! Great job!' : 'Incorrect. Try again!'; }",
                  id: "feedbackText",
                },
              ],
              sources: [
                {
                  id: "showFeedback",
                  subscribeTo: "showFeedback",
                },
              ],
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
              left: "5%",
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
              left: "95%",
              position: "absolute",
              width: "5rem",
            },
          },
        ],
      },
    },
    {
      category: "audio-quiz",
      landscape: {
        divs: [
          {
            id: "background",
            styles: {
              backgroundImage:
                "url('https://firebasestorage.googleapis.com/v0/b/thegoodgametheory-quiz.appspot.com/o/assets%2Fbackgroundimage.png?alt=media&token=1f432ba8-ddc0-4dda-910c-3f8861c57e4e')",
              borderRadius: "0px",
              height: "100vh",
              width: "100vw",
              zIndex: "-1",
              position: "absolute",
            },
          },
          {
            id: "audio-container",
            styles: {
              borderRadius: "10px",
              zIndex: "1",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "50vw",
              height: "10vh",
              padding: "2vh",
              position: "absolute",
              top: "20%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            },
            variant: "video",
            src: "https://actions.google.com/sounds/v1/cartoon/crash_layer_drumset.ogg",
            autoPlay: false,
            loop: false,
            muted: false,
            controls: true,
          },
          {
            id: "question-text",
            styles: {
              position: "absolute",
              top: "35%",
              left: "50%",
              width: "80%",
              textAlign: "center",
              fontSize: "24px",
              fontWeight: "bold",
              color: "black",
              transform: "translateX(-50%)",
            },
            text: {
              default:
                "What is the main instrument you hear in this audio clip?",
            },
          },
          {
            id: "option-1",
            styles: {
              position: "absolute",
              top: "45%",
              left: "30%",
              width: "30%",
              padding: "10px",
              backgroundColor: "#FBA834",
              color: "black",
              fontWeight: "bold",
              textAlign: "center",
              borderRadius: "10px",
              cursor: "pointer",
              fontSize: "20px",
            },
            text: {
              default: "Piano",
            },
            events: [
              {
                trigger: "click",
                type: "ACTION.SETSTATE",
                payload: {
                  key: "selectedAnswer",
                  value: "Piano",
                },
              },
            ],
          },
          {
            id: "option-2",
            styles: {
              position: "absolute",
              top: "45%",
              left: "65%",
              width: "30%",
              padding: "10px",
              backgroundColor: "#FBA834",
              color: "black",
              fontWeight: "bold",
              textAlign: "center",
              borderRadius: "10px",
              cursor: "pointer",
              fontSize: "20px",
            },
            text: {
              default: "Guitar",
            },
            events: [
              {
                trigger: "click",
                type: "ACTION.SETSTATE",
                payload: {
                  key: "selectedAnswer",
                  value: "Guitar",
                },
              },
            ],
          },
          {
            id: "option-3",
            styles: {
              position: "absolute",
              top: "55%",
              left: "30%",
              width: "30%",
              padding: "10px",
              backgroundColor: "#FBA834",
              color: "black",
              fontWeight: "bold",
              textAlign: "center",
              borderRadius: "10px",
              cursor: "pointer",
              fontSize: "20px",
            },
            text: {
              default: "Violin",
            },
            events: [
              {
                trigger: "click",
                type: "ACTION.SETSTATE",
                payload: {
                  key: "selectedAnswer",
                  value: "Violin",
                },
              },
            ],
          },
          {
            id: "option-4",
            styles: {
              position: "absolute",
              top: "55%",
              left: "65%",
              width: "30%",
              padding: "10px",
              backgroundColor: "#FBA834",
              color: "black",
              fontWeight: "bold",
              textAlign: "center",
              borderRadius: "10px",
              cursor: "pointer",
              fontSize: "20px",
            },
            text: {
              default: "Drums",
            },
            events: [
              {
                trigger: "click",
                type: "ACTION.SETSTATE",
                payload: {
                  key: "selectedAnswer",
                  value: "Drums",
                },
              },
            ],
          },
          {
            id: "submit-button",
            styles: {
              position: "absolute",
              top: "70%",
              left: "40%",
              width: "20%",
              padding: "10px",
              backgroundColor: "#4CAF50",
              color: "white",
              fontWeight: "bold",
              textAlign: "center",
              borderRadius: "10px",
              cursor: "pointer",
              fontSize: "20px",
            },
            text: {
              default: "Submit Answer",
            },
            events: [
              {
                trigger: "click",
                type: "ACTION.UPDATESTATES",
                payload: [
                  {
                    key: "showFeedback",
                    functionBody:
                      "return function checkAnswer(data) { return data['selectedAnswer'] === 'Piano'; }",
                  },
                  {
                    key: "buttonEnabled",
                    functionBody:
                      "return function toggleButtonState(data) { return !data['buttonEnabledquiz']; }",
                  },
                ],
              },
            ],
          },
          {
            id: "modal-overlay-quiz",
            styles: {
              position: "absolute",
              height: "100vh",
              width: "100vw",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              zIndex: 1000,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              visibility: {
                default: "hidden",
                subscribeTo: "feedbackVisibility",
              },
            },
            subscription: {
              renderFunctions: [
                {
                  functionBody:
                    "return function getVisibility(data) { return data['showFeedback'] ? 'visible' : 'hidden'; }",
                  id: "feedbackVisibility",
                },
              ],
              sources: [
                {
                  id: "showFeedback",
                  subscribeTo: "showFeedback",
                },
              ],
            },
          },
          {
            id: "popup-div-quiz",
            parent: "modal-overlay-quiz",
            text: {
              default: "",
              subscribeTo: "feedbackText",
            },
            subscription: {
              renderFunctions: [
                {
                  functionBody:
                    "return function getFeedback(data) { return data['showFeedback'] ? 'Correct! Great job!' : 'Incorrect. Try again!'; }",
                  id: "feedbackText",
                },
              ],
              sources: [
                {
                  id: "showFeedback",
                  subscribeTo: "showFeedback",
                },
              ],
            },
          },
          {
            id: "close-button",
            parent: "modal-overlay-quiz",
            styles: {
              position: "absolute",
              top: "20px",
              right: "20px",
              fontSize: "24px",
              cursor: "pointer",
              zIndex: 1001,
              color: "#FBA834",
            },
            text: {
              default: "×",
            },
            events: [
              {
                trigger: "click",
                type: "ACTION.UPDATESTATE",
                payload: {
                  key: "buttonEnabled",
                  functionBody:
                    "return function toggleConfirm(data) { return true; }",
                },
              },
            ],
          },
          {
            id: "feedback-text",
            parent: "feedback-overlay",
            styles: {
              color: "white",
              fontSize: "36px",
              fontWeight: "bold",
              textAlign: "center",
            },
            text: {
              default: "",
              subscribeTo: "feedbackText",
            },
            subscription: {
              renderFunctions: [
                {
                  functionBody:
                    "return function getFeedback(data) { return data['showFeedback'] ? 'Correct! Great job!' : 'Incorrect. Try again!'; }",
                  id: "feedbackText",
                },
              ],
              sources: [
                {
                  id: "showFeedback",
                  subscribeTo: "showFeedback",
                },
              ],
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
              left: "5%",
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
              left: "95%",
              position: "absolute",
              width: "5rem",
            },
          },
        ],
      },
    },
    {
      category: "input-form",
      landscape: {
        divs: [
          {
            id: "background",
            styles: {
              backgroundImage:
                "url('https://firebasestorage.googleapis.com/v0/b/thegoodgametheory-quiz.appspot.com/o/assets%2Fbackgroundimage.png?alt=media&token=1f432ba8-ddc0-4dda-910c-3f8861c57e4e')",
              borderRadius: "0px",
              height: "100vh",
              width: "100vw",
              zIndex: "-1",
              position: "absolute",
            },
          },
          {
            id: "form-container",
            styles: {
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "80%",
              maxWidth: "600px",
              padding: "20px",
              backgroundColor: "rgba(255, 255, 255, 0.9)",
              borderRadius: "10px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            },
          },
          {
            id: "form-title",
            parent: "form-container",
            styles: {
              fontSize: "24px",
              fontWeight: "bold",
              marginBottom: "20px",
              textAlign: "center",
            },
            text: "Input Types Example",
          },
          {
            id: "text-input",
            parent: "form-container",
            variant: "input",
            inputType: "text",
            styles: {
              width: "100%",
              padding: "10px",
              marginBottom: "10px",
              borderRadius: "5px",
              border: "1px solid #ccc",
            },
            placeholder: "Enter your name",
            // events: [
            //   {
            //     trigger: "change",
            //     type: "ACTION.UPDATESTATE",
            //     payload: {
            //       key: "inputValue",
            //       functionBody:
            //         "return function updateInput(data, event) { return event.target.value; }",
            //     },
            //   },
            // ],
          },
          {
            id: "email-input",
            parent: "form-container",
            variant: "input",
            inputType: "email",
            styles: {
              width: "100%",
              padding: "10px",
              marginBottom: "10px",
              borderRadius: "5px",
              border: "1px solid #ccc",
            },
            placeholder: "Enter your email",
          },
          // {
          //   id: "password-input",
          //   parent: "form-container",
          //   variant: "input",
          //   inputType: "password",
          //   styles: {
          //     width: "100%",
          //     padding: "10px",
          //     marginBottom: "10px",
          //     borderRadius: "5px",
          //     border: "1px solid #ccc",
          //   },
          //   placeholder: "Enter your password",
          // },
          // {
          //   id: "number-input",
          //   parent: "form-container",
          //   variant: "input",
          //   inputType: "number",
          //   styles: {
          //     width: "100%",
          //     padding: "10px",
          //     marginBottom: "10px",
          //     borderRadius: "5px",
          //     border: "1px solid #ccc",
          //   },
          //   placeholder: "Enter your age",
          //   min: 0,
          //   max: 120,
          // },
          // {
          //   id: "date-input",
          //   parent: "form-container",
          //   variant: "input",
          //   inputType: "date",
          //   styles: {
          //     width: "100%",
          //     padding: "10px",
          //     marginBottom: "10px",
          //     borderRadius: "5px",
          //     border: "1px solid #ccc",
          //   },
          // },
          // {
          //   id: "checkbox-container",
          //   parent: "form-container",
          //   styles: {
          //     display: "flex",
          //     alignItems: "center",
          //     marginBottom: "10px",
          //   },
          // },
          // {
          //   id: "checkbox-input",
          //   parent: "checkbox-container",
          //   variant: "input",
          //   inputType: "checkbox",
          //   styles: {
          //     marginRight: "10px",
          //   },
          // },
          // {
          //   id: "checkbox-label",
          //   parent: "checkbox-container",
          //   text: {
          //     default: "I agree to the terms and conditions",
          //   },
          // },
          // {
          //   id: "radio-group",
          //   parent: "form-container",
          //   styles: {
          //     marginBottom: "10px",
          //   },
          // },
          // {
          //   id: "radio-label",
          //   parent: "radio-group",
          //   text: {
          //     default: "Select your favorite color:",
          //   },
          //   styles: {
          //     display: "block",
          //     marginBottom: "5px",
          //   },
          // },
          // {
          //   id: "radio-red",
          //   parent: "radio-group",
          //   variant: "input",
          //   inputType: "radio",
          //   styles: {
          //     marginRight: "5px",
          //   },
          //   value: "red",
          //   name: "favorite-color",
          // },
          // {
          //   id: "radio-red-label",
          //   parent: "radio-group",
          //   text: {
          //     default: "Red",
          //   },
          //   styles: {
          //     marginRight: "10px",
          //   },
          // },
          // {
          //   id: "radio-blue",
          //   parent: "radio-group",
          //   variant: "input",
          //   inputType: "radio",
          //   styles: {
          //     marginRight: "5px",
          //   },
          //   value: "blue",
          //   name: "favorite-color",
          // },
          // {
          //   id: "radio-blue-label",
          //   parent: "radio-group",
          //   text: {
          //     default: "Blue",
          //   },
          //   styles: {
          //     marginRight: "10px",
          //   },
          // },
          // {
          //   id: "radio-green",
          //   parent: "radio-group",
          //   variant: "input",
          //   inputType: "radio",
          //   styles: {
          //     marginRight: "5px",
          //   },
          //   value: "green",
          //   name: "favorite-color",
          // },
          // {
          //   id: "radio-green-label",
          //   parent: "radio-group",
          //   text: {
          //     default: "Green",
          //   },
          // },
          {
            id: "submit-button",
            parent: "form-container",
            styles: {
              width: "100%",
              padding: "10px",
              backgroundColor: "#4CAF50",
              color: "white",
              fontWeight: "bold",
              textAlign: "center",
              borderRadius: "5px",
              cursor: "pointer",
              fontSize: "18px",
              border: "none",
            },
            text: {
              default: "Submit",
            },
            events: [
              {
                trigger: "click",
                type: "ACTION.ONFORMSUBMIT",
                payload: {
                  key: "submit-button",
                  key1: "text-input",
                  key2: "email-input",
                },
              },
            ],
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
              left: "5%",
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
              left: "95%",
              position: "absolute",
              width: "5rem",
            },
          },
        ],
      },
    },
    {
      category: "iframe-example",
      landscape: {
        divs: [
          {
            id: "background",
            styles: {
              backgroundImage:
                "url('https://firebasestorage.googleapis.com/v0/b/thegoodgametheory-quiz.appspot.com/o/assets%2Fbackgroundimage.png?alt=media&token=1f432ba8-ddc0-4dda-910c-3f8861c57e4e')",
              borderRadius: "0px",
              height: "100vh",
              width: "100vw",
              zIndex: "-1",
              position: "absolute",
            },
          },
          {
            id: "iframe-container",
            styles: {
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "80%",
              maxWidth: "800px",
              height: "60vh",
              backgroundColor: "white",
              borderRadius: "10px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              overflow: "hidden",
            },
          },
          // {
          //   id: "iframe-title",
          //   parent: "iframe-container",
          //   styles: {
          //     fontSize: "24px",
          //     fontWeight: "bold",
          //     padding: "20px",
          //     textAlign: "center",
          //     borderBottom: "1px solid #ccc",
          //   },
          //   text: {
          //     default: "Embedded Website Example",
          //   },
          // },
          {
            id: "iframe-link",
            parent: "iframe-container",
            variant: "link",
            href: "https://en.wikipedia.org/wiki/IFrame",
            styles: {
              fontSize: "24px",
              textAlign: "center",
              borderBottom: "1px solid #ccc",
              color: "black",
              fontWeight: "bold",
              padding: "8px 16px",
              top: "70%",
              width: "10%",
              left: "25%",
              border: "4px solid black",
              borderRadius: "10px",
              cursor: "pointer",
            },
            text: "this is Wikipedia's Iframe",
          },
          {
            id: "iframe-content",
            parent: "iframe-container",
            variant: "iframe",
            src: "http://en.wikipedia.org/w/index.php",
            styles: {
              width: "100%",
              height: "calc(100% - 70px)",
              border: "none",
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
              left: "5%",
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
              left: "95%",
              position: "absolute",
              width: "5rem",
            },
          },
        ],
      },
    },
    // {
    //   category: "draggable-audio-quiz",
    //   landscape: {
    //     divs: [
    //       {
    //         id: "background",
    //         styles: {
    //           backgroundImage:
    //             "url('https://firebasestorage.googleapis.com/v0/b/thegoodgametheory-quiz.appspot.com/o/assets%2Fbackgroundimage.png?alt=media&token=1f432ba8-ddc0-4dda-910c-3f8861c57e4e')",
    //           borderRadius: "0px",
    //           height: "100vh",
    //           width: "100vw",
    //           zIndex: "-1",
    //           position: "absolute",
    //         },
    //       },
    //       {
    //         id: "audio-container",
    //         styles: {
    //           borderRadius: "10px",
    //           zIndex: "1",
    //           display: "flex",
    //           justifyContent: "center",
    //           alignItems: "center",
    //           width: "50vw",
    //           height: "10vh",
    //           padding: "2vh",
    //           position: "absolute",
    //           top: "20%",
    //           left: "50%",
    //           transform: "translate(-50%, -50%)",
    //         },
    //         variant: "video",
    //         src: "https://actions.google.com/sounds/v1/cartoon/crash_layer_drumset.ogg",
    //         autoPlay: false,
    //         loop: false,
    //         muted: false,
    //         controls: true,
    //       },
    //       {
    //         id: "question-text",
    //         styles: {
    //           position: "absolute",
    //           top: "35%",
    //           left: "50%",
    //           width: "80%",
    //           textAlign: "center",
    //           fontSize: "24px",
    //           fontWeight: "bold",
    //           color: "black",
    //           transform: "translateX(-50%)",
    //         },
    //         text: {
    //           default:
    //             "Drag the correct instrument you hear in this audio clip to the answer box.",
    //         },
    //       },
    //       {
    //         id: "answer-box",
    //         styles: {
    //           position: "absolute",
    //           top: "50%",
    //           left: "50%",
    //           width: "40%",
    //           height: "60px",
    //           border: "3px dashed #4CAF50",
    //           borderRadius: "10px",
    //           display: "flex",
    //           justifyContent: "center",
    //           alignItems: "center",
    //           fontSize: "20px",
    //           color: "#4CAF50",
    //           transform: "translate(-50%, -50%)",
    //         },
    //         text: {
    //           default: "Drop your answer here",
    //         },
    //         accepting: true,
    //         events: [
    //           {
    //             trigger: "drop",
    //             type: "ACTION.UPDATESTATES",
    //             payload: [
    //               {
    //                 key: "selectedAnswer",
    //                 functionBody:
    //                   "return function setAnswer(data, event) { return event.detail.choiceText; }",
    //               },
    //               {
    //                 key: "showFeedback",
    //                 functionBody:
    //                   "return function checkAnswer(data, event) { return event.detail.choiceText === 'Drums'; }",
    //               },
    //             ],
    //           },
    //         ],
    //       },
    //       {
    //         id: "option-1",
    //         styles: {
    //           position: "absolute",
    //           top: "70%",
    //           left: "20%",
    //           width: "15%",
    //           padding: "10px",
    //           backgroundColor: "#FBA834",
    //           color: "black",
    //           fontWeight: "bold",
    //           textAlign: "center",
    //           borderRadius: "10px",
    //           cursor: "move",
    //           fontSize: "20px",
    //         },
    //         text: {
    //           default: "Piano",
    //         },
    //         draggable: true,
    //       },
    //       {
    //         id: "option-2",
    //         styles: {
    //           position: "absolute",
    //           top: "70%",
    //           left: "40%",
    //           width: "15%",
    //           padding: "10px",
    //           backgroundColor: "#FBA834",
    //           color: "black",
    //           fontWeight: "bold",
    //           textAlign: "center",
    //           borderRadius: "10px",
    //           cursor: "move",
    //           fontSize: "20px",
    //         },
    //         text: {
    //           default: "Guitar",
    //         },
    //         draggable: true,
    //       },
    //       {
    //         id: "option-3",
    //         styles: {
    //           position: "absolute",
    //           top: "70%",
    //           left: "60%",
    //           width: "15%",
    //           padding: "10px",
    //           backgroundColor: "#FBA834",
    //           color: "black",
    //           fontWeight: "bold",
    //           textAlign: "center",
    //           borderRadius: "10px",
    //           cursor: "move",
    //           fontSize: "20px",
    //         },
    //         text: {
    //           default: "Violin",
    //         },
    //         draggable: true,
    //       },
    //       {
    //         id: "option-4",
    //         styles: {
    //           position: "absolute",
    //           top: "70%",
    //           left: "80%",
    //           width: "15%",
    //           padding: "10px",
    //           backgroundColor: "#FBA834",
    //           color: "black",
    //           fontWeight: "bold",
    //           textAlign: "center",
    //           borderRadius: "10px",
    //           cursor: "move",
    //           fontSize: "20px",
    //         },
    //         text: {
    //           default: "Drums",
    //         },
    //         draggable: true,
    //       },
    //       {
    //         id: "modal-overlay-quiz",
    //         styles: {
    //           position: "absolute",
    //           height: "100vh",
    //           width: "100vw",
    //           backgroundColor: "rgba(0, 0, 0, 0.5)",
    //           zIndex: 1000,
    //           display: "flex",
    //           justifyContent: "center",
    //           alignItems: "center",
    //           visibility: {
    //             default: "hidden",
    //             subscribeTo: "feedbackVisibility",
    //           },
    //         },
    //         subscription: {
    //           renderFunctions: [
    //             {
    //               functionBody:
    //                 "return function getVisibility(data) { return data['showFeedback'] ? 'visible' : 'hidden'; }",
    //               id: "feedbackVisibility",
    //             },
    //           ],
    //           sources: [
    //             {
    //               id: "showFeedback",
    //               subscribeTo: "showFeedback",
    //             },
    //           ],
    //         },
    //       },
    //       {
    //         id: "popup-div-quiz",
    //         parent: "modal-overlay-quiz",
    //         text: {
    //           default: "",
    //           subscribeTo: "feedbackText",
    //         },
    //         subscription: {
    //           renderFunctions: [
    //             {
    //               functionBody:
    //                 "return function getFeedback(data) { return data['showFeedback'] ? 'Correct! Great job!' : 'Incorrect. Try again!'; }",
    //               id: "feedbackText",
    //             },
    //           ],
    //           sources: [
    //             {
    //               id: "showFeedback",
    //               subscribeTo: "showFeedback",
    //             },
    //           ],
    //         },
    //       },
    //       {
    //         id: "close-button",
    //         parent: "modal-overlay-quiz",
    //         styles: {
    //           position: "absolute",
    //           top: "20px",
    //           right: "20px",
    //           fontSize: "24px",
    //           cursor: "pointer",
    //           zIndex: 1001,
    //           color: "#FBA834",
    //         },
    //         text: {
    //           default: "×",
    //         },
    //         events: [
    //           {
    //             trigger: "click",
    //             type: "ACTION.UPDATESTATE",
    //             payload: {
    //               key: "showFeedback",
    //               value: false,
    //             },
    //           },
    //         ],
    //       },
    //       {
    //         events: [
    //           {
    //             payload: "",
    //             trigger: "click",
    //             type: "ACTION.PREV",
    //           },
    //         ],
    //         id: "btn-prev-1l-001",
    //         imageUrl:
    //           "https://firebasestorage.googleapis.com/v0/b/thegoodgametheory-quiz.appspot.com/o/assets%2Fbutton_prev.svg?alt=media&token=811ebf77-dd80-4025-ba8a-f862a9550291",
    //         styles: {
    //           height: "5.5rem",
    //           left: "5%",
    //           position: "absolute",
    //           width: "5rem",
    //         },
    //       },
    //       {
    //         events: [
    //           {
    //             payload: "",
    //             trigger: "next-event",
    //             type: "ACTION.NEXT",
    //           },
    //           {
    //             payload: "",
    //             trigger: "click",
    //             type: "ACTION.NEXT",
    //           },
    //         ],
    //         id: "btn-next-1l-001",
    //         imageUrl:
    //           "https://firebasestorage.googleapis.com/v0/b/thegoodgametheory-quiz.appspot.com/o/assets%2Fbutton_next.svg?alt=media&token=e40a5d10-a663-4461-9cb1-b29bd93dde0b",
    //         styles: {
    //           height: "5.5rem",
    //           left: "95%",
    //           position: "absolute",
    //           width: "5rem",
    //         },
    //       },
    //     ],
    //   },
    // },
  ],
  title: "First Quiz Game",
  views: 1500,
};

export default mockData;
