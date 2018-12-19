import React from 'react';

function Price({ children }) {
  return (
    <b className='catalog-item-price'>
      { children }
    </b>
  );
}

export default Price;
