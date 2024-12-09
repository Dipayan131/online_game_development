import * as React from "react";
import { Scrollbars } from "react-custom-scrollbars-2";
import { useState, useContext } from "react";
import { cloneDeep } from "lodash";
import EditorContext from "scenify_sdk/EditorContext";
import { Input } from "@/components/shared/baseui";

const fontCombinations = [
  {
    id: "combo1",
    name: "Five Tips",
    styles: {
      fontFamily: "Georgia, serif",
      fontSize: "2rem",
      color: "red",
      fontWeight: "bold",
    },
  },
  {
    id: "combo2",
    name: "Power Workout",
    styles: {
      fontFamily: "Arial, sans-serif",
      fontSize: "2.5rem",
      color: "yellow",
      fontWeight: "bold",
      textShadow: "2px 2px 4px #000000",
    },
  },
  {
    id: "combo3",
    name: "Parken & Maise",
    styles: {
      fontFamily: "'Playfair Display', serif",
      fontSize: "2rem",
      color: "#2E2E2E",
      fontWeight: "bold",
    },
  },
  {
    id: "combo4",
    name: "Open Daily",
    styles: {
      fontFamily: "'Open Sans', sans-serif",
      fontSize: "1.5rem",
      color: "#FFA500",
      fontWeight: "bold",
      fontStyle: "italic",
    },
  },
  {
    id: "combo5",
    name: "Art or Not",
    styles: {
      fontFamily: "'Merriweather', serif",
      fontSize: "2rem",
      color: "#8B4513",
      fontWeight: "bold",
      textTransform: "uppercase",
    },
  },
  {
    id: "combo6",
    name: "Creative Bloom",
    styles: {
      fontFamily: "'Lobster', cursive",
      fontSize: "2rem",
      color: "#FF69B4",
      fontWeight: "bold",
    },
  },
  {
    id: "combo7",
    name: "Elegant Script",
    styles: {
      fontFamily: "'Great Vibes', cursive",
      fontSize: "2rem",
      color: "#2E8B57",
      fontWeight: "normal",
    },
  },
  {
    id: "combo8",
    name: "Modern Classic",
    styles: {
      fontFamily: "'Montserrat', sans-serif",
      fontSize: "2rem",
      color: "#000000",
      fontWeight: "bold",
      letterSpacing: "2px",
    },
  },
  {
    id: "combo9",
    name: "Vintage Style",
    styles: {
      fontFamily: "'Courier New', monospace",
      fontSize: "2rem",
      color: "#A52A2A",
      fontWeight: "bold",
      textDecoration: "underline",
    },
  },
  {
    id: "combo10",
    name: "Urban Graffiti",
    styles: {
      fontFamily: "'Bangers', cursive",
      fontSize: "2rem",
      color: "#FFD700",
      fontWeight: "bold",
      textShadow: "3px 3px 3px #000000",
    },
  },
];
function TextEnhanced() {
  const [text, setText] = useState("");
  //@ts-ignore
  const { editor, item, setItem, slideIndex } = useContext(EditorContext);

  function generateUniqueId() {
    const randomString = Math.random().toString(36).substr(2);
    const timestamp = new Date().getTime().toString(36);
    const uniqueId = randomString + timestamp;
    return uniqueId;
  }

  const handleText = (e: any) => {
    const newText = e.target.value;
    setText(newText);
  };

  const setTextToItems = (textDiv) => {
    const updatedItem = cloneDeep(item);
    const newSlideData = { ...updatedItem[slideIndex] };

    if (!newSlideData.landscape) {
      newSlideData.landscape = { divs: [] };
    } else if (!Array.isArray(newSlideData.landscape.divs)) {
      newSlideData.landscape.divs = [];
    }

    newSlideData.landscape.divs.unshift(textDiv);
    updatedItem[slideIndex] = newSlideData;

    const draftData = JSON.parse(localStorage.getItem("draft"));
    localStorage.setItem(
      "draft",
      JSON.stringify({ ...draftData, item: updatedItem })
    );
    // console.log("look here",updatedItem[slideIndex]);
    setItem(updatedItem);
    editor.save(updatedItem);
  };

  const handleAddText = (styles = {}) => {
    const textDiv = {
      text: text,
      id: "text-" + generateUniqueId(),
      styles: {
        color: "black",
        fontSize: "75%",
        ...styles,
      },
    };
    setTextToItems(textDiv);
  };

  return (
    <div style={{ display: "flex", height: "100%", flexDirection: "column", color: 'black' }}>
      <div style={{ padding: "2rem 2rem" }}>
        <Input
          value={text}
          onChange={handleText}
          placeholder="Add text"
          clearOnEscape
        />
        <button
          onClick={handleAddText}
          className=" my-4 px-4 py-2 border border-black rounded-xl w-full"
        >
          Add Text
        </button>
      </div>
      <div style={{ flex: 1 }}>
        <Scrollbars>
          <div
            style={{
              display: "grid",
              gridTemplateRows: "repeat(3, 50px)",
              padding: "0 2rem",
              gap: "0.5rem",
            }}
          >
            <div
              style={{
                display: "flex",
                paddingLeft: "1rem",
                fontSize: "1.66rem",
                alignItems: "center",
                background: "rgba(0,0,0,0.045)",
                fontWeight: 700,
                cursor: "pointer",
              }}
              onClick={() => handleAddText({ fontSize: "100%", fontWeight: "bold" })}
            >
              Add as heading
            </div>
            <div
              style={{
                display: "flex",
                paddingLeft: "1rem",
                fontSize: "1.12rem",
                alignItems: "center",
                background: "rgba(0,0,0,0.045)",
                fontWeight: 500,
                cursor: "pointer",
              }}
              onClick={() => handleAddText({ fontSize: "60%", fontWeight: "semibold" })}
            >
              Add as subheading
            </div>
            <div
              style={{
                display: "flex",
                paddingLeft: "1rem",
                fontSize: "0.76rem",
                alignItems: "center",
                background: "rgba(0,0,0,0.045)",
                fontWeight: 300,
                cursor: "pointer",
              }}
              onClick={() => handleAddText({ fontSize: "30%" })}
            >
              Add as paragraph
            </div>
            <h2 className="font-medium text-center text-1xl" >Font combinations</h2>
            {fontCombinations.map((combo) => (
              <div
                key={combo.id}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "130px",
                  background: "rgba(0,0,0,0.045)",
                  cursor: "pointer",
                  fontWeight: 300,
                  textAlign: "center",
                  padding: "1rem",
                  borderRadius: "8px",
                }}
                onClick={() => handleAddText(combo.styles)}
              >
                Add as paragraph
              </div>
            ))}
          </div>
        </Scrollbars>
      </div>
    </div>
  );
}

export default TextEnhanced;
