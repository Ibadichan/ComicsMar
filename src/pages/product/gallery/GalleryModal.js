import React from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import Arrow from '~/src/common/slider/Arrow';
import Image from '~/src/common/product/Image';
import GalleryList from './GalleryList';
import CloseGalleryModal from './CloseGalleryModal';

function GalleryModal(props) {
  const {
    toggleGalleryModal,
    photoFull,
    moveForward,
    moveBackward,
    product,
    onThumbClick,
    onTouchStart,
    onTouchEnd,
    position
  } = props;

  return (
    createPortal(
      <div className='modal-overlay' onClick={toggleGalleryModal}>
        <section className='product-photos-modal'>
          <h2 className='visually-hidden'>Product photos in modal</h2>

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

          <CloseGalleryModal onClick={toggleGalleryModal} />
        </section>
      </div>,
      document.getElementById('modal-root')
    )
  );
}

GalleryModal.propTypes = {
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

export default GalleryModal;
