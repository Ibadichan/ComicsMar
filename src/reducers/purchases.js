import { ADD_PRODUCT_TO_CART, INITIALIZE_CART } from "~/src/config/actionTypes";
import deepClone from "~/src/utils/deepClone";
const INITIAL_STATE = [];

function purchases(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD_PRODUCT_TO_CART:
      const { product, quantity } = action;
      return addProductToCart(state, product, quantity);
    case INITIALIZE_CART:
      return action.purchases;
    default:
      return state;
  }
}

function addProductToCart(purchases, product, quantity) {
  purchases = deepClone(purchases);
  product = Object.assign(deepClone(product), { quantity });

  for (let i = 0; i < purchases.length; i++) {
    if (purchases[i].id !== product.id) {
      continue;
    }
    purchases[i].quantity += product.quantity;
    return purchases;
  }

  return purchases.concat([product]);
}

export default purchases;
