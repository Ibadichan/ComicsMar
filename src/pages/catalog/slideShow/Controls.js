import React from 'react';
import PropTypes from 'prop-types';

function Controls({ currentIndex, slides, onClick }) {
  return (
    <ul className='slideshow-controls' onClick={onClick}>
      {
        slides.map((slide, i) => (
          <li key={slide.id}>
            <button
              type='button'
              className={`slideshow-control ${currentIndex == i ? 'selected' : ''}`}
              data-index={i}
            >
              <span className='visually-hidden'>{i + 1} slide</span>
            </button>
          </li>
        ))
      }
    </ul>
  );
}

Controls.propTypes = {
  currentIndex: PropTypes.number.isRequired,
  slides: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Controls;
