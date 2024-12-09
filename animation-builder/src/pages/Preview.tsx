import React, { useState, useEffect } from "react";
import { data_new } from "../lib/data_new";
import "../index.css";
import 'primeicons/primeicons.css';
import MenuComponent from "../components/MenuComponent";
import InputComponent from "../components/InputComponent";
import CategoryButton from "../components/CategoryButton";
import Edit from "./Edit";
import {Animation,Category} from "../interfaces"



const AnimationPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [keyframe, setKeyframe] = useState<string | null>(null);
  const [data, setData] = useState<{ [key: string]: Category }>(data_new);
  const [edit, setEdit] = useState(false);
  const [range, setRange] = useState(0);
  const [duration, setDuration] = useState(4);
  const [timingFunction, setTimingFunction] = useState("ease");
  const [delay, setDelay] = useState(0);
  const [iterationCount, setIterationCount] = useState(1);
  const [direction, setDirection] = useState("normal");
  const [fillMode, setFillMode] = useState("none");


  const handleDurationChange = (increment: boolean) => {
    const newDuration = Math.max(duration + (increment ? 0.1 : -0.1), 0);
    setDuration(newDuration);
  };

  const handleDelayChange = (increment: boolean) => {
    const newDelay = Math.max(delay + (increment ? 0.1 : -0.1), 0);
    setDelay(newDelay);
  };

  const handleIterationCountChange = (increment: boolean) => {
    const newCount = Math.max(iterationCount + (increment ? 1 : -1), -1);
    setIterationCount(newCount);
  };

  useEffect(() => {
    document.documentElement.style.setProperty("--translate", `${range}%`);
  }, [range]);

  useEffect(() => {
    const animationSection = document.querySelector(".animation-section") as HTMLElement | null;
    if (selectedCategory) {
      animationSection.style.animationName = selectedCategory.name;

      animationSection.style.animationDuration = `${duration}s`;
      animationSection.style.animationTimingFunction = timingFunction;
      animationSection.style.animationDelay = `${delay}s`;
      animationSection.style.animationIterationCount =
        iterationCount === -1 ? "infinite" : iterationCount.toString();
      animationSection.style.animationDirection = direction;
      animationSection.style.animationFillMode = fillMode;
    }
  }, [
    selectedCategory,
    duration,
    timingFunction,
    delay,
    iterationCount,
    direction,
    fillMode,
  ]);

  // const handleElementClick = (element: Category) => {
  //   console.log("KFA", keyframesAdded);
  //   for (let i = 1; i < 100; i++) {
  //     if (!keyframesAdded.has(i)) {
  //       const textareaId = `textarea-${i}`;
  //       const existingTextarea = document.getElementById(textareaId) as HTMLTextAreaElement | null;
  //       if (existingTextarea) {
  //         (existingTextarea.parentNode as HTMLElement).remove();
  //       }
  //     }
  //   }

  //   setSelectedElement(element);
  //   const animations = element.animations || [];
  //   (document.getElementById("1") as HTMLTextAreaElement).value = JSON.stringify(
  //     animations[0] || {},
  //     null,
  //     2
  //   );
  //   (document.getElementById("2") as HTMLTextAreaElement).value = JSON.stringify(
  //     animations[1] || {},
  //     null,
  //     2
  //   );

  //   const newKeyframesAdded = new Set<number>();
  //   newKeyframesAdded.add(0);
  //   newKeyframesAdded.add(100);
  //   setKeyframesAdded(newKeyframesAdded);
  // };

  const handleCategoryClick = (category: Category) => {
    setSelectedCategory(category);
    let keyFrameText = `@keyframes ${category.name} { `;
    const animations = category.animations;
    animations.forEach((animation) => {
      for (const property in animation) {
        if (property === "percent") {
          keyFrameText += `${animation[property]}% {`;
        } else {
          keyFrameText += `${property}:${animation[property]};`;
        }
      }
      keyFrameText += "} ";
    });
    keyFrameText += "}";
    console.log(keyFrameText);
    setKeyframe(keyFrameText);
  };

  const handleRunAnimation = () => {
    if (!selectedCategory) {
      alert("Select an animation to run!");
      return;
    }
    console.log(selectedCategory.name);
    const animationSection = document.querySelector(".animation-section") as HTMLElement | null;
    const styleSheet = document.styleSheets[0];
    const existingIndex = Array.from(styleSheet.cssRules).findIndex(
      (rule) => {
        if (rule instanceof CSSKeyframesRule) {
          return rule.name === selectedCategory.name;
        }
        return false;
      }
    );

    if (existingIndex !== -1) {
      styleSheet.deleteRule(existingIndex);
    }

    styleSheet.insertRule(keyframe!, styleSheet.cssRules.length);

    if (selectedCategory) {
      animationSection.style.animation = "none";
      setTimeout(() => {
        animationSection.style.animation = "";
        animationSection.style.animationName = selectedCategory.name;
        animationSection.style.animationDuration = `${duration}s`;
        animationSection.style.animationTimingFunction = timingFunction;
        animationSection.style.animationDelay = `${delay}s`;
        animationSection.style.animationIterationCount =
          iterationCount === -1 ? "infinite" : iterationCount.toString();
        animationSection.style.animationDirection = direction;
        animationSection.style.animationFillMode = fillMode;
      }, 10);
    }
  };

  const handleEditClick = () => {
    if (!selectedCategory) {
      alert("Select an animation to edit!");
      return;
    }
    setEdit(true);
  };

  return (
    <>
      {!edit && <div className="container elements">
        <div className="page-heading"><h1>PREVIEW</h1></div>
        <div className="main-content-preview">
          <div className="left-section">
            <div className="heading">Control Keyframes Execution Flow</div>
            <br />
            <div className="duration">
              <InputComponent name="duration" value={duration} setFunction={handleDurationChange} />
            </div>
            <div className="delay">
              <InputComponent name="delay" value={delay} setFunction={handleDelayChange} />
            </div>
            <div className="iteration-count">
              <InputComponent name="iteration-count" value={iterationCount} setFunction={handleIterationCountChange} />
            </div>
            <div className="timing">
              <MenuComponent name="timing-function" value={timingFunction} setFunction={setTimingFunction} menuItems={["linear", "ease-in", "ease-out", "ease"]} />
            </div>
            <div className="direction">
              <MenuComponent name="direction" setFunction={setDirection} menuItems={["normal", "reverse", "alternate", "alternate-reverse"]} value={direction} />
            </div>
            <div className="fill-mode">
              <MenuComponent name="fill-mode" value={fillMode} setFunction={setFillMode} menuItems={["none", "forwards", "backwards", "both"]} />
            </div>
          </div>
          <div className="middle-section">
            <div className="animation-section">animate</div>
            <div className="btn">
              <button className="run-button" onClick={handleRunAnimation}>
                Run
              </button>
              <button className="run-button" onClick={handleEditClick}>
                Edit
              </button>
            </div>
          </div>
          <div className="right-section">
            <div className="heading">Animations</div>
            <br />
            <div className="category-buttons">
              {Object.keys(data).map((category, index) => {
                return <CategoryButton key={index} category={data[category]} selectedCategory={selectedCategory} handleCategoryClick={handleCategoryClick} />
              })}
            </div>
          </div>
        </div>
      </div>}
      {edit && <Edit edit={edit} setEdit={setEdit} category={selectedCategory}
        data={data} setData={setData} duration={duration} delay={delay} direction={direction}
        iterationCount={iterationCount} fillMode={fillMode} timingFunction={timingFunction} prevName={selectedCategory.name}/>}
    </>
  );
};

export default AnimationPage;
