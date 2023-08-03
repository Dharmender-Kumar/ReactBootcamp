import React, { useState, useEffect } from "react";
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    console.log("use");

    if (value >= 0) {
      console.log("render");
      document.title = `New Message ${value}`;
    }
  }, []); //list of depedencies
  return (
    <div className="container">
      <h1>{value}</h1>
      <button className="btn" onClick={() => setValue(value + 1)}>
        btn
      </button>
    </div>
  );
};

export default UseEffectBasics;
