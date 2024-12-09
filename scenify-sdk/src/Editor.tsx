import { EditorOptions } from "./common/interfaces";
import { IEditorContext } from "./context";
import Handlers from "./handlers";
import EventManager from "./EventManager";
import ZoomController from "./controllers/ZoomController";
import BackgroundController from "./controllers/BackgroundController";

class Editor extends EventManager {
  private handlers: Handlers;
  public context: IEditorContext | undefined;
  public zoom: ZoomController;
  public background: BackgroundController;
  public items: any;
  constructor(props: EditorOptions) {
    super();
    this.context = props.context;
    //@ts-ignore
    this.handlers = new Handlers({
      ...props,
      editor: this,
      context: this.context,
    });
    this.zoom = new ZoomController(this.handlers.zoomHandler);
    this.background = new BackgroundController(this.handlers.backgroundHandler);
    // this.canvas = new CanvasController(this.handlers.canvasHandler)
    // this.frame = new FrameController(this.handlers.frameHandler)
    // console.log('context from editor', props.context)
  }

  // BASIC FUNCTIONS

  public updataItems = (items: any) => {
    this.items = items;
  };

  // HISTORY
  public undo = () => {
    this.handlers.historyHandler.undo();
  };
  public redo = () => {
    this.handlers.historyHandler.redo();
  };

  public save = (item: any) => {
    this.handlers.historyHandler.save(item);
  };

  // ZOOM
  public zoomIn = () => {
    this.handlers.zoomHandler.zoomIn();
  };
  public zoomOut = () => {
    this.handlers.zoomHandler.zoomOut();
  };
  public zoomToOne = () => {
    this.handlers.zoomHandler.zoomToOne();
  };
  public zoomToFit = () => {
    this.handlers.zoomHandler.zoomToFit();
  };
  public zoomToRatio = (zoomRatio: number) => {
    this.handlers.zoomHandler.zoomToRatio(zoomRatio);
  };
  public test = (data: any) => {
    this.handlers.zoomHandler.test(data);
  };
  public updateData = () => {
    this.handlers.zoomHandler.updateData();
  };
}

export default Editor;
