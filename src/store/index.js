import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import middleware from "middleware";
import reducers from "reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combineReducers(reducers),
  window.__INITIAL_STATE__,
  composeEnhancers(applyMiddleware(...middleware))
);

delete window.__INITIAL_STATE__;

export default store;
