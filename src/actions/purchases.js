import {
  ADD_PRODUCT_TO_CART,
  INITIALIZE_CART
} from '~/src/config/actionTypes';

function addProductToCart(product, quantity) {
  return {
    type: ADD_PRODUCT_TO_CART,
    product,
    quantity
  };
}

function initializeCart(purchases) {
  return {
    type: INITIALIZE_CART,
    purchases
  };
}

export {
  addProductToCart,
  initializeCart
};
