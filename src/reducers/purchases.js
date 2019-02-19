import { ADD_PRODUCT_TO_CART } from '~/src/config/actionTypes';
const INITIAL_STATE = [];

function purchases(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD_PRODUCT_TO_CART:
      const { product, quantity } = action;
      return addProductToCart(state, product, quantity);
    default:
      return state;
  }
}

function addProductToCart(purchases, product, quantity) {
  purchases = JSON.parse(JSON.stringify(purchases));
  product = Object.assign({}, product, { quantity });

  for (let i = 0; i < purchases.length; i++) {
    if (purchases[i].id !== product.id) { continue; }
    purchases[i].quantity += product.quantity;
    return purchases;
  };

  return purchases.concat([product]);
}

export default purchases;
