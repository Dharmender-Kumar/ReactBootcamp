import { useEffect, useState } from "react";
import SingleColor from "./SingleColor";
import Values from "values.js";

function App() {
  const [property, setProperty] = useState({
    color: "#f15",
    colorDivision: 10,
  });
  const [error, setError] = useState(false);
  const [list, setList] = useState([]);
  useEffect(() => {
    setList(new Values(property.color).all(property.colorDivision));
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(property);
    try {
      let colors = new Values(property.color).all(property.colorDivision);
      console.log(colors);
      setList(colors);
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };
  return (
    <>
      <h3 className="container">Color Hex Generator</h3>

      <section className="container">
        <form action="" className="form" onSubmit={handleSubmit}>
          <label htmlFor="color" style={{ fontWeight: 500, fontSize: "20px" }}>
            Hex:{" "}
          </label>
          <input
            type="text"
            name="color"
            value={property.color}
            placeholder="#f15025"
            className={`${error ? "error" : null}`}
            onChange={(e) =>
              setProperty({ ...property, color: e.target.value })
            }
          />
          <label
            htmlFor="percentage"
            style={{ fontWeight: 500, fontSize: "20px" }}
          >
            % Diff:{" "}
          </label>

          <input
            type="number"
            min={1}
            max={100}
            name="percentage"
            value={property.colorDivision}
            onChange={(e) =>
              setProperty({
                ...property,
                colorDivision: parseInt(e.target.value),
              })
            }
          />
          <button className="btn" type="submit">
            Fetch Colors
          </button>
        </form>
      </section>
      <section className="colors">
        {list.map((color, index) => {
          return (
            <SingleColor
              key={index}
              {...color}
              index={index}
              div={property.colorDivision}
            />
          );
        })}
      </section>
    </>
  );
}

export default App;
