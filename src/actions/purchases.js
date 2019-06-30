import { INITIALIZE_CART, ADD_PRODUCT_TO_CART } from "config/actionTypes";

function initializeCart(purchases) {
  return {
    type: INITIALIZE_CART,
    purchases
  };
}

function addProductToCart(product, quantity) {
  return {
    type: ADD_PRODUCT_TO_CART,
    product,
    quantity
  };
}

export { initializeCart, addProductToCart };
