import { productPath } from '~/src/helpers/routes';
import ProductPage from '~/src/pages/product';

const ProductRoute = {
  exact: true,
  strict: true,
  path: productPath(),
  component: ProductPage
};

export default ProductRoute;
