import React from 'react';
import PropTypes from 'prop-types';

function OpenGalleryModal({ onClick }) {
  return (
    <button
      type='button'
      className='button open-gallery-modal'
      onClick={onClick}
    >
      Open on fullscreen
    </button>
  );
}

OpenGalleryModal.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default OpenGalleryModal;
