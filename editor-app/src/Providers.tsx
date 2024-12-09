import * as React from "react";
import { FC } from "react";
import { Client as Styletron } from "styletron-engine-atomic";
import { Provider as StyletronProvider } from "styletron-react";
import { LightTheme, BaseProvider } from "baseui";
// import { EditorProvider } from "../../../../scenify-sdk/src";
const EditorProvider = React.lazy(() => import("scenify_sdk/EditorProvider"));
const DataProvider = React.lazy(() => import("firebase_app/DataProvider"));

import { AppProvider } from "./contexts/AppContext";
const engine = new Styletron();

const Providers: any = ({ children }: any) => {
  return (
    <StyletronProvider value={engine}>
      <DataProvider>
        <EditorProvider>
          <BaseProvider theme={LightTheme}>
            <AppProvider>{children}</AppProvider>
          </BaseProvider>
        </EditorProvider>
      </DataProvider>
    </StyletronProvider>
  );
};

export default Providers;
