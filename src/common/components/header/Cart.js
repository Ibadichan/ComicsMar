import React from 'react';
import CartAmountContext from '../../../contexts/cart/CartAmountContext';

function Cart() {
  return (
    <a href='#' className='cart-link'>
      Cart
      <span className='cart-link-counter'>
        <CartAmountContext.Consumer>
          { purchases => purchases.length }
        </CartAmountContext.Consumer>
      </span>
    </a>
  );
}

export default Cart;
