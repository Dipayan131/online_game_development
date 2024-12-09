import React from "react";
import { CommonView } from "../../views/CommonView";
import { useState } from "react";

const CommonContainer = ({ mockData }: any) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const items = mockData?.item;

  const handlers = {
    onNextHandler: () => {
      if (currentIndex < items.length - 1) {
        setCurrentIndex(currentIndex + 1);
      }
    },
    onPreviousHandler: () => {
      if (currentIndex > 0) {
        setCurrentIndex(currentIndex - 1);
      }
    },
  };
  return (
    <div className="px-0 flex flex-col items-center justify-center h-screen">
      <CommonView data={items[currentIndex]} {...handlers} state={undefined} />
    </div>
  );
};

export default CommonContainer;
