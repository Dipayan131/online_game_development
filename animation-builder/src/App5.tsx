import React, { useState } from "react";
import "./style.css";

const App5 = () => {
  const [port, setPort] = useState("3007");

  return (
    <div className="bg-green-300">
      <h1 className="text-3xl bg-gray-600">This is localhost: {port}</h1>
      <p>
        The port <span> {`${port}`}</span> is from useState.
      </p>
      <button className="bg-indigo-500">Click me</button>
    </div>
  );
};

export default App5;
