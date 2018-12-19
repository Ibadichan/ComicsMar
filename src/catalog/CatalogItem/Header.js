import React from 'react';

function Header({ children }) {
  return (
    <h3 className='catalog-item-header'>
      { children }
    </h3>
  );
}

export default Header;
