import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
const Question = ({ ques }) => {
  const [info, setInfo] = useState(false);

  return (
    <>
      <div className=" question">
        <header>
          <h4>{ques.title}</h4>
          <button className="btn" onClick={() => setInfo(!info)}>
            {info ? <FaMinus /> : <FaPlus />}
          </button>
        </header>

        <p>{info && ques.info}</p>
      </div>
    </>
  );
};

export default Question;
