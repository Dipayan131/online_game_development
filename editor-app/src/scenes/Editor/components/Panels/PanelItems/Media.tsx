import React, { useState } from 'react';
import SVG from './SVG';
import ImagesUpload from './ImagesUpload';
import Images from './Images';
import { BsFiletypeSvg, BsImages } from "react-icons/bs";
import { IoMdImages } from "react-icons/io";

export default function Media() {
    const [activePanel, setActivePanel] = useState("SVG");

    const handleActivePanel = (value) => {
        setActivePanel(value);
    }

    return (
        <div style={{ display: "flex", height: "100%", flexDirection: "column" }}>
            <div className="bg-gray-200 h-16 flex justify-between text-black">
            <div
          onClick={() => handleActivePanel("SVG")}
          className={`w-1/2 flex justify-center items-center font-bold text-lg cursor-pointer ${
            activePanel === "SVG" ? "bg-gray-400 text-blue-800" : ""
          }`}
        >
          SVG
        </div>
        <div
          onClick={() => handleActivePanel("Images Upload")}
          className={`w-1/2 flex justify-center items-center font-bold text-lg cursor-pointer ${
            activePanel === "Images Upload" ? "bg-gray-400 text-blue-800" : ""
          }`}
        >
          Images
        </div>
                {/* <div className="flex justify-center items-center mr-3" onClick={() => handleActivePanel("Images")}><BsImages size={40} color={activePanel === "Images" ? "blue" : "black"} /></div> */}
            </div>
            <div style={{ flex: 1 }}>
                {activePanel === "SVG" && <SVG />}
                {activePanel === "Images Upload" && <ImagesUpload />}
                {activePanel === "Images" && <Images />}
            </div>
        </div>
    );
}
