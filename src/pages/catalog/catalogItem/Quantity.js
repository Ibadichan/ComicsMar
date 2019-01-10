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
        name={id}
        value={value}
        onChange={onChange}
      />
    </p>
  );
}

Quantity.propTypes = {
  productId: PropTypes.oneOfType([
    PropTypes.number.isRequired,
    PropTypes.string.isRequired
  ]),
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default Quantity;
