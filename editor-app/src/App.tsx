import React from "react";
import { Routes, Route } from "react-router-dom";
import ScenifyEditor from "./ScenifyEditor";
import Preview from "../src/scenes/Editor/components/Navbar/Preview";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<ScenifyEditor />} />
      <Route path="/game/editor/preview" element={<Preview />} />
    </Routes>
  );
}
