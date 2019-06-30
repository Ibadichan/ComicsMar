import React from "react";
import PropTypes from "prop-types";
import Button from "common/Button";
import Slide from "./Slide";

function Controls({ currentIndex, slides, onClick }) {
  return (
    <ul className="slideshow-controls" onClick={onClick}>
      {slides.map((slide, i) => (
        <li key={slide.id}>
          <Button
            className={`slideshow-control ${
              currentIndex == i ? "selected" : ""
            }`}
            data={{ index: i }}
            hideText
          >
            {`${i + 1} slide`}
          </Button>
        </li>
      ))}
    </ul>
  );
}

Controls.propTypes = {
  currentIndex: PropTypes.number.isRequired,
  slides: PropTypes.arrayOf(Slide.propTypes.slide).isRequired,
  onClick: PropTypes.func.isRequired
};

export default Controls;
