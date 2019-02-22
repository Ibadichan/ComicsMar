import React from 'react';
import PropTypes from 'prop-types';
import Arrow from '~/src/common/slider/Arrow';
import SlideList from './SlideList';
import Controls from './Controls';

function Slider(props) {
  const {
    goToPrevSlide,
    goToNextSlide,
    slides,
    sliderPosition,
    unitOfMeasurement,
    onTouchStart,
    onTouchEnd,
    currentIndex,
    goToSlide
  } = props;

  return (
    <section className='slideshow'>
      <h2 className='visually-hidden'>Popular product</h2>

      <div className='slideshow-container'>
        <Arrow
          className='slideshow-prev'
          onClick={goToPrevSlide}
        >
          Prev
        </Arrow>

        <Arrow
          className='slideshow-next'
          onClick={goToNextSlide}
        >
          Next
        </Arrow>

        <SlideList
          slides={slides}
          sliderPosition={sliderPosition}
          unitOfMeasurement={unitOfMeasurement}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        />

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
  slides: PropTypes.array.isRequired,
  sliderPosition: PropTypes.number.isRequired,
  unitOfMeasurement: PropTypes.string.isRequired,
  onTouchStart: PropTypes.func.isRequired,
  onTouchEnd: PropTypes.func.isRequired,
  currentIndex: PropTypes.number.isRequired,
  goToSlide: PropTypes.func.isRequired
};

export default Slider;
