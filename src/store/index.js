import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import middleware from "../middleware";
import reducers from "../reducers";
import { initializeCart } from "../actions/purchases";
import loadPurchases from "../helpers/purchases/loadPurchases";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combineReducers(reducers),
  composeEnhancers(applyMiddleware(...middleware))
);

store.dispatch(initializeCart(loadPurchases()));

export default store;
