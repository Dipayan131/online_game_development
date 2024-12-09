import fabric from "fabric/fabric-impl";
import { IEditorContext } from "../context/editor";
import Editor from "../Editor";
import Handlers from "../handlers";
import gsap from "gsap";

export interface FabricWheelEvent {
  e: WheelEvent;
  target?: Object | undefined;
  subTargets?: Object[] | undefined;
  button?: number | undefined;
  isClick?: boolean | undefined;
  pointer?: fabric.IPoint | undefined;
  absolutePointer?: fabric.IPoint | undefined;
  transform?:
    | {
        corner: string;
        original: Object;
        originX: string;
        originY: string;
        width: number;
      }
    | undefined;
}

// export interface RootHandlerOptions
export interface HandlerOptions {
  handlers: Handlers;
  context: IEditorContext;
  canvas: FabricCanvas;
  config: EditorConfig;
  editor: Editor;
  slideRef: any;
}
export interface IHandler {
  handlers: Handlers;
  context: IEditorContext;
  canvas: FabricCanvas;
  config: EditorConfig;
  editor: Editor;
  slideRef: any;
}

export interface RootHandlerOptions {
  appContext: any;
  slideRef: any;
  context: IEditorContext;
  canvas: FabricCanvas;
  config: EditorConfig;
  editor: Editor;
  items: any;
}

export interface IAppContext {
  isMobile: boolean | undefined;
  setIsMobile: React.Dispatch<React.SetStateAction<boolean>>;
  templates: Template[];
  setTemplates: (templates: Template[]) => void;
  shapes: any[];
  setShapes: (templates: any[]) => void;
  activePanel: any;
  setActivePanel: (option: any) => void;
  activeSubMenu: any | null;
  setActiveSubMenu: (option: any) => void;
  item: any;
  setItem: (item: any) => void;
  slideIndex: number;
  setSlideIndex: (index: number) => void;
}

export interface EditorOptions {
  context?: IEditorContext;
  canvas?: FabricCanvas;
  config?: EditorConfig;
  slideRef?: any;
  editor?: Editor;
  appContext?: IAppContext;
  items?: any;
}

// export interface EditorConfig {
//   config: {
//     clipToFrame: boolean
//     scrollLimit: number
//   }
// }

export interface CanvasOptions {
  width: number;
  height: number;
}

export interface FabricCanvasOption {
  wrapperEl: HTMLElement;
}

export type FabricCanvas<T extends any = fabric.Canvas> = T &
  FabricCanvasOption;

//  Template

export interface Template {
  id: string;
  name: string;
  preview: string;
  background: any;
  frame: {
    width: number;
    height: number;
  };
  objects: any[];
  metadata: {
    animated: boolean;
  };
}

export interface EditorConfig {
  item: any[];
  setItem: any;
  scale: number;
}

export interface GradientOptions {
  angle: number;
  colors: string[];
}

export interface ShadowOptions extends fabric.IShadowOptions {
  enabled: boolean;
}

// ANIMATIONS

export enum Animations {
  NONE = "NONE",
  STOMP = "STOMP",
  TUMBLE = "TUMBLE",
  RISE = "RISE",
  PAN = "PAN",
  FADE = "FADE",
  BREATHE = "BREATHE",
}
export type AnimationType = keyof typeof Animations;

// GIF RENDERER

interface BaseConfig {
  silent?: boolean;
}

type makeSceneFunction = (
  fabricInstance: typeof fabric,
  canvas: fabric.StaticCanvas,
  anim: gsap.core.Timeline,
  compose: () => void
) => void;

interface RenderedConfig extends BaseConfig {
  width: number;
  height: number;
  fps: number;
  makeScene: makeSceneFunction;
}

export type Renderer = (
  config: RenderedConfig
) => Promise<{ frames: string[]; frameDuration: number }>;
