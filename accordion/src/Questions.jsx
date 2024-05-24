import { useState } from "react";
import Question from "./Question";
import questions from "./data";

function Questions({ Questions }) {
  const [activeId, setActiveId] = useState(null);
  const toggleQuestion = (id) => {
    setActiveId(id === activeId ? null : id);
  };
  return (
    <section className="container">
      <h1>Questions</h1>
      {questions.map((question) => {
        return (
          <Question
            key={question.id}
            {...question}
            activeId={activeId}
            toggleQuestion={toggleQuestion}
          />
        );
      })}
    </section>
  );
}

export default Questions;
