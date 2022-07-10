import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];
  console.log(index);

  function check(number) {
    //for when it reaches end of array
    if (number > people.length - 1) return 0;
    if (number < 0) return people.length - 1;
    return number;
  }

  function handlePrev() {
    setIndex((prev) => check(prev - 1));
  }

  function handleNext() {
    setIndex((prev) => check(prev + 1));
  }

  function handleRandom() {
    let randomIndex = Math.floor(Math.random() * people.length); //let because we want to reassign
    if (randomIndex === index) {
      randomIndex = index + 1; //note: no return (just modifies randomIndex)
    }
    setIndex(check(randomIndex));
  }
  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>

      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={handlePrev}>
          <FaChevronLeft />{" "}
        </button>
        <button className="next-btn" onClick={handleNext}>
          <FaChevronRight />{" "}
        </button>
      </div>
      <button className="random-btn" onClick={handleRandom}>
        surprise me
      </button>
    </article>
  );
};

export default Review;
