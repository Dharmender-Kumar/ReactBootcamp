import React, { useState } from "react";
const List = ({ people, setPeople }) => {
  // console.log(data);
  const removeItems = (id) => {
    const newData = people.filter((person) => person.id !== id);
    // console.log(newData);
    setPeople(newData);
  };
  return (
    <>
      {people.map((person) => {
        let { id, name, age, image } = person;
        return (
          <article key={id} className="person">
            <img src={image} alt={name} />
            <div>
              <h4>{name}</h4>
              <p>{age} years</p>
            </div>
            <button onClick={() => removeItems(id)}>remove</button>
          </article>
        );
      })}
    </>
  );
};

export default List;
