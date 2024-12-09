import React, { useState } from "react";
import Templates from "./Templates";
import Background from "./Background";
import { HiTemplate } from "react-icons/hi";
import { PiSelectionBackgroundFill } from "react-icons/pi";

export default function Design() {
  const [activePanel, setActivePanel] = useState("Template");

  const handleActivePanel = (value: string) => {
    setActivePanel(value);
  };

  return (
    <div className="flex flex-col h-full text-black">
      <div className="bg-gray-200 h-16 flex justify-between">
        <div
          onClick={() => handleActivePanel("Template")}
          className={`w-1/2 flex justify-center items-center font-bold text-lg cursor-pointer ${
            activePanel === "Template" ? "bg-gray-400 text-blue-800" : ""
          }`}
        >
          Template
        </div>
        <div
          onClick={() => handleActivePanel("Background")}
          className={`w-1/2 flex justify-center items-center font-bold text-lg cursor-pointer ${
            activePanel === "Background" ? "bg-gray-400 text-blue-800" : ""
          }`}
        >
          Background
        </div>
      </div>

      <div className="flex-1">
        {activePanel === "Template" && <Templates />}
        {activePanel === "Background" && <Background />}
      </div>
    </div>
  );
}
