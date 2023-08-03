import React from "react";
import Tour from "./Tour";

const Tours = ({ tours, removeTours }) => {
  return (
    <section>
      <div className="title">
        <h2>Our Tours</h2>
        <div className="underline"></div>
        {tours.map((tour) => {
          return <Tour key={tour.id} {...tour} removeTours={removeTours} />;
        })}
      </div>
    </section>
  );
};

export default Tours;
