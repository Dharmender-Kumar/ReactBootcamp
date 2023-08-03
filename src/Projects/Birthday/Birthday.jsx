import React, { useState } from "react";
import data from "./data";
import List from "./List";

const Birthday = () => {
  const [people, setPeople] = useState(data);

  return (
    <main>
      <section className="container">
        <h3>{people.length} birthdays today</h3>
        <List people={people} setPeople={setPeople} />
        <button onClick={() => setPeople([])}>clear all</button>
      </section>
    </main>
  );
};

export default Birthday;
