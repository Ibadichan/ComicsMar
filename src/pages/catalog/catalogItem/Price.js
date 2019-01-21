import React from 'react';
import PropTypes from 'prop-types';

function Price({ children }) {
  return (
    <b className='catalog-item-price'>
      {children}$
    </b>
  );
}

Price.propTypes = {
  children: PropTypes.number.isRequired
};

export default Price;
