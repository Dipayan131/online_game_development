import "react-app-polyfill/ie11";
import Providers from "./Providers";
import Editor from "./scenes/Editor";
import Container from "./Container";
import React from "react";
import { Router } from "react-router-dom";

const ScenifyEditor = () => {
  return (
    <Providers>
      <Container>
        <Editor />
      </Container>
    </Providers>
  );
};

export default ScenifyEditor;
