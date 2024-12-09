import * as React from "react";
import { useState, useContext, useEffect } from "react";
import ButtonsPanel from "./ButtonsPanel";
import StylesPanel from "./StylesPanel";
import AnimationPanel from "./AnimationPanel";
// import { EditorContext } from "../../../../../../../../scenify-sdk/src";
// const useSlide = React.lazy(() => import("scenify_sdk/useSlide"));
// import EditorContext from "scenify_sdk/EditorContext";
import useSlide from "scenify_sdk/useSlide";
import ImagePanel from "./ImagePanel";
import Layers from "./Layers";
import EventsPanel from "./EventsPanel";

export default function DesignPanel() {
  const { item, slideIndex, selectedDiv, setItem } = useSlide();
  const [isOpen, setIsOpen] = useState(true);
  const [activePanel, setActivePanel] = useState<string>('none');
  const [isImage, setIsImage] = useState(false);
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  const handleButtonClick = (panel: string) => {
    setIsOpen(!isOpen);
    setActivePanel(panel);
  };

  const handleClose = () => {
    setIsOpen(true);
    setActivePanel('none');
  };

  useEffect(() => {
    if (!selectedDiv) return;
    const id = selectedDiv;
    const newItem = item;
    const currentSlide = newItem[slideIndex];
    const { landscape } = currentSlide;
    const divs = landscape.divs;
    const currentDiv = divs?.find((div: any) => div.id === id);

    // console.log("look here",selectedDiv);

    if (currentDiv?.imageUrl) {
      setIsImage(true);
      console.log("this is an image");
    } else {
      console.log("this is not an image");
      setIsImage(false);
      setImageUrl(null);
      return;
    }

    // const currentSlide = item[slideIndex];
    if (!currentSlide || !currentSlide.landscape) {
      setIsImage(false);
      setImageUrl(null);
      return;
    }

    // const currentDiv = currentSlide.landscape.divs.find((div: any) => div.id === selectedDiv);

    console.log("Selected Div:", selectedDiv);
    console.log("Current Div:", currentDiv);
    console.log("Current Div Image URL:", currentDiv?.imageUrl);

    if (currentDiv?.imageUrl) {
      setIsImage(true);
      setImageUrl(currentDiv.imageUrl);
    } else {
      setIsImage(false);
      setImageUrl(null);
    }
  }, [selectedDiv, item, slideIndex]);

  const handleCroppedImage = (croppedImageUrl: string) => {
    const updatedItem = [...item];
    const currentSlide = { ...updatedItem[slideIndex] };

    if (!currentSlide.landscape) {
      currentSlide.landscape = { divs: [] };
    }

    const divs = currentSlide.landscape.divs.map((div: any) =>
      div.id === selectedDiv ? { ...div, imageUrl: croppedImageUrl } : div
    );
    currentSlide.landscape.divs = divs;
    updatedItem[slideIndex] = currentSlide;
    setItem(updatedItem);
  };

  const renderPanel = () => {
    console.log("Active Panel:", activePanel);
    console.log("Is Image:", isImage);
    console.log("Image URL:", imageUrl);

    if (activePanel === 'styles') {
      return isImage ? (
        <ImagePanel imageUrl={imageUrl} onClick={handleClose} onCropped={handleCroppedImage} />
      ) : (
        <StylesPanel onClick={handleClose} />
      );
    } else if (activePanel === 'animations') {
      return <AnimationPanel onClick={handleClose} />;
    } else if (activePanel == "layers") {
      return <Layers onClick={handleClose} />;
    }
    else if (activePanel == "events") {
      return <EventsPanel onClick={handleClose} />;
    }

     else return null;
  };

  return isOpen ? <ButtonsPanel onClick={handleButtonClick} /> : renderPanel();
}
