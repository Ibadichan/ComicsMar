import React from 'react';
import PropTypes from 'prop-types';

function Header({ children }) {
  return (
    <h3 className='catalog-item-header'>
      { children }
    </h3>
  );
}

Header.propTypes = {
  children: PropTypes.string.isRequired
};

export default Header;
