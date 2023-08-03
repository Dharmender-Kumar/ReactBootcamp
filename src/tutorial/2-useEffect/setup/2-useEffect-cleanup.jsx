import React, { useState, useEffect } from "react";

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth);
  const checkSize = () => {
    setSize(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", checkSize);
    console.log("jdfvjd");
  });

  return (
    <div className="container">
      <h3>window {size} px</h3>
    </div>
  );
};

export default UseEffectCleanup;
