import React from 'react';
import PropTypes from 'prop-types';

function Quantity({ productId, value, onChange }) {
  const id = `catalog-item-${productId}-quantity`;

  return (
    <p className='catalog-item-quantity-wrapper'>
      <label htmlFor={id}>Quantity</label>
      <input
        type='number'
        min='1'
        id={id}
        value={value}
        onChange={onChange}
      />
    </p>
  );
}

Quantity.propTypes = {
  productId: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired
};

export default Quantity;
