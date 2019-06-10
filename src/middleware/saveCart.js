import {
  ADD_PRODUCT_TO_CART,
  ORDER_PRODUCT_SUCCESS
} from "../config/actionTypes";
import savePurchases from "../helpers/purchases/savePurchases";
const types = [ADD_PRODUCT_TO_CART, ORDER_PRODUCT_SUCCESS];

const saveCart = store => next => action => {
  next(action);

  if (types.indexOf(action.type) != -1) {
    const purchases = store.getState().purchases;
    savePurchases(purchases);
  }
};

export default saveCart;
