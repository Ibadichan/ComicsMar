import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Gallery from './Gallery';
import Image from '~/src/common/product/Image';
import CloseGalleryModal from './CloseGalleryModal';

function GalleryModal({ close, galleryProps, photoFull }) {
  return (
    ReactDOM.createPortal(
      <div className='modal-overlay' onClick={close}>
        <section className='product-photos-modal'>
          <h2 className='visually-hidden'>Product photos in modal</h2>
          <Image {...photoFull} className='product-photo-full' />
          <Gallery {...galleryProps} />
          <CloseGalleryModal onClick={close} />
        </section>
      </div>,
      document.getElementById('modal-root')
    )
  );
}

GalleryModal.propTypes = {
  close: PropTypes.func.isRequired,
  galleryProps: PropTypes.object.isRequired,
  photoFull: PropTypes.object.isRequired
};

export default GalleryModal;
