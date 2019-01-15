import { productPath } from '../helpers/routes';
import ProductPage from '../pages/product/index';

const ProductRoute = {
  exact: true,
  strict: true,
  path: productPath(),
  component: ProductPage
};

export default ProductRoute;
