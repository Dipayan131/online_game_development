import React, { useState, FC } from 'react';
import 'primeicons/primeicons.css';
import { IoMdClose } from "react-icons/io";

interface TextAreaProps {
  name: number;
  id: string;
  content: { [key: string]: string | number };
  categoryAnim: { percent: number; [key: string]: string | number }[];
  setCategoryAnim: React.Dispatch<React.SetStateAction<{ percent: number; [key: string]: string | number }[]>>;
}

const TextArea: FC<TextAreaProps> = ({ name, id, content, categoryAnim, setCategoryAnim }) => {
  let textAreaContent: { [key: string]: string | number } = {};
  for (const property in content) {
    if (property !== "percent") {
      textAreaContent[property] = content[property];
    }
  }

  const handleClose = () => {
    setCategoryAnim((prev) => {
      return prev.filter((i) => i.percent !== content.percent);
    });
  };

  const [textAreaValue, setTextAreaValue] = useState<string>(JSON.stringify(textAreaContent, null, 2));

  return (
    <div className='textarea-container'>
      <div className="code-heading">
        <p className="txth1">{name}%</p>
        <i className="pi pi-times" onClick={handleClose}></i>
        {/* <IoMdClose onClick={handleClose} size={25}/> */}
      </div>
      <textarea
        id={id}
        className="textarea"
        rows={5}
        value={textAreaValue}
        onChange={(e) => setTextAreaValue(e.target.value)}
      ></textarea>
    </div>
  );
};

export default TextArea;
