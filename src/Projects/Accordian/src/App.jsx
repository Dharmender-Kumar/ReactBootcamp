import React, { useState } from "react";
import data from "./data";
import Question from "./Question";

function App() {
  const [questions, SetQuestion] = useState(data);

  return (
    <main>
      <div className="container">
        <h3>Questions and Answers About Login</h3>
        <section className="info">
          {questions.map((ques) => {
            return <Question key={ques.id} ques={ques} />;
          })}
        </section>
      </div>
    </main>
  );
}

export default App;
