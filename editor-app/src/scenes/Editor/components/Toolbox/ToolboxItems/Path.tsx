import * as React from "react";
import useAppContext from "../../../../../hooks/useAppContext";
import Delete from "./components/Delete";
import Duplicate from "./components/Duplicate";
import Opacity from "./components/Opacity";
import Position from "./components/Position";
import Animate from "./components/Animate";
function Path() {
  const { setActiveSubMenu } = useAppContext();
  return (
    <div
      style={{
        flex: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 1rem",
      }}
    >
      <div>
        <Animate />
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Position />
        <Opacity />
        <Duplicate />
        <Delete />
      </div>
    </div>
  );
}

export default Path;
