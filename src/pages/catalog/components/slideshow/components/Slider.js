import React from "react";
import PropTypes from "prop-types";
import Button from "~/src/common/Button";
import SlideList from "./SlideList";
import Controls from "./Controls";

function Slider(props) {
  const {
    goToPrevSlide,
    goToNextSlide,
    goToSlide,
    slides,
    sliderPosition,
    unitOfMeasurement,
    onTouchStart,
    onTouchEnd,
    currentIndex
  } = props;

  return (
    <section className="slideshow">
      <h2 className="visually-hidden">Popular product</h2>

      <div className="slideshow-container">
        <Button className="slideshow-prev" onClick={goToPrevSlide} hideText>
          Prev
        </Button>

        <SlideList
          slides={slides}
          sliderPosition={sliderPosition}
          unitOfMeasurement={unitOfMeasurement}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        />

        <Button className="slideshow-next" onClick={goToNextSlide} hideText>
          Next
        </Button>

        <Controls
          currentIndex={currentIndex}
          slides={slides}
          onClick={goToSlide}
        />
      </div>
    </section>
  );
}

Slider.propTypes = {
  goToPrevSlide: PropTypes.func.isRequired,
  goToNextSlide: PropTypes.func.isRequired,
  goToSlide: PropTypes.func.isRequired,
  slides: PropTypes.array.isRequired,
  sliderPosition: PropTypes.number.isRequired,
  unitOfMeasurement: PropTypes.string.isRequired,
  onTouchStart: PropTypes.func.isRequired,
  onTouchEnd: PropTypes.func.isRequired,
  currentIndex: PropTypes.number.isRequired
};

export default Slider;
