import React, { useState, useEffect } from "react";
import KeyframeSlider from "../components/KeyframeSlider";
import "../index.css";
import { Animation,Category } from "../interfaces";
import TextArea from "../components/TextArea";



interface ElementsProps {
  edit: boolean;
  setEdit: React.Dispatch<React.SetStateAction<boolean>>;
  category: Category;
  data: { [key: string]: any };
  setData: React.Dispatch<React.SetStateAction<{ [key: string]: any }>>;
  duration: number;
  delay: number;
  timingFunction: string;
  direction: string;
  fillMode: string;
  iterationCount: number;
  prevName:string;
}

const Edit: React.FC<ElementsProps> = ({
  edit,
  setEdit,
  category,
  data,
  setData,
  duration,
  delay,
  timingFunction,
  direction,
  fillMode,
  iterationCount,
  prevName
}) => {
  const [categoryAnim, setCategoryAnim] = useState<Animation[]>(category.animations);
  const [newAnimationName, setNewAnimationName] = useState<string>(prevName);
  const [range, setRange] = useState<number>(0);



  useEffect(() => {
    document.documentElement.style.setProperty("--translate", `${range}%`);
  }, [range]);


  const handlePartitionClick = (percent: number) => {
    const textareaId = `textarea-${percent}`;
    const existingTextarea = document.getElementById(textareaId);
    if (!existingTextarea) {
      const newKeyFrame = { percent: percent };
      setCategoryAnim((prev) => {
        const updated = [...prev, newKeyFrame];
        return updated.sort((a, b) => a.percent - b.percent);
      });
    }
  };

  const handleRunAnimation = () => {
    const animationSection = document.querySelector(".animation-section") as HTMLElement | null;

    let keyframes = `@keyframes ${category.name} {`;
    for (let i = 0; i <= 100; i++) {
      const textareaId = `textarea-${i}`;
      const textareaValue = (document.getElementById(textareaId) as HTMLTextAreaElement)?.value || "{}";
      const keyframesPercent = JSON.parse(textareaValue);
      keyframes += `${i}% { ${Object.entries(keyframesPercent)
        .map(([key, value]) => `${key}: ${value};`)
        .join(" ")} }`;
    }

    keyframes += "}";

    const styleSheet = document.styleSheets[0];
    const existingIndex = Array.from(styleSheet.cssRules).findIndex(
      (rule) => {
        if (rule instanceof CSSKeyframesRule) {
          return rule.name === category.name;
        }
        return false;
      }
    );

    if (existingIndex !== -1) {
      styleSheet.deleteRule(existingIndex);
    }

    styleSheet.insertRule(keyframes, styleSheet.cssRules.length);

    if (category) {
      animationSection.style.animation = "none";
      setTimeout(() => {
        animationSection.style.animation = "";
        animationSection.style.animationName = category.name;
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

  const handleSaveClick = () => {
    if (newAnimationName === "") {
      alert("A name is required for your new animation!");
      return;
    }
    if (newAnimationName === prevName) {
      alert("An animation of this name already exists!");
      return;
    }
    let newAnimation: any = {};
    const newName = newAnimationName.split(" ").join("");
    newAnimation[newName] = {};
    newAnimation[newName]["name"] = newAnimationName;
    newAnimation[newName]["animations"] = [];
    let index = 0;
    for (let i = 0; i <= 100; i++) {
      const textareaId = `textarea-${i}`;
      const textareaValue = (document.getElementById(textareaId) as HTMLTextAreaElement)?.value || "{}";
      const keyframesPercent = JSON.parse(textareaValue);
      if (Object.keys(keyframesPercent).length !== 0) {
        newAnimation[newName]["animations"][index] = { percent: `${i}`, ...keyframesPercent };
        index++;
      }
    }
    console.log(newAnimation[newName]);
    setData({ ...data, ...newAnimation });
    setEdit(false);
  };

  return (
    <div className="container elements">
      <div className="page-heading"><h1>EDIT</h1></div>
      <div className="main-content">
        <div className="middle-section">
          <div className="animation-section">animate</div>
          <div className="btn">
            <button className="run-button" onClick={handleRunAnimation}>
              Run
            </button>
            <button className="run-button" onClick={handleSaveClick}>
              Save
            </button>
            <button className="run-button" onClick={() => { setEdit(false) }}>
              Cancel
            </button>
          </div>
        </div>
        <div className="textareas">
          <div className="heading">Key Frames</div>
          <br />
          <input className="new-animation-input" type="text" value={newAnimationName}
            onChange={(e) => { setNewAnimationName(e.target.value) }} placeholder="Name Your Animation" required />
          <br />
          {categoryAnim.map((c) => {
            return <TextArea name={c.percent} id={`textarea-${c.percent}`} content={c} categoryAnim={categoryAnim} setCategoryAnim={setCategoryAnim} key={c.percent} />
          })}
        </div>
      </div>
      <br />
      <p>Click to add Custom Styles!</p>
      <KeyframeSlider
        handlePartitionClick={handlePartitionClick}
        selectedCategory={category}
      />
    </div>
  );
};

export default Edit;
