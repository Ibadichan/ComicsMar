import { productPath } from '~/src/helpers/routes';
import ProductPage from '~/src/pages/product/Container';

const ProductRoute = {
  exact: true,
  strict: true,
  path: productPath(),
  component: ProductPage
};

export default ProductRoute;
