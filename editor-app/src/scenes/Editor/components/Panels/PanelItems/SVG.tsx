import * as React from "react";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
// import { ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage";
import { Scrollbars } from "react-custom-scrollbars-2";
import { cloneDeep } from "lodash";
import { FaRegImages } from "react-icons/fa6";
import storage from "firebase_app/storage";
import { useStorageDataLinks } from "firebase_app/useFirebase";
import useSlide from "scenify_sdk/useSlide";
import useEditor from "scenify_sdk/useEditor";
import Loader from "slide_app/Loader";

function SVGUpload() {
  const { item, setItem, slideIndex } = useSlide();
  const editor = useEditor();
  const [svgFile, setSVGFile] = useState(null);
  // const [uploading, setUploading] = useState(false);
  // const [svgList, setSVGList] = useState([]);
  // const svgListRef = ref(storage, "svgs/");
  const { linkList, uploading, uploadData } = useStorageDataLinks("svgs/");

  const handleSVGChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setSVGFile(file);
    }
  };

  const handleSVGUpload = () => {
    uploadData(svgFile);
  };

  const setSVGToItems = (svgDiv) => {
    const updatedItem = cloneDeep(item);

    const newSlideData = { ...updatedItem[slideIndex] };

    if (!newSlideData.landscape) {
      newSlideData.landscape = { divs: [] };
    } else if (!Array.isArray(newSlideData.landscape.divs)) {
      newSlideData.landscape.divs = [];
    }

    newSlideData.landscape.divs.unshift(svgDiv);

    updatedItem[slideIndex] = newSlideData;

    const draftData = JSON.parse(localStorage.getItem("draft"));

    localStorage.setItem(
      "draft",
      JSON.stringify({ ...draftData, item: updatedItem })
    );
    setItem(updatedItem);
    editor.save(updatedItem);
  };

  const handleAddSVG = (e, svgUrl) => {
    console.log("svg div created");
    const svgDiv = {
      id: "svg-" + uuidv4(),
      imageUrl: svgUrl,
      styles: {
        minWidth: "10%",
        height: "30%",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      },
    };
    setSVGToItems(svgDiv);
  };

  // const checkfunction = () => {
  //   console.log("checking the click");
  // };

  return (
    <div style={{ display: "flex", height: "100%", flexDirection: "column" }}>
      <div style={{ padding: "2rem 2rem" }} className="flex gap-3 m-auto">
        <input
          type="file"
          accept=".svg"
          id="svg-upload"
          className="hidden"
          onChange={handleSVGChange}
        />
        <label htmlFor="svg-upload" className="cursor-pointer">
          <FaRegImages size={30} color="black" />
        </label>

        {uploading ? (
          <div className="w-[10rem]">
            <Loader type="sync" color="white" />
          </div>
        ) : (
          <button
            className="px-4 py-2 bg-[#000000] rounded-xl w-[10rem]"
            onClick={handleSVGUpload}
          >
            Upload SVG
          </button>
        )}
      </div>
      <div style={{ flex: 1 }}>
        <Scrollbars>
          <div
            style={{
              display: "grid",
              gap: "0.5rem",
              padding: "0 2rem 2rem",
              gridTemplateColumns: "1fr 1fr",
              zIndex: 501,
            }}
          >
            {linkList?.map((svg, index) => (
              <button
                onClick={(e) => handleAddSVG(e, svg.url)}
                key={index}
                style={{
                  position: "relative",
                  top: "0",
                  left: "0",
                  zIndex: 100,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    cursor: "pointer",
                    zIndex: "500",
                  }}
                  key={index}
                  className="svgElements"
                >
                  <img src={svg.url} alt={`SVG ${index}`} />
                </div>
              </button>
            ))}
          </div>
        </Scrollbars>
      </div>
    </div>
  );
}

export default SVGUpload;
