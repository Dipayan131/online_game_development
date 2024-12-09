import * as React from "react";
// import { useEditorContext } from "../../../../../../../../scenify-sdk/src";
import useEditorContext from "scenify_sdk/useEditorContext";
import { styled } from "baseui";
import ToolboxItems from "./ToolboxItems";

interface ActiveObject {
  type: keyof typeof ToolboxItems;
}

const Container = styled("div", (props: { $theme: any }) => ({
  height: "56px",
  backgroundColor: "#F9F9F9",
  // backgroundColor: props.$theme.colors.background,
  boxShadow: "0px 1px 1px rgba(0, 0, 0, 0.15)",
  marginLeft: "1px",
  display: "flex",
}));

function EditorToolbox() {
  const { activeObject } = useEditorContext();
  const activeType = activeObject?.type as keyof typeof ToolboxItems;
  const Toolbox: React.FC | null = activeType
    ? (ToolboxItems[activeType] as React.FC)
    : null;
  return (
    <Container>{Toolbox ? <Toolbox /> : <ToolboxItems.Default />}</Container>
  );
}

export default EditorToolbox;
