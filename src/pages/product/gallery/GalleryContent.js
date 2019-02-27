import React from 'react';
import PropTypes from 'prop-types';
import Arrow from '~/src/common/slider/Arrow';
import Image from '~/src/common/product/Image';
import GalleryList from './GalleryList';
import OpenGalleryModal from './OpenGalleryModal';
import GalleryModal from './GalleryModal';

function GalleryContent(props) {
  const {
    product,
    onThumbClick,
    moveForward,
    moveBackward,
    photoFull,
    onTouchStart,
    onTouchEnd,
    position,
    toggleGalleryModal,
    galleryModalIsOpen
  } = props;

  return (
    <section className='product-photos'>
      <h2 className='visually-hidden'>Product photos</h2>

      <Image {...photoFull} className='product-photo-full' />

      <div className='product-gallery'>
        <Arrow onClick={moveBackward} className='product-gallery-prev'>
          Prev
        </Arrow>

        <GalleryList
          product={product}
          onThumbClick={onThumbClick}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
          position={position}
        />

        <Arrow onClick={moveForward} className='product-gallery-next'>
          Next
        </Arrow>
      </div>

      <OpenGalleryModal onClick={toggleGalleryModal} />

      {
        galleryModalIsOpen && <GalleryModal {...props} />
      }
    </section>
  );
}

GalleryContent.propTypes = {
  product: PropTypes.object.isRequired,
  onThumbClick: PropTypes.func.isRequired,
  moveBackward: PropTypes.func.isRequired,
  moveForward: PropTypes.func.isRequired,
  onTouchStart: PropTypes.func.isRequired,
  onTouchEnd: PropTypes.func.isRequired,
  position: PropTypes.number.isRequired,
  photoFull: PropTypes.object.isRequired,
  toggleGalleryModal: PropTypes.func.isRequired,
  galleryModalIsOpen: PropTypes.bool.isRequired
};

export default GalleryContent;
