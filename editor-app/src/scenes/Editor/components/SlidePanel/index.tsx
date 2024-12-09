import * as React from "react";
import { useState, useContext, useEffect } from "react";
import { useDrag, useDrop, DndProvider } from "react-dnd";
import { HTML5Backend } from 'react-dnd-html5-backend';
import { IoIosAdd } from "react-icons/io";
import { IoDuplicate } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import { cloneDeep } from "lodash";
const IconView = React.lazy(() => import("slide_app/IconView"));
import useSlide from "scenify_sdk/useSlide";

const SlidePanel = () => {
  const { item, setItem, slideIndex, setSlideIndex } = useSlide();
  const [state] = useState();
  const handlers = {};
  const [showContent, setShowContent] = useState(true);
  const [contentHeight, setContentHeight] = useState("0px");
  const [contentOpacity, setContentOpacity] = useState(0);
  const contentRef = React.useRef(null);

  const handleToggleContent = () => {
    setShowContent(!showContent);
  };

  useEffect(() => {
    if (showContent) {
      setContentHeight(`${contentRef.current.scrollHeight}px`);
      setContentOpacity(1);
    } else {
      setContentHeight("0px");
      setContentOpacity(0);
    }
  }, [showContent]);

  const handleAddSlide = () => {
    const newSlide = {
      category: "info",
      landscape: {
        divs: [
          {
            id: "root-div",
            styles: {
              backgroundColor: "white",
            },
          },
        ],
      },
      portrait: {
        divs: [
          {
            id: "root-div",
            styles: {
              backgroundColor: "white",
            },
          },
        ],
      },
    };

    const newItems = cloneDeep([...item, newSlide]);

    setItem(newItems);
    const draftData = JSON.parse(localStorage.getItem("draft"));
    localStorage.setItem(
      "draft",
      JSON.stringify({ ...draftData, item: newItems })
    );
  };

  const handleDuplicate = (index) => {
    const newItem = cloneDeep([...item]);
    newItem.splice(index, 0, item[index]);
    setItem(newItem);

    const draftData = JSON.parse(localStorage.getItem("draft"));
    localStorage.setItem(
      "draft",
      JSON.stringify({ ...draftData, item: newItem })
    );
  };

  const handleDelete = (index) => {
    const newItem = cloneDeep([...item]);
    newItem.splice(index, 1);
    setItem(newItem);

    const draftData = JSON.parse(localStorage.getItem("draft"));
    localStorage.setItem(
      "draft",
      JSON.stringify({ ...draftData, item: newItem })
    );
  };

  const moveSlide = (dragIndex, hoverIndex) => {
    const dragItem = item[dragIndex];
    setItem((prevState) => {
      const newState = [...prevState];
      newState.splice(dragIndex, 1);
      newState.splice(hoverIndex, 0, dragItem);

      const draftData = JSON.parse(localStorage.getItem("draft"));
      localStorage.setItem(
        "draft",
        JSON.stringify({ ...draftData, item: newState })
      );
  
      return newState;
    });
  };
  

  const SlideItem = ({ index, children }) => {
    const [, drop] = useDrop({
      accept: "list-item",
      hover: (item) => {
        if (!item) {
          return;
        }
        const dragIndex = (item as { index: number }).index;
        if (dragIndex === index) {
          return;
        }
        moveSlide(dragIndex, index);
        (item as { index: number }).index = index;
      },
    });
  
    const [{ isDragging }, drag] = useDrag({
      type: "list-item",
      item: () => {
        return { index };
      },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    });
  
    const opacity = isDragging ? 0.5 : 1;
  
    return (
      <div ref={(node) => drag(drop(node))} style={{ opacity }}>
        {children}
      </div>
    );
  };
  

  return (
    <div className="relative">
      {/* Up/Down arrow button */}
      <div
        className="absolute top-0 left-1/2 transform -translate-x-1/2 cursor-pointer z-50 w-8 h-8 bg-gray-400 rounded-full flex justify-center items-center"
        onClick={handleToggleContent}
      >
        {showContent ? (
          <FaArrowDown size={20} color="black" />
        ) : (
          <FaArrowUp size={20} color="black" />
        )}
      </div>
  
      {/* Conditional content */}
      <div
        ref={contentRef}
        style={{
          maxHeight: contentHeight,
          opacity: contentOpacity,
          transition: "max-height 0.5s ease, opacity 0.5s ease",
          overflow: "hidden"
        }}
      >
        <DndProvider backend={HTML5Backend}>
          <div className="flex overflow-x-scroll gap-2 bg-white">
            {item &&
              Array.isArray(item) &&
              item.map((slide, slideIndex) => (
                <SlideItem index={slideIndex} key={slideIndex}>
                  <div className="relative" style={{ border: '2px solid rgb(187, 189, 191)' }}>
                    <div className="absolute text-black z-10 top-0 right-0 px-2 py-1">
                      <div
                        className="cursor-pointer"
                        onClick={() => handleDuplicate(slideIndex)}
                      >
                        <IoDuplicate size={25} color="green" />
                      </div>
                      <div className="cursor-pointer">
                        <MdDelete
                          size={25}
                          color="red"
                          onClick={() => handleDelete(slideIndex)}
                        />
                      </div>
                    </div>
                    <div
                      style={{
                        width: "150px",
                        height: "100px",
                        aspectRatio: "3/2",
                        transform: "scale(0.2)",
                        transformOrigin: "left top",
                        borderRadius: "40px",
                      }}
                      onClick={() => setSlideIndex(slideIndex)}
                    >
                      <IconView
                        viewType="ICON"
                        state={state}
                        data={slide}
                        {...handlers}
                        slideIndex={slideIndex}
                        key={slideIndex}
                        editable={false}
                      />
                    </div>
                  </div>
                </SlideItem>
              ))}
            <div
              className="w-[150px] h-[100px] bg-gray-300 rounded-sm flex items-center justify-center"
              onClick={handleAddSlide}
            >
              <IoIosAdd size={60} color="black" />
            </div>
          </div>
        </DndProvider>
      </div>
    </div>
  );
  
  
};

export default SlidePanel;
