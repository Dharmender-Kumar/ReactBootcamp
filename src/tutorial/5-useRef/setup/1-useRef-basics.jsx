import React, { useEffect, useRef, useState } from "react";

// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements

const UseRefBasics = () => {
  const refContainer = useRef(null);
  const divContainer = useRef(null);

  useEffect(() => {
    console.log(refContainer.current.value);
    refContainer.current.focus();
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(refContainer.current.value);
    console.log(divContainer.current);
  };
  // const handleChange =(e)=>{

  // }
  return (
    <form className="form" onSubmit={handleSubmit}>
      <div>
        <input type="text" name="" id="" ref={refContainer} />
        <button type="submit">submit</button>
      </div>
      <div ref={divContainer}>
        <h1>Hello</h1>
      </div>
    </form>
  );
};

export default UseRefBasics;
