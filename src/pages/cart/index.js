import React from 'react';
import Main from '../../common/components/Main';
import PurchaseList from './PurchaseList';
import CartAmountContext from '../../contexts/cart/CartAmountContext';
import { Redirect } from 'react-router-dom';
import { rootPath } from '../../helpers/routes';

function CartPage() {
  return (
    <Main headerText='Products added to cart:'>
      <CartAmountContext.Consumer>
        {
          purchases => (
            purchases.length ?
              <PurchaseList purchases={purchases} /> :
              <Redirect
                to={{
                  pathname: rootPath(),
                  state: { message: 'Cart is empty, add something' }
                }}
              />
          )
        }
      </CartAmountContext.Consumer>
    </Main>
  );
}

export default CartPage;
