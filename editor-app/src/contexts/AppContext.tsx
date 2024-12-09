import * as React from "react";
import { PanelType } from "../constants/app-options";
import { SubMenuType } from "../constants/editor";
import { createContext, useState, FC } from "react";

type Template = any;
interface IAppContext {
  isMobile: boolean | undefined;
  setIsMobile: React.Dispatch<React.SetStateAction<boolean>>;
  templates: Template[];
  setTemplates: (templates: Template[]) => void;
  shapes: any[];
  setShapes: (templates: any[]) => void;
  activePanel: PanelType;
  setActivePanel: (option: PanelType) => void;
  activeSubMenu: SubMenuType | null;
  setActiveSubMenu: (option: SubMenuType) => void;
  item: any;
  setItem: (item: any) => void;
  slideIndex: number;
  setSlideIndex: (index: number) => void;
  panelStatus: boolean;
  setPanelStatus: (index: boolean) => void;
  customActions: any[];
  setCustomActions: (customActions: any[]) => void;
}

export const AppContext = createContext<IAppContext>({
  isMobile: false,
  setIsMobile: () => {},
  templates: [],
  setTemplates: () => {},
  shapes: [],
  setShapes: () => {},
  activePanel: PanelType.TEMPLATES,
  setActivePanel: () => {},
  activeSubMenu: null,
  setActiveSubMenu: (value: SubMenuType) => {},
  item: null,
  setItem: () => {},
  slideIndex: 0,
  setSlideIndex: () => {},
  panelStatus: true,
  setPanelStatus: () => {},
  customActions: [],
  setCustomActions: () => {}, 
});

export const AppProvider: any = ({ children }: any) => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [templates, setTemplates] = useState<Template[]>([]);
  const [shapes, setShapes] = useState<Template[]>([]);
  const [activePanel, setActivePanel] = useState<PanelType>(
    PanelType.TEMPLATES
  );
  const [activeSubMenu, setActiveSubMenu] = useState<SubMenuType | null>(null);
  const [slideIndex, setSlideIndex] = useState(0);
  const [item, setItem] = useState(null);
  const [panelStatus, setPanelStatus] = useState(true);
  const [customActions, setCustomActions] = useState([]);
  const context = {
    isMobile,
    setIsMobile,
    templates,
    setTemplates,
    activePanel,
    setActivePanel,
    shapes,
    setShapes,
    activeSubMenu,
    setActiveSubMenu,
    item,
    setItem,
    slideIndex,
    setSlideIndex,
    panelStatus,
    setPanelStatus,
    customActions,
    setCustomActions,
  };
  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
};
