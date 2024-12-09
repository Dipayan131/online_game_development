import {
  EditorConfig,
  FabricCanvas,
  HandlerOptions,
  IAppContext,
} from "../common/interfaces";
import Handlers from ".";
import { IEditorContext } from "../context";
import Editor from "../Editor";

class BaseHandler {
  protected canvas: FabricCanvas;
  protected handlers: Handlers;
  protected context: IEditorContext;
  protected config: EditorConfig;
  protected editor: Editor;
  protected slideRef: any;
  protected items: any;
  constructor({
    canvas,
    handlers,
    context,
    config,
    editor,
    slideRef,
  }: HandlerOptions) {
    this.canvas = canvas;
    this.handlers = handlers;
    this.context = context;
    this.config = config;
    this.editor = editor;
    this.slideRef = slideRef;
    document.addEventListener("updateData", (event: Event) => {
      const customEvent = event as CustomEvent;
      const eventData = customEvent.detail;
      this.items = eventData;
    });
  }
}
export default BaseHandler;
