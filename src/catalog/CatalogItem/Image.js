import React from 'react';
import PropTypes from 'prop-types';

function Image({ src, width, height, alt }) {
  return (
    <p className='catalog-item-image'>
      <img src={src} width={width} height={height} alt={alt} />
    </p>
  );
}

Image.propTypes = {
  src: PropTypes.string.isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
  alt: PropTypes.string
};

export default Image;
