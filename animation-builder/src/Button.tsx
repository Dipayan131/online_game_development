import React, { useState } from "react";

const Button = () => {
  const [port, setPort] = useState("3007");
  return (
    <div>
      <h1 className="text-xl">
        This component is from localhost :
        <span className="font-bold">{port}</span>
      </h1>
    </div>
  );
};

export default Button;
