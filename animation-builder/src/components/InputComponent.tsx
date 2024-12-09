import React, { FC } from 'react';

interface InputComponentProps {
  name: string;
  value: number;
  setFunction: (increment: boolean) => void;
}

const InputComponent: FC<InputComponentProps> = ({ name, value, setFunction }) => {
  return (
    <div>
      {name}
      <div className='input-container'>
        <button
          className="params fbtn"
          onClick={() => setFunction(false)}
        >
          -
        </button>
        <input type="number" value={value} readOnly />
        <button
          className="params sbtn"
          onClick={() => setFunction(true)}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default InputComponent;
