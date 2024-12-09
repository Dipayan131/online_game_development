import { fabric } from "fabric";
import BaseHandler from "./BaseHandler";
import shourcutsManager from "../utils/shourcutsManager";
import { HandlerOptions } from "../common/interfaces";
import { ObjectType } from "../common/constants";

class EventsHandler extends BaseHandler {
  private zoomerContainer = document.getElementById("zoomer-container");
  private scale;
  private element;
  constructor(props: HandlerOptions) {
    super(props);
    this.scale = this.config?.scale ?? 1;
    this.element = this.slideRef.current;
    this.initialize();
  }

  initialize() {
    this.element?.addEventListener(
      "mousedown",
      this.onMouseDown.bind(this),
      false
    );
    // this.element?.addEventListener('mouseup', this.onMouseUp.bind(this), false);
    // this.element?.addEventListener('mouseout', this.onMouseOut.bind(this), false)
    this.zoomerContainer?.addEventListener(
      "wheel",
      this.onMouseWheel.bind(this),
      false
    );
    this.zoomerContainer?.addEventListener(
      "keydown",
      this.onKeyDown.bind(this),
      false
    );
    // this.element?.addEventListener('key')
  }

  destroy() {
    this.element?.removeEventListener("mousedown", this.onMouseDown.bind(this));
    // this.element?.removeEventListener('mouseup', this.onMouseUp.bind(this));
    // this.element?.removeEventListener('mouseout', this.onMouseOut.bind(this))
    this.zoomerContainer?.removeEventListener(
      "wheel",
      this.onMouseWheel.bind(this)
    );
    this.zoomerContainer?.removeEventListener(
      "keydown",
      this.onKeyDown.bind(this)
    );
  }
  onMouseDown = (e: fabric.IEvent) => {
    // console.log('mouse is down in eventhandlers')
  };

  onMouseWheel(event: WheelEvent) {
    if (event.ctrlKey) {
      this.handleZoom(event);
    }
  }

  handleZoom = (event: any) => {
    event.preventDefault();
    const delta = event.deltaY * -0.002;
    this.scale += delta;
    this.scale = Math.min(Math.max(0.125, this.scale), 4);
    this.element.style.transition = "transform 0.1s linear";
    this.element.style.transform = `scale(${this.scale})`;
    this.context?.setZoomRatio(this.scale);
  };

  onKeyDown(event: any) {
    if (shourcutsManager.isCtrlZero(event)) {
      event.preventDefault();
      this.handlers.zoomHandler.zoomToFit();
    } else if (shourcutsManager.isCtrlMinus(event)) {
      event.preventDefault();
      this.handlers.zoomHandler.zoomIn();
    } else if (shourcutsManager.isCtrlEqual(event)) {
      event.preventDefault();
      this.handlers.zoomHandler.zoomOut();
    } else if (shourcutsManager.isCtrlOne(event)) {
      event.preventDefault();
      this.handlers.zoomHandler.zoomToOne();
    } else if (shourcutsManager.isCtrlZ(event)) {
      this.handlers.historyHandler.undo();
    } else if (shourcutsManager.isCtrlShiftZ(event)) {
      this.handlers.historyHandler.redo();
    } else if (shourcutsManager.isCtrlY(event)) {
      this.handlers.historyHandler.redo();
    }
  }
}

export default EventsHandler;
