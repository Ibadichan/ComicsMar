import { rootPath } from "helpers/routes";
import { fetchProducts } from "actions/products";
import { fetchSlideshowPhotos } from "actions/slideshow";
import CatalogPage from "pages/catalog/Container";

const RootRoute = {
  exact: true,
  path: rootPath(),
  component: CatalogPage,
  prepareData(store, query, params, routes) {
    return Promise.all([
      store.dispatch(fetchProducts()),
      store.dispatch(fetchSlideshowPhotos())
    ]);
  }
};

export default RootRoute;
