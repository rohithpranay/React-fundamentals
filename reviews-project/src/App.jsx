import { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const App = () => {
  const [currIndx, setCurrIndx] = useState(0);
  const { name, job, image, text } = people[currIndx];

  const nextPerson = () => {
    if (currIndx < people.length - 1) {
      setCurrIndx((i) => i + 1);
    } else {
      setCurrIndx(0);
    }
  };
  const prevPerson = () => {
    if (currIndx < 1) {
      setCurrIndx(people.length - 1);
    } else {
      setCurrIndx((i) => i - 1);
    }
  };

  return (
    <main>
      <article className="review">
        <div className="img-container">
          <img src={image} alt={name} className="person-img" />
          <span className="quote-icon">
            <FaQuoteRight />
          </span>
        </div>
        <h4 className="author">{name} </h4>
        <p className="job">{job} </p>
        <p className="info">{text} </p>
        <div className="btn-container">
          <button className="prev-btn" onClick={prevPerson}>
            <FaChevronLeft />
          </button>
          <button className="prev-btn" onClick={nextPerson}>
            <FaChevronRight />
          </button>
        </div>
      </article>
    </main>
  );
};
export default App;
