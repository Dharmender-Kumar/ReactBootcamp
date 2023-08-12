import React, { useEffect } from "react";

const Alert = ({ type, msg, removeAlert, items }) => {
  //   console.log(type);
  useEffect(() => {
    const timeout = setTimeout(() => {
      removeAlert();
    }, 2000);
    return () => clearTimeout(timeout);
  }, [items]);
  return <p className={`alert alert-${type}`}>{msg}</p>;
};

export default Alert;
