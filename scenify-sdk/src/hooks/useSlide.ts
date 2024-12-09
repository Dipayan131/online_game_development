import { useContext } from "react";
import { EditorContext } from "../context";

export function useSlide() {
  const {
    slideIndex,
    setSlideIndex,
    item,
    setItem,
    selectedDiv,
    setSelectedDiv,
  } = useContext(EditorContext);
  return {
    slideIndex,
    setSlideIndex,
    item,
    setItem,
    selectedDiv,
    setSelectedDiv,
  };
}
