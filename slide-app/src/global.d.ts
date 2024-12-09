declare interface Answer {
  answer: AnswerData[];
  _correctAnswer: string;
}

declare interface PayloadWithValue {
  key: string;
  value: string;
}

interface RootStyle {
  FULLSCREEN: {
    width: string;
    height: string;
    position: "absolute";
    top: string;
    left: string;
    fontSize: string;
  };
  ICON: {
    width: string;
    aspectRatio: string;
    position: "absolute";
    top: string;
    left: string;
    fontSize: string;
  };
}

declare interface EditorState {
  initialTopPercent: number;
  initialLeftPercent: number;
  initialWidthPercent: number;
  initialHeightPercent: number;
  initialRotate: number;
  containerHeight: number;
  containerWidth: number;
  fontSize: string | number;
  isMouseUp: boolean;
}

declare interface AnswerData {
  _height: string;
  __cdata: string;
  _left: string;
  _top: string;
  _type: string;
  _width: string;
  __text?: string;
  _submit?: string;
  _fontSize: string;
}
declare interface question {
  __cdata: string;
  __text?: string;
  _type: string;
  _top?: string;
  _left?: string;
  _width?: string;
  _height?: string;
  _align?: string;
  _width?: string;
  _height?: string;
  _lineHeight?: string;
  _fontSize?: string;
}
declare interface Video {
  _type: string;
  __text: string;
}
declare interface Videos {
  video: Video;
  _autoplay: string;
  _controls: string;
  _embed: string;
  _left: string;
  _top: string;
}
declare interface Background {
  __text: string;
  _left: string;
  _top: string;
  _width: string;
}
declare interface group {
  _correctAnswer: string;
  _dropWidth: string;
  _dropHeight: string;
  _dropLeft: string;
  _dropTop: string;
  _dropMax: string;
  _top: string;
  _left: string;
  _width: string;
  _height: string;
  _type: string;
  _align: string;
  _dropOffLeft: string;
  _dropOffTop: string;
  __text: string;
  _fontSize: string;
}
declare interface Group {
  group: any | group[];
}
declare interface Explanation {
  __cdata?: string;
  _type?: string;
  _top?: string;
  _left?: string;
  _align?: string;
  _lineHeight?: string;
  _fontSize?: string;
  _color?: string;
}
declare interface LandscapeOrPortrait {
  answers: Answer;
  explanation: Explanation;
  inputs: any;
  question: question;
  videos: Videos;
  actions: any;
  background: Background;
  groups: Group;
}

declare interface Question {
  content?: any;
  category: string;
  landscape: landscape;
  portrait: any;
}

declare interface AppState {
  slide_number: any;
  category: string;
  questions: Question[] | any;
  score: number;
  questionIndex: number;
}

declare interface Action {
  slide_number: any;
  type: string;
  category: string;
  categoryQuestions: Question[];
}

interface Field {
  label: string;
  type: string;
  options?: string[];
  name: string;
}

interface EditOption {
  label: string;
  // function: () => void;
  name: string;
  fields: Field[];
}

// type HandleResizeFunction = (
//   editType: string,
//   parentRef: any,
//   childRef: React.RefObject<
//     HTMLDivElement | HTMLButtonElement | HTMLImageElement | HTMLVideoElement
//   >,
//   answerIndex?: number,
//   e?: React.DragEvent,

// ) => void;

type HandleResizeFunction = (
  editType: string,
  parentRef: any,
  width: number,
  height: number,
  e?: React.DragEvent,
  answerIndex?: number
) => void;

declare module "*.png";
declare module "*.svg";
declare module "*.jpeg";
declare module "*.jpg";

declare interface Answer {
  answer: AnswerData[];
  _correctAnswer: string;
}
declare interface AnswerData {
  _height: string;
  __cdata: string;
  _left: string;
  _top: string;
  _type: string;
  _width: string;
  __text?: string;
  _submit?: string;
  _fontSize: string;
}
declare interface question {
  __cdata: string;
  __text?: string;
  _type: string;
  _top?: string;
  _left?: string;
  _width?: string;
  _height?: string;
  _align?: string;
  _width?: string;
  _height?: string;
  _lineHeight?: string;
  _fontSize?: string;
}
declare interface Video {
  _type: string;
  __text: string;
}
declare interface Videos {
  video: Video;
  _autoplay: string;
  _controls: string;
  _embed: string;
  _left: string;
  _top: string;
}
declare interface Background {
  __text: string;
  _left: string;
  _top: string;
  _width: string;
}
declare interface group {
  _correctAnswer: string;
  _dropWidth: string;
  _dropHeight: string;
  _dropLeft: string;
  _dropTop: string;
  _dropMax: string;
  _top: string;
  _left: string;
  _width: string;
  _height: string;
  _type: string;
  _align: string;
  _dropOffLeft: string;
  _dropOffTop: string;
  __text: string;
  _fontSize: string;
}
declare interface Group {
  group: group[];
}
declare interface Explanation {
  __cdata?: string;
  _type?: string;
  _top?: string;
  _left?: string;
  _align?: string;
  _lineHeight?: string;
  _fontSize?: string;
  _color?: string;
}
declare interface LandscapeOrPortrait {
  answers?: Answer | any;
  explanation?: Explanation;
  inputs?: any;
  question?: question;
  videos?: Videos | any;
  background?: Background;
  groups?: Group | any;
}

declare interface Question {
  content?: any;
  category: string;
  landscape: landscape;
  portrait: any;
}

