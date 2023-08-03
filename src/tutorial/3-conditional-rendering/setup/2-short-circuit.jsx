import React, { useState } from "react";
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  // const firstValue = text || 'hello world';
  // const secondValue = text && 'hello world';
  const text = "";

  return <div className="container">{text || "sjndfjdfjv"}</div>;
};

export default ShortCircuit;
