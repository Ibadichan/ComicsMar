import { productPhotoPath } from '../helpers/routes';
import ProductPage from '../pages/product/index';

const ProductPhotoRoute = {
  exact: true,
  strict: true,
  path: productPhotoPath(),
  component: ProductPage
};

export default ProductPhotoRoute;
