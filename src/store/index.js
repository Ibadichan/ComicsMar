import { createStore, combineReducers, applyMiddleware } from "redux";
import middleware from "../middleware";
import reducers from "../reducers";
import { initializeCart } from "../actions/purchases";
import loadPurchases from "../helpers/purchases/loadPurchases";

const store = createStore(
  combineReducers(reducers),
  applyMiddleware(...middleware)
);

store.dispatch(initializeCart(loadPurchases()));

export default store;
