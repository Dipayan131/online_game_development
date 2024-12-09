import { ObjectType } from "../common/constants";
import {
  CanvasOptions,
  GradientOptions,
  HandlerOptions,
} from "../common/interfaces";
import { angleToPoint } from "../utils/parser";
import BaseHandler from "./BaseHandler";
import { fabric } from "fabric";
import { cloneDeep } from "lodash";

class BackgroundHandler extends BaseHandler {
  public options: CanvasOptions = { width: 10, height: 10 };
  constructor(props: HandlerOptions) {
    super(props);
  }

  private getBackground = () => {
    return this.canvas
      ?.getObjects()
      .find((object: any) => object.type === ObjectType.BACKGROUND);
  };

  setSize = (options: any) => {
    const background = this.getBackground();
    if (background) {
      const { width, height } = options;
      background.set("width", width);
      background.set("height", height);
      background.center();
    }
  };

  private setToItems = (newDiv: any) => {
    // console.log(this.context.item)
    const updatedItem = cloneDeep(this.items);

    const newSlideData = { ...updatedItem[this.context?.slideIndex ?? 0] };

    if (!newSlideData.landscape) {
      newSlideData.landscape = { divs: [] };
    } else if (!Array.isArray(newSlideData.landscape.divs)) {
      newSlideData.landscape.divs = [];
    }

    const rootDivIndex = newSlideData.landscape.divs.findIndex(
      (div: any) => div.id === "root-div"
    );

    if (rootDivIndex !== -1) {
      newSlideData.landscape.divs[rootDivIndex].styles = {
        ...newSlideData.landscape.divs[rootDivIndex].styles,
        ...newDiv.styles,
      };
    } else {
      newSlideData.landscape.divs.push(newDiv);
    }

    updatedItem[this.context?.slideIndex ?? 0] = newSlideData;

    const draftData = JSON.parse(localStorage.getItem("draft") as string);

    localStorage.setItem(
      "draft",
      JSON.stringify({ ...draftData, item: updatedItem })
    );
    this.context?.setItem(updatedItem);
    this.editor?.save(updatedItem);
  };

  public setBackgroundColor = (color: string) => {
    const newDiv = {
      id: "root-div",

      styles: {
        backgroundColor: color,
      },
    };

    this.setToItems(newDiv);
  };

  public setGradient = ({ angle, colors }: GradientOptions) => {
    const background = this.getBackground();
    if (background) {
      this.setObjectGradient(background, angle, colors);
      this.canvas?.requestRenderAll();
      this.handlers?.historyHandler.save("background:gradient");
    }
  };

  public setHoverCursor = (cursor: string) => {
    const background = this.getBackground();
    if (background) {
      background.set("hoverCursor", cursor);
    }
  };

  private setObjectGradient = (
    object: fabric.Object,
    angle: number,
    colors: string[]
  ) => {
    const width = object.width ?? 0;
    const height = object.height ?? 0;

    let odx = width >> 1;
    let ody = height >> 1;
    let startPoint = angleToPoint(angle, width, height);
    let endPoint = {
      x: width - startPoint.x,
      y: height - startPoint.y,
    };

    object.set(
      "fill",
      new fabric.Gradient({
        type: "linear",
        coords: {
          x1: startPoint.x - odx,
          y1: startPoint.y - ody,
          x2: endPoint.x - odx,
          y2: endPoint.y - ody,
        },
        colorStops: [
          { offset: 0, color: colors[0] },
          { offset: 1, color: colors[1] },
        ],
      })
    );
  };
}

export default BackgroundHandler;
