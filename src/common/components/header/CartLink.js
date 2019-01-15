import React from 'react';
import CartAmountContext from '../../../contexts/cart/CartAmountContext';
import NavLink from '../linkWrappers/NavLink';
import { cartPath } from '../../../helpers/routes';

function CartLink() {
  return (
    <NavLink to={cartPath()} activeClassName='disabled'>
      Cart
      <span className='cart-link-counter'>
        <CartAmountContext.Consumer>
          { purchases => purchases.length }
        </CartAmountContext.Consumer>
      </span>
    </NavLink>
  );
}

export default CartLink;
