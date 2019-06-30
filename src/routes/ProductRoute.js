import { productPath } from "helpers/routes";
import { fetchProducts } from "actions/products";
import ProductPage from "pages/product/Container";

const ProductRoute = {
  exact: true,
  strict: true,
  path: productPath(),
  component: ProductPage,
  prepareData(store, query, params, routes) {
    return store.dispatch(fetchProducts());
  }
};

export default ProductRoute;
