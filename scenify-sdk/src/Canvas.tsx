import * as React from "react";
const CommonView = React.lazy(() => import("slide_app/CommonView"));
// const useData = React.lazy(() => import("firebase_app/useData"));
import useData from "firebase_app/useData";
import { CSSProperties, useEffect, useState, useRef, useContext } from "react";
import { useParams } from "react-router-dom";
import Editor from "./Editor";
import { EditorContext } from "./context";
// import { useData } from "@/apps/game/contexts/DataContext.tsx";
import { useEditor, useSlide } from "./hooks";

const EditorPage = () => {
  // const { gameId } = useParams<{ gameId: string }>();
  const gameId = "adi-b2s-ery-s3d";
  const [state] = useState();
  const slideRef = useRef(null);
  // const { setEditor, setZoomRatio, editor } = useContext(EditorContext)
  const context = useContext(EditorContext);
  const { setEditor, setZoomRatio, editor } = context;
  const { item, setItem, slideIndex } = useSlide();
  const [currentSlide, setCurrentSlide] = useState(null);

  // console.log(slideIndex);

  const editorConfig = {
    scale: 0.7,
    item: item,
    setItem: setItem,
  };

  const { data } = useData("/games/" + gameId);

  const handlers = {};

  useEffect(() => {
    const draftData = JSON.parse(localStorage.getItem("draft") as string);
    if (data) {
      // console.log(data);
      if (draftData && draftData.id === gameId && draftData.item) {
        setItem(draftData.item);
        // setCurrentSlide(draftData.item[0]);
      } else {
        localStorage.setItem("draft", JSON.stringify(data));
        setItem(data.item);
        // setCurrentSlide(data.item[0]);
      }
    }
  }, [data, gameId]);

  useEffect(() => {
    if (item) setCurrentSlide(item[slideIndex]);
    console.log("item updated from canvas ", item);
  }, [item, slideIndex]);

  useEffect(() => {
    const editorTemp = new Editor({
      slideRef: slideRef,
      config: editorConfig,
      context: context,
      items: item,
    });

    setEditor(editorTemp);
    setZoomRatio(1);
  }, [slideIndex, gameId, data]);

  useEffect(() => {
    if (item) {
      document.dispatchEvent(new CustomEvent("updateData", { detail: item }));
    }
  }, [item, slideIndex, gameId, data]);

  useEffect(() => {
    const draftData = JSON.parse(localStorage.getItem("draft"));
    console.log("Items updated from canvas", item, draftData);
  }, [item]);

  const containerStyle: CSSProperties = {
    // flexGrow: 1,
    margin: "0",
    padding: "0",
    display: "flex",
    flexDirection: "column",
    // height: '100%', // 100% viewport height
    // width: '100%',
    overflow: "auto",
    alignItems: "center",
    justifyContent: "center",
  };

  // useEffect(() => {
  //   console.log("slideIndex is : ", slideIndex);
  //   if (item) setCurrentSlide(item[slideIndex]);
  // }, [slideIndex]);

  return (
    <div style={{ overflow: "hidden" }}>
      <div style={containerStyle}>
        <div
          className="slide-container"
          id="zoomer-container"
          style={{ width: "70%", height: "70%"}}
          tabIndex={-100}
          
        >
          <div
            ref={slideRef}
            className="slide"
            id="slide"
            style={{
              aspectRatio: "3/2",
              transform: "scale(0.7)",
              transition: "transform 0.03s ease",
              position: "relative",
            }}
          >
            {currentSlide ? (
              <CommonView
                viewType="FULLSCREEN"
                state={state}
                data={currentSlide}
                {...handlers}
                slideIndex={slideIndex}
                key={slideIndex}
                editable={true}
                // isCanvas={true}
                editorHooks={{
                  useSlide,
                  useEditor
                }}
              />
            ) : (
              "Loading..."
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditorPage;
