import React from 'react';
import PropTypes from 'prop-types';

function Quantity({ productId, value, onChange}) {
  const id = `product-quantity-${productId}`;

  return (
    <p className='catalog-item-quantity'>
      <label htmlFor={id} className='visually-hidden'>
        Quantity
      </label>
      <input
        type='number'
        id={id}
        value={value}
        onChange={onChange}
      />
    </p>
  );
}

Quantity.propTypes = {
  productId: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default Quantity;
