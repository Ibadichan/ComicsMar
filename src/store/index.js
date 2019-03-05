import {
  createStore,
  combineReducers,
  applyMiddleware
} from 'redux';
import thunk from 'redux-thunk';
import saveCart from '../middlewares/saveCart';
import reducers from '../reducers';
import { initializeCart } from '../actions/purchases';
import loadPurchases from '../helpers/purchases/loadPurchases';

const store = createStore(
  combineReducers(reducers),
  applyMiddleware(thunk, saveCart)
);

store.dispatch(
  initializeCart(loadPurchases())
);

export default store;
