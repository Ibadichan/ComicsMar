import React from 'react';
import PropTypes from 'prop-types';

function CloseGalleryModal({ onClick }) {
  return (
    <button
      type='button'
      className='modal-close'
      onClick={onClick}
    >
      <span className='visually-hidden'>Close</span>
    </button>
  );
}

CloseGalleryModal.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default CloseGalleryModal;
