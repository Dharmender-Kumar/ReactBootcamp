import React, { useState } from "react";
import people from "./data";
import { FaChevronRight, FaChevronLeft, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];
  const personSize = people.length;

  const prevPerson = () => {
    if (index === 0) setIndex(personSize - 1);
    else setIndex((index - 1) % personSize);
  };
  const nextPerson = () => {
    setIndex((index + 1) % personSize);
  };
  const randomPerson = () => {
    let newIndex = Math.floor(Math.random() * personSize);
    if (newIndex == index) (newIndex + 1) % personSize;
    setIndex(newIndex);
  };
  return (
    <>
      <article className="review">
        <div className="img-container">
          <img src={image} alt={name} className="person-img" />
          <span className="quote-icon">
            <FaQuoteRight />
          </span>
        </div>
        <h3 className="author">{name}</h3>
        <p className="job">{job}</p>
        <p>{text}</p>
        <div className="button-container">
          <button className="prev-btn" onClick={prevPerson}>
            <FaChevronLeft />
          </button>
          <button className="next-btn" onClick={nextPerson}>
            <FaChevronRight />
          </button>
        </div>
        <button className="random-btn" onClick={randomPerson}>
          surprise me
        </button>
      </article>
    </>
  );
};

export default Review;
