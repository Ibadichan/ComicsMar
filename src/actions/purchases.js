import { ADD_PRODUCT_TO_CART } from '~/src/config/actionTypes';

function addProductToCart(product, quantity) {
  return {
    type: ADD_PRODUCT_TO_CART,
    product,
    quantity
  };
}

export { addProductToCart };