declare interface AppState {
  category: string;
  questions: Question[] | any;
  score: number;
  questionIndex: number;
}

declare interface Action {
  function: any;
  type: string;
  category: string;
  categoryQuestions: Question[];
}

interface Field {
  label: string;
  type: string;
  options?: string[];
  name: string;
}

interface EditOption {
  label: string;
  // function: () => void;
  name: string;
  fields: Field[];
}

// type HandleResizeFunction = (
//   editType: string,
//   parentRef: any,
//   childRef: React.RefObject<
//     HTMLDivElement | HTMLButtonElement | HTMLImageElement | HTMLVideoElement
//   >,
//   answerIndex?: number,
//   e?: React.DragEvent,

// ) => void;

type HandleResizeFunction = (
  editType: string,
  parentRef: any,
  childRef: React.RefObject<
    HTMLDivElement | HTMLButtonElement | HTMLImageElement | HTMLVideoElement
  >,
  answerIndex?: number,
  width: number,
  height: number,
  e?: React.DragEvent
) => void;

declare interface CategoryData {
  category: string;
  landscape: {
    answers?: Answer;
    explanation?: Explanation;
    inputs?: any;
    question?: question;
    videos?: Videos;
    background?: Background;
    groups?: Group;
  };
  portrait: {
    question: {
      __cdata: string;
    };
    answers: {
      answer: {
        __cdata: string;
      }[];
    };
  };
  // Add more properties based on your data structure
}

interface Answer {
  _type: string;
  _top?: string;
  _align?: string;
  _fontSize?: string;
  _lineHeight?: string;
  _height?: string;
  _width?: string;
  _left?: string;
  _submit?: string;
  __cdata?: string;
  __text?: string;
  _correctAnswer?: string;
  _drag?: string;
  _dropMax?: string;
  _dropWidth?: string;
  _dropHeight?: string;
  _dropLeft?: string;
  _dropTop?: string;
  _dropOffLeft?: string;
  _dropOffTop?: string;
  _offsetTop?: string;
  _color?: string;
  _audio?: string;
  _autoplay?: string;
  _controls?: string;
  _embed?: string;
}

interface Group {
  _correctAnswer: string;
  _dropMax: string;
  _dropWidth: string;
  _dropHeight: string;
  _dropLeft: string;
  _dropTop: string;
  _dropOffLeft: string;
  _dropOffTop: string;
}

interface Input {
  _type: string;
  _correctAnswer?: string;
  _top?: string;
  _align?: string;
  _fontSize?: string;
  _lineHeight?: string;
  _height?: string;
  _width?: string;
  _left?: string;
  _submit?: string;
  __cdata?: string;
  _color?: string;
}

interface Question {
  _type: string;
  _top?: string;
  _align?: string;
  _fontSize?: string;
  _lineHeight?: string;
  _audio?: string;
  __cdata?: string;
  __text?: string;
  style?: any;
}

interface Video {
  _type: string;
  __text: string;
}

interface Item {
  category: string;
  landscape: {
    question: Question;
    answers: {
      answer: Answer[];
      _correctAnswer: string;
      _drag: string;
    };
    groups?: {
      group: Group;
    };
    videos?: {
      video: Video;
    };
  };
  portrait: {
    question: Question;
    answers: {
      answer: Answer[];
      _correctAnswer: string;
      _drag: string;
    };
    groups?: {
      group: Group;
    };
    inputs?: {
      input: Input[];
    };
    explanation?: {
      _type: string;
      _fontSize: string;
      _lineHeight: string;
    };
  };
}

interface Animation {
  type: string;
  duration: number;
  delay: number;
  timingFunction: string;
  iterationCount: number;
  trigger: string;
}

interface Style {
  backgroundColor?: string;
  color?: string;
  top?: string;
  left?: string;
  width?: string;
  height?: string;
  borderRadius?: string;
  boxShadow?: string;
  WebkitBoxShadow?: string;
  MozBoxShadow?: string;
  zIndex?: string;
  transform?: string;
  fontFamily?: string;
  fontSize?: string;
  textAlign?: string;
  fontWeight?: string;
  margin?: string;
  border?: string;
}

interface Event {
  type: string;
  payload: string;
  trigger: string;
}

interface Text {
  id?: string;
  text: string;
  styles: Style;
  animations: Animation[];
  events?: Event[];
}

interface Image {
  id?: string;
  imageUrl: string;
  styles: Style;
  animations: Animation[];
}

interface Button {
  id?: string;
  text: string;
  styles: Style;
  animations: Animation[];
  events?: Event[];
}

interface Action {
  _type: string;
  style: Style;
  cdata: string;
  function: string;
}

interface PresentationItem {
  category: string;
  landscape: {
    texts: Text[];
    images: Image[];
    buttons: Button[];
    actions: Action[];
  };
  portrait: {
    texts: Text[];
    images: Image[];
    buttons: Button[];
    actions: Action[];
  };
}

interface Presentation {
  title: string;
  description: string;
  category: string;
  date_added: string;
  date_modified: string;
  author: string;
  views: number;
  draft: boolean;
  item: PresentationItem[];
  id: number;
}

interface Dashboard {
  title: string;
  date_created: string;
  last_modified: string;
  author: string;
  presentations: Presentation[];
  dashboard: any;
}

interface DashboardObject {
  dashboard: Dashboard;
}

declare namespace JSX {
  interface IntrinsicElements {
    // Declare the deckgo-drr component here
    "deckgo-drr": React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement>,
      HTMLElement
    >;
  }
}
