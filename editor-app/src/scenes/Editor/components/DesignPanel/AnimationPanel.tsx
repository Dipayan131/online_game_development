import * as React from "react";
import { useState, useEffect } from "react";
import { IoCloseCircleOutline, IoAddCircleOutline } from "react-icons/io5";
import { FaEdit } from "react-icons/fa";
import useSlide from "scenify_sdk/useSlide";
import { cloneDeep } from "lodash";
import Edit from "animation_builder/Edit";
import { aniData } from "./animationData";
import { IoMdAddCircle } from "react-icons/io";
import { useResolvedPath } from "react-router-dom";
import useAppContext from "@/hooks/useAppContext";

interface Props {
  onClick: () => void;
}

const SIZE = 25;
const COLOR = "#8b3dff";

interface Animation {
  percent: number;
  [key: string]: string | number;
}

interface Category {
  name: string;
  animations: Animation[];
}

const AnimationPanel: React.FC<Props> = ({ onClick }) => {
  const { item, setItem, slideIndex, selectedDiv } = useSlide();
  const [animationType, setAnimationType] = useState<any>("none");
  const [delay, setDelay] = useState(0);
  const [direction, setDirection] = useState("normal");
  const [duration, setDuration] = useState(1);
  const [iterationCount, setIterationCount] = useState(1);
  const [timingFunction, setTimingFunction] = useState("ease");
  const [trigger, setTrigger] = useState("mount");
  const [edit, setEdit] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(
    null
  );
  const [data, setData] = useState<{ [key: string]: Category }>(() => {
    const savedData = localStorage.getItem("animationData");
    return savedData ? JSON.parse(savedData) : aniData;
  });
  const [fillMode, setFillMode] = useState("none");
  const [animationStatus, setAnimationStatus] = useState(false);
  const [editing, setEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(0);
  const {customActions, setCustomActions} = useAppContext();
  const [customCallback, setCustomCallback] = useState("")
  const [customCallbacks, setCustomCallbacks] = useState([])
  const [callback, setCallback] = useState("")

  useEffect(() => {
    const savedCallbacks = JSON.parse(localStorage.getItem("customCallbacks") || "[]");
    if (savedCallbacks.length > 0) {
      setCustomCallbacks(savedCallbacks);
    }
  }, []);

  const handleAddCustomCallback = () => {
    if (customCallback) {
      if (customCallbacks.includes(customCallback)) {
        alert("Action name already exists!");
      } else {
        const updatedCallbacks = [...customCallbacks, customCallback];
        setCustomCallbacks(updatedCallbacks);
        localStorage.setItem("customCallbacks", JSON.stringify(updatedCallbacks));
        setCustomCallback("");
      }
    }
  };

  const handleSetInitialState = (id: string) => {
    const newItem = cloneDeep(item);
    const currentSlide = newItem[slideIndex];
    const { landscape } = currentSlide;
    const divs = landscape.divs;
    const currentDiv = divs?.find((div: any) => div.id === id);
    if (currentDiv && !currentDiv.animations) {
      currentDiv.animations = [];
    }
    setItem(newItem);
  };

  useEffect(() => {
    const savedActions = localStorage.getItem('customActions');
    if (savedActions) {
      setCustomActions(JSON.parse(savedActions));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('customActions', JSON.stringify(customActions));
  }, [customActions]);
  
  
  useEffect(() => {
    if (selectedDiv) {
      handleSetInitialState(selectedDiv);
    }
  }, [selectedDiv]);
  
  const handleDivValue = (id: string) => {
    const newItem = cloneDeep(item);
    const currentSlide = newItem[slideIndex];
    const { landscape } = currentSlide;
    const divs = landscape.divs;
    const currentDiv = divs?.find((div: any) => div.id === id);
  
    if (currentDiv) {
      const newAnimation = {
        callback: callback,
        callbackPayload: "",
        delay: delay,
        direction: direction,
        duration: duration,
        iterationCount: iterationCount,
        timingFunction: timingFunction,
        trigger: trigger,
        type: animationType,
      };
  
      if (!currentDiv.animations) {
        currentDiv.animations = [];
      }
      currentDiv.animations.push(newAnimation);
  
      let keyframes = `@keyframes ${animationType} {`;
      selectedCategory?.animations.forEach((animation) => {
        keyframes += `${animation.percent}% {`;
        Object.entries(animation).forEach(([key, value]) => {
          if (key !== "percent") {
            keyframes += `${key}: ${value};`;
          }
        });
        keyframes += "}";
      });
      keyframes += "}";
  
      const styleSheet = document.styleSheets[0];
      const existingIndex = Array.from(styleSheet.cssRules).findIndex(
        (rule) => rule instanceof CSSKeyframesRule && rule.name === animationType
      );
  
      if (existingIndex !== -1) {
        styleSheet.deleteRule(existingIndex);
      }
      styleSheet.insertRule(keyframes, styleSheet.cssRules.length);
  
      const selectedDivElement = document.getElementById(id) as HTMLElement;
      if (selectedDivElement) {
        selectedDivElement.style.animation = "none";
        setTimeout(() => {
          selectedDivElement.style.animation = "";
          selectedDivElement.style.animationName = animationType;
          selectedDivElement.style.animationDuration = `${duration}s`;
          selectedDivElement.style.animationTimingFunction = timingFunction;
          selectedDivElement.style.animationDelay = `${delay}s`;
          selectedDivElement.style.animationIterationCount =
            iterationCount === -1 ? "infinite" : iterationCount.toString();
          selectedDivElement.style.animationDirection = direction;
          selectedDivElement.style.animationFillMode = fillMode;
        }, 10);
      }
  
      const draftData = JSON.parse(localStorage.getItem("draft") as string);
      localStorage.setItem(
        "draft",
        JSON.stringify({ ...draftData, item: newItem })
      );

      setAnimationStatus(false);
      setItem(newItem);
    } else {
      console.error(`Div with id ${id} not found`);
    }
  };
  
  
  

  // useEffect(() => {
  //   if (selectedDiv) {
  //     handleDivValue(selectedDiv);
  //   }
  // }, [
  //   animationType,
  //   delay,
  //   duration,
  //   direction,
  //   iterationCount,
  //   timingFunction,
  //   trigger,
  //   fillMode,
  //   selectedCategory,
  // ]);

  useEffect(() => {
    localStorage.setItem("animationData", JSON.stringify(data));
  }, [data]);

  const handleEdit = (div) => {
    setAnimationType(div.type);
    setDelay(div.delay);
    setDirection(div.direction);
    setDuration(div.duration);
    setIterationCount(div.iterationCount);
    setTimingFunction(div.timingFunction);
    setTrigger(div.trigger);
    setCallback(div.callback);

    setEditing(true);
    setAnimationStatus(true);
}


const handleSave = (id, index) => {
  const newItem = cloneDeep(item);
  const currentSlide = newItem[slideIndex];
  const { landscape } = currentSlide;
  const divs = landscape.divs;
  const currentDiv = divs?.find((div) => div.id === id);

  if (currentDiv) {
      const updatedAnimation = {
          callback: callback,
          type: animationType,
          delay: delay,
          direction: direction,
          duration: duration,
          iterationCount: iterationCount,
          timingFunction: timingFunction,
          trigger: trigger,
      };

      currentDiv.animations.splice(index, 1, updatedAnimation);
      setItem(newItem);

      // Save the updated item to local storage
      const draftData = JSON.parse(localStorage.getItem('draft') || '{}');
      localStorage.setItem('draft', JSON.stringify({
          ...draftData,
          item: newItem
      }));
  }

  setEditing(false);
  setAnimationStatus(false);
}

const currentDiv = item[slideIndex].landscape.divs?.find((div) => div.id === selectedDiv);

  return (
    <>
      {(() => {
  
  if (currentDiv && currentDiv.animations && currentDiv.animations.length === 0 && !animationStatus && !edit) {
    return (
      <div className="absolute z-[2000] right-0 bg-white text-black flex flex-col items-center gap-4 p-4 top-[50%] translate-y-[-40%] rounded-xl shadow-xl w-[300px] h-auto">
        <button onClick={onClick} className="self-end">
            <IoCloseCircleOutline size={24} color="red" />
          </button>
          <div>No Animations Currently</div>
        <button onClick={() => setAnimationStatus(true)}><IoMdAddCircle size={60} color="purple" /></button>
        <div>Add Animations</div>
      </div>
    );
  } else if (currentDiv && !edit) { 
    return (
      <div className="absolute z-[2000] right-0 bg-white text-black flex flex-col gap-4 p-4 top-[50%] translate-y-[-40%] rounded-xl shadow-xl w-[300px] h-auto">
        <button onClick={onClick} className="self-end">
            <IoCloseCircleOutline size={24} color="red" />
          </button>
        {currentDiv.animations?.map((div, index) => (
          <div className="flex justify-between" key={index}>
            <div>Animation - {index + 1}</div>
            <div className="cursor-pointer" onClick={() => {handleEdit(div), setEditIndex(index)}}><FaEdit size={24} color="purple" /></div>
          </div>
        ))}
        <hr />
        <div className="flex flex-col items-center" onClick={() => setAnimationStatus(true)}>
          <button><IoMdAddCircle size={60} color="purple" /></button>
          <div>Add new Animation</div>
        </div>
        
      </div>
    );
  }
})()}

      
      {!edit && animationStatus && (
        <div className="absolute z-[2000] right-0 bg-white text-black flex flex-col gap-4 p-4 top-[50%] translate-y-[-40%] rounded-xl shadow-xl w-[300px] h-auto">
          <button onClick={onClick} className="self-end">
            <IoCloseCircleOutline size={24} color="red" />
          </button>
  
          <div>
            <h4 className="text-lg font-semibold mb-2">Animations</h4>
            <div className="flex flex-wrap gap-4">
              <div className="flex flex-col items-center gap-2">
                <button
                  className={`animation-option ${
                    animationType === "none" && "selected"
                  }`}
                  onClick={() => {
                    setAnimationType("none");
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-lg border border-gray-300"
                    style={{ boxShadow: "rgba(0, 0, 0, 0.3) 0em 0.3em 0.8em" }}
                  ></div>
                  <h4 className="text-sm mt-1">None</h4>
                </button>
              </div>
              {Object.values(data).map((category, index) => (
                <div key={index} className="flex flex-col items-center gap-2">
                  <button
                    className={`animation-option ${
                      animationType === category.name && "selected"
                    }`}
                    onClick={() => {
                      setAnimationType(category.name);
                      setSelectedCategory(category);
                      console.log(category, category.name);
                    }}
                  >
                    <div
                      className="w-10 h-10 rounded-lg border border-gray-300"
                      style={{
                        boxShadow: "rgba(0, 0, 0, 0.3) 0em 0.3em 0.8em",
                      }}
                    ></div>
                    <h4 className="text-sm mt-1">{category.name}</h4>
                  </button>
                </div>
              ))}
              <div className="flex flex-col items-center gap-2">
                <button
                  className="animation-option"
                  onClick={() => setEdit(true)}
                >
                  <div
                    className="w-10 h-10 rounded-lg border border-gray-300 flex items-center justify-center"
                    style={{ boxShadow: "rgba(0, 0, 0, 0.3) 0em 0.3em 0.8em" }}
                  >
                    <IoAddCircleOutline size={24} color="black" />
                  </div>
                  <h4 className="text-sm mt-1">Add</h4>
                </button>
              </div>
            </div>
          </div>
          <div className="mb-4">
            <h4 className="text-lg font-semibold mb-2">Delay</h4>
            <input
  type="number"
  step="0.01"
  value={delay}
  className="border border-gray-300 rounded px-2 py-1 focus:outline-none focus:border-blue-500"
  onChange={(e) => {
    setDelay(parseFloat(e.target.value));
  }}
/>
          </div>
          <div className="mb-4">
            <h4 className="text-lg font-semibold mb-2">Duration</h4>
            <input
              type="number"
              value={duration}
              className="border border-gray-300 rounded px-2 py-1 focus:outline-none focus:border-blue-500"
              onChange={(e) => {
                setDuration(parseFloat(e.target.value));
              }}
            />
          </div>
          <div className="mb-4">
            <h4 className="text-lg font-semibold mb-2">Direction</h4>
            <select
              value={direction}
              className="border border-gray-300 rounded px-2 py-1 focus:outline-none focus:border-blue-500"
              onChange={(e) => {
                setDirection(e.target.value);
              }}
            >
              <option value="normal">Normal</option>
              <option value="reverse">Reverse</option>
              <option value="alternate">Alternate</option>
              <option value="alternate-reverse">Alternate Reverse</option>
            </select>
          </div>
          <div className="mb-4">
            <h4 className="text-lg font-semibold mb-2">Iteration Count</h4>
            <input
              type="number"
              value={iterationCount}
              className="border border-gray-300 rounded px-2 py-1 focus:outline-none focus:border-blue-500"
              onChange={(e) => {
                setIterationCount(parseInt(e.target.value));
              }}
            />
          </div>
          <div className="mb-4">
            <h4 className="text-lg font-semibold mb-2">Timing Function</h4>
            <select
              value={timingFunction}
              className="border border-gray-300 rounded px-2 py-1 focus:outline-none focus:border-blue-500"
              onChange={(e) => {
                setTimingFunction(e.target.value);
              }}
            >
              <option value="ease">Ease</option>
              <option value="linear">Linear</option>
              <option value="ease-in">Ease In</option>
              <option value="ease-out">Ease Out</option>
              <option value="ease-in-out">Ease In Out</option>
            </select>
          </div>
          <div className="mb-4">
            <h4 className="text-lg font-semibold mb-2">Fill Mode</h4>
            <select
              value={fillMode}
              className="border border-gray-300 rounded px-2 py-1 focus:outline-none focus:border-blue-500"
              onChange={(e) => {
                setFillMode(e.target.value);
              }}
            >
              <option value="none">None</option>
              <option value="forwards">Forwards</option>
              <option value="backwards">Backwards</option>
              <option value="both">Both</option>
            </select>
          </div>
          <div className="mb-4">
            <h4 className="text-lg font-semibold mb-2">Trigger</h4>
            <select
              value={trigger}
              className="border border-gray-300 rounded px-2 py-1 focus:outline-none focus:border-blue-500"
              onChange={(e) => {
                setTrigger(e.target.value);
              }}
            >
              <option value="mount">Mount</option>
              <option value="hover">Hover</option>
              <option value="click">Click</option>
              {customActions?.map((action) => (
                <option value={action}>{action}</option>
              ))}
              {customCallbacks.map((action) => (
                <option value={action}>{action}</option>
              ))}
            </select>
          </div>

          <div className="mb-4">
            <h4 className="text-lg font-semibold mb-2">Add Custom Callback</h4>
            <input
              type="text"
              value={customCallback}
              onChange={(e) => setCustomCallback(e.target.value)}
              placeholder="Enter custom callback"
              className="border border-gray-300 rounded px-2 py-1 focus:outline-none focus:border-blue-500"
            />
            <button
              onClick={handleAddCustomCallback}
              className="bg-purple-500 text-white p-2 rounded mt-2"
            >
              Add
            </button>
          </div>

          <div className="mb-4">
            <h4 className="text-lg font-semibold mb-2">Callback</h4>
            <select
              value={callback}
              className="border border-gray-300 rounded px-2 py-1 focus:outline-none focus:border-blue-500"
              onChange={(e) => {
                setCallback(e.target.value);
              }}
            >
              {customCallbacks.map((action) => (
                <option value={action}>{action}</option>
              ))}
            </select>
          </div>
          
          <div className="flex justify-center mb-4">
          {!editing ?  <button className="bg-[#800080] hover:bg-[#a64ca6] text-white rounded-lg p-4" onClick={() => handleDivValue(selectedDiv)}><strong>Submit<strong /></strong></button> : <button className="bg-[#800080] hover:bg-[#a64ca6] text-white rounded-lg p-4" onClick={() => handleSave(selectedDiv, editIndex)}><strong>Save</strong></button>}

            
          </div>
        </div>
)}
{ edit && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-80 overflow-auto">
          <Edit
            edit={edit}
            setEdit={setEdit}
            category={
              selectedCategory || {
                name: "new",
                animations: [
                  {
                    percent: 0,
                    opacity: 0,
                  },
                  {
                    percent: 100,
                    opacity: 1,
                  },
                ],
              }
            }
            data={data}
            setData={setData}
            duration={duration}
            delay={delay}
            direction={direction}
            iterationCount={iterationCount}
            fillMode={fillMode}
            timingFunction={timingFunction}
            prevName={selectedCategory?.name || ""}
          />
        </div>
      )}
    </>
  );
  
};

export default AnimationPanel;
