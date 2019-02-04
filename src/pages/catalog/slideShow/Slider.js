import React from 'react';
import PropTypes from 'prop-types';
import Slide from './Slide';

function Slider(props) {
  const {
    slides,
    sliderPosition,
    unitOfMeasurement,
    onTouchStart,
    onTouchEnd
  } = props;

  return (
    <div className='slideshow-list-wrapper'>
      <ul
        className='slideshow-list'
        style={{ transform: `translateX(${sliderPosition + unitOfMeasurement})` }}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {
          slides.map(slide => <Slide key={slide.id} slide={slide} />)
        }
      </ul>
    </div>
  );
}

Slider.propTypes = {
  slides: PropTypes.array.isRequired,
  sliderPosition: PropTypes.number.isRequired,
  unitOfMeasurement: PropTypes.string.isRequired,
  onTouchStart: PropTypes.func.isRequired,
  onTouchEnd: PropTypes.func.isRequired
};

export default Slider;
