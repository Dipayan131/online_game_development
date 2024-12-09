import React, { Suspense } from "react";
import "./App.css";
import mockData from "./db";

// const Nav = React.lazy(() => import("app0_r1/Nav"));

// const Kylo = React.lazy(() => import("app1_r1/Kylo"));
// const React3 = React.lazy(() => import("app3/Button"));
// const React5 = React.lazy(() => import("app5/App5"));
const CommonContainer = React.lazy(() => import("viewApp/CommonContainer"));
const ViewContainer = React.lazy(() => import("viewApp/ViewContainer"));

// const CounterAppOne = React.lazy(() => import("app2_r1/Button"));
// const Next0 = React.lazy(() => import("app0_n1/Component"));
// const Next1= React.lazy(() => import("app1_n1/Component"));
// const Next2= React.lazy(() => import("app2_n1/Component"));
// const NextHost= React.lazy(() => import("next_host/NextHost"));
function App() {
  return (
    <>
      <div className="Text Host-Container">
        This is the React container App hosted at localhost:3000
        {/* <div className="child">
          <React3 />>
        </div> */}
        <div className="child">
          <ViewContainer items={mockData?.item} />
        </div>
        {/* <div className="child">
          <CommonContainer mockData={mockData} />
        </div> */}
        {/* <div className="child">
          <React5 />
        </div> */}
        {/* <div className="child">
          <Nav></Nav>
        </div> */}
        {/* <div className="child">
          <Kylo className="child"></Kylo>
        </div> */}
        {/* <div className="child">
          <CounterAppOne className="child" />
        </div> */}
        {/* <div className="child">
          <Next0 />
        </div> */}
        {/* 
        <div className="child">
          <Next1 />
        </div>
        <div className="child">
          <Next2 />
        </div> */}
        {/* <div className="child">
          <NextHost />
        </div> */}
      </div>
    </>
  );
}

export default App;
