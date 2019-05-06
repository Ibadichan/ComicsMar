import React from 'react';
import PropTypes from 'prop-types';
import Button from '~/src/common/Button';

function Controls({ currentIndex, slides, onClick }) {
  return (
    <ul className='slideshow-controls' onClick={onClick}>
      {
        slides.map((slide, i) => (
          <li key={slide.id}>
            <Button
              className={
                `slideshow-control ${currentIndex == i ? 'selected' : ''}`
              }
              data={{ index: i }}
              hideText
            >
              {`${i + 1} slide`}
            </Button>
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
