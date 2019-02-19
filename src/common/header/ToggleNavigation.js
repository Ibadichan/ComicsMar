import React from 'react';
import PropTypes from 'prop-types';

function ToggleNavigation({ onClick }) {
  return (
    <button
      type='button'
      className='toggle-main-navigation-content'
      onClick={onClick}
    >
      <span className='visually-hidden'>
        Open Navigation
      </span>
    </button>
  );
}

ToggleNavigation.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default ToggleNavigation;
