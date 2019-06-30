import { cartPath } from "helpers/routes";
import { fetchProducts } from "actions/products";
import CartPage from "pages/cart/Container";

const CartRoute = {
  exact: true,
  strict: true,
  path: cartPath(),
  component: CartPage,
  prepareData(store, query, params, routes) {
    return store.dispatch(fetchProducts());
  }
};

export default CartRoute;
