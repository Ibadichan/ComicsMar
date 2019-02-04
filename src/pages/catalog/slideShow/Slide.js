import React from 'react';
import PropTypes from 'prop-types';

function Slide({ slide }) {
  const { title, photo } = slide;

  return (
    <li className='slideshow-item'>
      <h3>{title}</h3>
      <img {...photo} />
    </li>
  );
}

const photoProps = {
  src: PropTypes.string.isRequired,
  width: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  height: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  alt: PropTypes.string
};

Slide.propTypes = {
  slide: PropTypes.shape({
    photo: PropTypes.shape(photoProps).isRequired,
    title: PropTypes.string.isRequired
  }).isRequired
};

export default Slide;
