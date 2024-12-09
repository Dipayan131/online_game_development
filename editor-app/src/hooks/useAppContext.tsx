import { AppContext } from '../contexts/AppContext';
import { useContext } from 'react';

function useAppContext() {
  const {
    isMobile,
    setIsMobile,
    activePanel,
    setActivePanel,
    templates,
    setTemplates,
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
  } = useContext(AppContext);
  return {
    isMobile,
    setIsMobile,
    activePanel,
    setActivePanel,
    templates,
    setTemplates,
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
}

export default useAppContext;
