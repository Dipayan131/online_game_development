import * as React from "react";
import Navbar from "./components/Navbar";
import Panels from "./components/Panels";
import Toolbox from "./components/Toolbox";
import Footer from "./components/Footer";
import SlidePanel from "./components/SlidePanel";
import DesignPanel from "./components/DesignPanel";
const Editor = React.lazy(() => import("scenify_sdk/Editor"));
import useSlide from "scenify_sdk/useSlide";

function App() {
  const {selectedDiv} = useSlide();

  return (
    <div
  style={{
    width: "100vw",
    height: "98vh",
    display: "flex",
    flexDirection: "column",
    fontFamily: "Uber Move Text",
    gap: "10px",
    // padding: "10px",
    background: "linear-gradient(90deg, rgba(255,0,232,1) 0%, rgba(139, 61, 255, 1) 50%, rgba(61, 80, 255, 1) 100%)",
  }}
>

      <Navbar />
      <div style={{ display: "flex", width: "100%" }}>
        <Panels />
        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            // maxWidth: "75%",
            flex: 1,
            height:"625px",
            width: "10px",
            backgroundColor:'#EBECF0'
          }}
        >
          <Toolbox />
          <Editor />
          <div className="p-2 border border-white rounded-xl max-w-[98%] z-700 flex-1 bg-white">
            <SlidePanel />
          </div>
          {selectedDiv && <DesignPanel />}
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
