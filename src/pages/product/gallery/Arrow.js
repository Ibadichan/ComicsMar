import React from 'react';
import PropTypes from 'prop-types';

function Arrow({ className, onClick, children }) {
  return (
    <button
      type='button'
      className={className}
      onClick={onClick}
    >
      <span className='visually-hidden'>{children}</span>
    </button>
  );
}

Arrow.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.string
};

export default Arrow;
