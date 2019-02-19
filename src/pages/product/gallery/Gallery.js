import React from 'react';
import PropTypes from 'prop-types';
import GalleryItem from './GalleryItem';
import Arrow from '~/src/common/slider/Arrow';

function Gallery(props) {
  const {
    product,
    onThumbClick,
    moveBackward,
    moveForward,
    onTouchStart,
    onTouchEnd,
    position
  } = props;

  const { smallPhotos, largePhotos } = product;

  return (
    <div className='product-gallery'>
      <Arrow onClick={moveBackward} className='product-gallery-prev'>
        Prev
      </Arrow>

      <div className='product-gallery-list-wrapper'>
        <ul
          className='product-gallery-list'
          onClick={onThumbClick}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
          style={{transform: `translateX(${position}px)`}}
        >
          {
            smallPhotos.map((smallPhoto, i) => (
              <GalleryItem
                largePhoto={largePhotos[i]}
                smallPhoto={smallPhoto}
                key={i}
              />
            ))
          }
        </ul>
      </div>

      <Arrow onClick={moveForward} className='product-gallery-next'>
        Next
      </Arrow>
    </div>
  );
}

Gallery.propTypes = {
  product: PropTypes.shape({
    largePhotos: PropTypes.array.isRequired,
    smallPhotos: PropTypes.array.isRequired
  }).isRequired,
  onThumbClick: PropTypes.func.isRequired,
  moveBackward: PropTypes.func.isRequired,
  moveForward: PropTypes.func.isRequired,
  position: PropTypes.number.isRequired
};

export default Gallery;
