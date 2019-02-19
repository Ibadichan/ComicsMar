import React from 'react';
import PropTypes from 'prop-types';

function BuyButton({ product, quantity, addProductToCart }) {
  return (
    <button
      type='button'
      className='button catalog-item-buy'
      onClick={() => addProductToCart(product, quantity)}
    >
      Add to Cart
    </button>
  );
}

BuyButton.propTypes = {
  product: PropTypes.object.isRequired,
  quantity: PropTypes.number.isRequired,
  addProductToCart: PropTypes.func.isRequired
};

export default BuyButton;
