import * as React from "react";
import useAppContext from "../../../../hooks/useAppContext";
// import { useEditorContext } from '../../../../../../../../scenify-sdk/src';
// const IconView = React.lazy(() => import("slide_app/IconView"));
import EditorContext from "scenify_sdk/EditorContext";
import { styled } from "baseui";
import { useEffect } from "react";
import PanelItems from "./PanelItems";
import useEditorContext from "scenify_sdk/useEditorContext";
import { AppContext } from "@/contexts/AppContext";

const Container = styled("div", (props) => ({
  // background: '#ffffff',
  // backgroundColor: "black",
  width: "360px",
  flex: "none",
  boxShadow: "1px 0px 1px rgba(0, 0, 0, 0.15)",
  height: "100%",
  background: "#FAFAFA"
}));

function PanelsList() {
  const { activePanel, activeSubMenu, setActiveSubMenu } = useAppContext();
  const { activeObject } = useEditorContext();
  const {panelStatus} = useAppContext();

  useEffect(() => {
    if (!activeObject) {
      setActiveSubMenu(null);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeObject]);

  const Component =
    activeObject && activeSubMenu
      ? PanelItems[activeSubMenu]
      : PanelItems[activePanel];

  return(<>
  {panelStatus && <Container>{Component && <Component />}</Container>}
  </>
) 
}

export default PanelsList;
