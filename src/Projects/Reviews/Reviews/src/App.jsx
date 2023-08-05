import React from "react";
import Review from "./Review";
import { FaGithubSquare } from "react-icons/fa";

function App() {
  return (
    <>
      {/* <Review/> */}
      <main>
        <section className="container">
          <div className="title">
            <h2>Reviews</h2>
            <div className="underline"></div>
          </div>
          <Review />
        </section>
      </main>
    </>
  );
}

export default App;
