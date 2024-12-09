import * as React from "react";
import { useState, useContext, useEffect } from "react";
import { IoCloseCircleOutline } from "react-icons/io5";
import {
  FaAlignLeft,
  FaAlignRight,
  FaAlignCenter,
  FaAlignJustify,
  FaUnderline,
  FaStrikethrough,
  FaItalic,
  FaTextHeight,
} from "react-icons/fa6";
import { BlockPicker } from "react-color";
// import { EditorContext } from "../../../../../../../../scenify-sdk/src";
// const EditorContext = React.lazy(() => import("scenify_sdk/EditorContext"));
import useSlide from "scenify_sdk/useSlide";
import { cloneDeep } from "lodash";

interface Props {
  onClick: () => void;
}
const SIZE = 25;
const COLOR = "#8b3dff";

export default function StylesPanel({ onClick }: Props) {
  const { item, setItem, slideIndex, selectedDiv } = useSlide();
  const [size, setSize] = useState(100);
  const [color, setColor] = useState("#000");
  const [fontFamily, setFontFamily] = useState("sans-serif");
  const [textTransform, setTextTransform] = useState("none");
  const [colorOpen, setColorOpen] = useState(false);
  const [fontWeight, setFontWeight] = useState(400);
  const [fontStyle, setFontStyle] = useState("normal");
  const [fontAlignment, setFontAlignment] = useState("center");
  const [opacity, setOpacity] = useState(1);
  const [opacityBlur, setOpacityBlur] = useState(true);
  const [textShadow, setTextShadow] = useState("");
  const handleStyleChange = (e: any) => {
    setSize(e.target.value);
  };
  const handleColorChange = (color: any, event: any) => {
    setColor(color.hex);
  };
  const [textDecoration, setTextDecoration] = useState("none");

  const handleDivValue = (id: string) => {
    const newItem = cloneDeep(item);
    const currentSlide = newItem[slideIndex];
    const { landscape } = currentSlide;
    const divs = landscape.divs;
    const currentDiv = divs?.find((div: any) => div.id === id);
    if (currentDiv) {
      currentDiv.styles = {
        ...currentDiv.styles,
        color,
        fontSize: (size ? size : 1) + "%",
        fontFamily,
        fontWeight,
        fontStyle,
        textAlign: fontAlignment,
        opacity,
        textShadow,
        textDecoration,
        textTransform,
      };
      const draftData = JSON.parse(localStorage.getItem("draft") as string);
      localStorage.setItem(
        "draft",
        JSON.stringify({ ...draftData, item: newItem })
      );
      setItem(newItem);
    }
  };

  const toggleTextDecoration = (decoration: string) => {
    setTextDecoration((prevDecoration) =>
      prevDecoration === decoration ? "none" : decoration
    );
  };

  const toggleTextTransform = (transform: string) => {
    setTextTransform((prevTransform) =>
      prevTransform === transform ? "none" : transform
    );
  };

  const toggleTextItalics = (italics: string) => {
    setFontStyle((prevfontStyle) =>
      prevfontStyle === italics ? "normal" : italics
    );
  };

  const handleSetInitialState = (id: any) => {
    const newItem = cloneDeep(item);
    const currentSlide = newItem[slideIndex];
    const { landscape } = currentSlide;
    const divs = landscape.divs;
    const currentDiv = divs?.find((div: any) => div.id === id);
    if (currentDiv) {
      const {
        fontSize,
        color,
        fontFamily,
        fontWeight,
        fontStyle,
        textAlign,
        opacity,
        textShadow,
        textDecoration,
        textTransform,
      } = currentDiv.styles;
      setSize(parseFloat(fontSize.replace("%", "")));
      setColor(color);
      setFontFamily(fontFamily);
      setFontWeight(fontWeight);
      setFontStyle(fontStyle);
      setFontAlignment(textAlign);
      setOpacity(opacity);
      setTextShadow(textShadow);
      setTextDecoration(textDecoration);
      setTextTransform(textTransform);
    }
  };

  const fontWeights = {
    cursive: [400, 700],
    "sans-serif": [400, 700],
    "system-ui": [200, 400, 500, 700],
  };

  const handleFontFamilyChange = (e: any) => {
    setFontFamily(e.target.value);
    setFontWeight(400); // Reset font weight to default when font family changes
  };

  useEffect(() => {
    handleSetInitialState(selectedDiv);
  }, [selectedDiv]);

  useEffect(() => {
    if (selectedDiv) {
      // handleSetInitialState(selectedDiv);
      handleDivValue(selectedDiv);
    }
  }, [
    size,
    color,
    fontFamily,
    fontWeight,
    fontStyle,
    fontAlignment,
    opacity,
    textShadow,
    textDecoration,
    textTransform,
  ]);

  return (
    <div className="absolute z-[2000] right-0 bg-white text-black flex flex-col gap-4 p-4 top-[50%] translate-y-[-50%] rounded-xl shadow-xl w-[300px] h-auto">
      <button onClick={onClick} className="self-end">
        <IoCloseCircleOutline size={24} title="Cross" color="red" />
      </button>

      <div className="mb-4 bg-gray-200 p-2 rounded-md">
        <h4 className="text-lg font-semibold mb-2">Text Style</h4>
        <select
          className="w-[70%] h-[28px] border border-gray-300 rounded px-2 py-1 focus:outline-none focus:border-blue-500"
          onChange={handleStyleChange}
          value={size}
        >
          <option value={150}>Title</option>
          <option value={100}>Heading</option>
          <option value={65}>Sub Heading</option>
          <option value={50}>Normal</option>
        </select>
      </div>
      <div className="mb-4 bg-gray-200 p-2 rounded-md">
        <h4 className="text-lg font-semibold mb-2">Font</h4>

        <div className="flex flex-col gap-3 ">
          <div className="flex gap-3 items-center">
            <select
              className="w-[70%] h-[28px] border border-gray-300 rounded px-2 py-1 focus:outline-none focus:border-blue-500"
              onChange={handleFontFamilyChange}
              value={fontFamily}
            >
              <option value="cursive">Cursive</option>
              <option value="sans-serif">Sans Serif</option>
              <option value="system-ui">System UI</option>
            </select>

            <input
              type="number"
              value={size}
              className="border border-gray-300 rounded px-2 py-1 focus:outline-none focus:border-blue-500 w-20"
              onChange={(e) => {
                setSize(parseFloat(e.target.value));
              }}
            />
          </div>

          <div className="flex gap-3 items-center">
            <div className="relative flex gap-3">
              <div
                className="w-6 h-6 rounded-full cursor-pointer"
                style={{ backgroundColor: color }}
                onClick={() => setColorOpen(!colorOpen)}
              ></div>
              {colorOpen && (
                <div className="absolute top-[100%] left-[50%] translate-x-[-50%] translate-y-[10px]">
                  <BlockPicker
                    onChangeComplete={handleColorChange}
                    color={color}
                  />
                </div>
              )}
            </div>

            <select
              className="w-[70%] h-[28px] border border-gray-300 rounded px-2 py-1 focus:outline-none focus:border-blue-500"
              onChange={(e) => {
                setFontWeight(parseInt(e.target.value));
              }}
              value={fontWeight}
            >
              {fontWeights[fontFamily].map((weight) => (
                <option
                  key={weight}
                  value={weight}
                  style={{ fontWeight: weight }}
                >
                  {weight === 100
                    ? "Ultra Thin"
                    : weight === 200
                    ? "Thin"
                    : weight === 400
                    ? "Normal"
                    : weight === 500
                    ? "Semibold"
                    : "Bold"}
                </option>
              ))}
            </select>

            <div className="flex gap-2">
              <button onClick={() => toggleTextItalics("italic")}>
                <FaItalic
                  size={24}
                  color={fontStyle === "italic" ? COLOR : "black"}
                />
              </button>
              <button onClick={() => toggleTextTransform("uppercase")}>
                <FaTextHeight
                  size={24}
                  color={textTransform === "uppercase" ? COLOR : "black"}
                />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-4 bg-gray-200 p-2 rounded-md">
        <h4 className="text-lg font-semibold mb-2">Text alignment</h4>
        <div className="flex flex-wrap gap-4">
          <button
            onClick={() => {
              setFontAlignment("left");
            }}
          >
            <FaAlignLeft size={24} />
          </button>
          <button
            onClick={() => {
              setFontAlignment("right");
            }}
          >
            <FaAlignRight size={24} />
          </button>
          <button
            onClick={() => {
              setFontAlignment("center");
            }}
          >
            <FaAlignCenter size={24} />
          </button>
          <button
            onClick={() => {
              setFontAlignment("justify");
            }}
          >
            <FaAlignJustify size={24} />
          </button>
        </div>
      </div>
      <div className="mb-4 bg-gray-200 p-2 rounded-md">
        <h4 className="text-lg font-semibold mb-2">Opacity</h4>
        <input
          type="range"
          min={0}
          max={1}
          value={opacity}
          step={0.01}
          onChange={(e) => {
            setOpacity(parseFloat(e.target.value));
          }}
        />
      </div>
      <div className="mb-4 bg-gray-200 p-2 rounded-md">
        <h4 className="text-lg font-semibold mb-2">Shadow</h4>
        <div className="flex gap-3 items-center">
          <button
            className={`flex flex-col items-center justify-center shadow-button ${textShadow === "none" && "selected"
              }`}
            onClick={() => setTextShadow("none")}
          >
            <div className="w-10 h-10 rounded-lg border-2 bg-white"></div>
            <h4>None</h4>
          </button>
          <button
            className={`flex flex-col items-center justify-center shadow-button ${textShadow === "0em 0.3em 0.8em rgba(0, 0, 0, 0.3)" && "selected"
              }`}
            onClick={() => setTextShadow("0em 0.3em 0.8em rgba(0, 0, 0, 0.3)")}
          >
            <div
              className="w-10 h-10 rounded-lg border-2 bg-white"
              style={{ boxShadow: "rgba(0, 0, 0, 0.3) 0em 0.3em 0.8em" }}
            ></div>
            <h4>Soft</h4>
          </button>
          <button
            className={`flex flex-col items-center justify-center shadow-button ${textShadow === "0.1em 0.2em 0.3em rgba(0, 0, 0, 0.3)" &&
              "selected"
              }`}
            onClick={() =>
              setTextShadow("0.1em 0.2em 0.3em rgba(0, 0, 0, 0.3)")
            }
          >
            <div
              className="w-10 h-10 rounded-lg border-2 bg-white"
              style={{ boxShadow: "rgba(0, 0, 0, 0.3) 0.1em 0.2em 0.3em" }}
            ></div>
            <h4>Regular</h4>
          </button>
          <button
            className={`flex flex-col items-center justify-center shadow-button ${textShadow === "0.2em 0.2em 0em rgba(0, 0, 0, 0.3)" && "selected"
              }`}
            onClick={() => setTextShadow("0.2em 0.2em 0em rgba(0, 0, 0, 0.3)")}
          >
            <div
              className="w-10 h-10 rounded-lg border-2 bg-white"
              style={{ boxShadow: "rgba(0, 0, 0, 0.3) 0.2em 0.2em 0em" }}
            ></div>
            <h4>Retro</h4>
          </button>
        </div>
      </div>
      <div className="mb-4 bg-gray-200 p-2 rounded-md">
        <h4 className="text-lg font-semibold mb-2">Text Decoration</h4>
        <div className="flex gap-4">
          <button onClick={() => toggleTextDecoration("underline")}>
            <FaUnderline
              size={24}
              color={textDecoration === "underline" ? COLOR : "black"}
            />
          </button>
          <button onClick={() => toggleTextDecoration("line-through")}>
            <FaStrikethrough
              size={24}
              color={textDecoration === "line-through" ? COLOR : "black"}
            />
          </button>
        </div>
      </div>
    </div>
  );
}
