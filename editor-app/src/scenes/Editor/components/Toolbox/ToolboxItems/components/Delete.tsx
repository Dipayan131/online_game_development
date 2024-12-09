import * as React from "react";
// import { useEditor } from '../../../../../../../../../../scenify-sdk/src';
import useEditor from "scenify_sdk/useEditor";
// const useEditor = React.lazy(() => import("scenify_sdk/useEditor"));
import { Button, SHAPE, KIND, SIZE } from "baseui/button";
import Icons from "../../../icons";

function Delete() {
  const editor = useEditor();
  return (
    <Button
      onClick={() => editor.delete()}
      size={SIZE.default}
      kind={KIND.tertiary}
      shape={SHAPE.square}
    >
      <Icons.Delete size={24} />
    </Button>
  );
}

export default Delete;
