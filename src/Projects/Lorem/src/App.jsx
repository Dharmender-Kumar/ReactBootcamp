import { useState } from "react";
import data from "./data";

function App() {
  const [text, setText] = useState([]);
  const [count, setCount] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(count);
    if (amount <= 0) {
      amount = 0;
    }
    if (amount > data.length) {
      amount = data.length;
    }
    setText(data.slice(0, amount));
  };

  return (
    <>
      <section className="section-center">
        <h3>Tired of Boring Lorem Ipsum?</h3>
        <form action="" className="lorem-form" onSubmit={handleSubmit}>
          <label htmlFor="amount">Paragraphs:</label>
          <input
            type="number"
            name="amount"
            id="amount"
            value={count}
            onChange={(e) => setCount(e.target.value)}
          />
          <button className="btn" type="submit">
            Generate
          </button>
        </form>

        <article className="lorem-text">
          {text.map((item, index) => {
            return <p key={index}>{item}</p>;
          })}
        </article>
      </section>
    </>
  );
}

export default App;
