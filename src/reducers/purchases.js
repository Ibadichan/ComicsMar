import {
  ADD_PRODUCT_TO_CART,
  INITIALIZE_CART,
  ORDER_PRODUCT_SUCCESS
} from "config/actionTypes";
import { createReducer } from "helpers/redux/reducerUtilities";
import deepClone from "utils/deepClone";

const purchases = createReducer([], {
  [ADD_PRODUCT_TO_CART]: addProductToCart,
  [INITIALIZE_CART]: initializeCart,
  [ORDER_PRODUCT_SUCCESS]: orderProductSuccess
});

function addProductToCart(purchases, { product, quantity }) {
  purchases = deepClone(purchases);
  product = Object.assign(deepClone(product), { quantity });

  for (let i = 0; i < purchases.length; i++) {
    if (purchases[i].id !== product.id) continue;
    purchases[i].quantity += product.quantity;
    return purchases;
  }

  return purchases.concat([product]);
}

function initializeCart(state, { purchases }) {
  return purchases;
}

function orderProductSuccess(purchases, { response }) {
  return purchases.filter(
    purchase => purchase.id !== response.fields.purchase["en-US"].id
  );
}

export default purchases;
