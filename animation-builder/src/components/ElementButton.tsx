import React, { FC } from 'react';

interface Element {
  name: string;
  animations?: { percent: number; [key: string]: string | number }[];
}

interface ElementButtonProps {
  handleElementClick: (element: Element) => void;
  element: Element;
  selectedElement: Element | null;
}

const ElementButton: FC<ElementButtonProps> = ({ handleElementClick, element, selectedElement }) => {
  return (
    <button
      onClick={() => handleElementClick(element)}
      className={`element-button ${selectedElement === element ? "selected" : ""}`}
    >
      {element.name}
    </button>
  );
};

export default ElementButton;
