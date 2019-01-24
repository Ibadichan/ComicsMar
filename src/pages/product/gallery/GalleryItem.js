import React from 'react';
import PropTypes from 'prop-types';

function GalleryItem({ largePhoto, smallPhoto }) {
  return (
    <li className='product-gallery-item'>
      <a href={largePhoto.src} title={largePhoto.alt}>
        <img {...smallPhoto} />
      </a>
    </li>
  );
}

const galleryPhotoPropTypes = PropTypes.shape({
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
}).isRequired;


GalleryItem.propTypes = {
  largePhoto: galleryPhotoPropTypes,
  smallPhoto: galleryPhotoPropTypes
};

export default GalleryItem;
