import { rootPath } from '../helpers/routes';
import CatalogPage from '../pages/catalog/index';

const RootRoute = {
  exact: true,
  path: rootPath(),
  component: CatalogPage
};

export default RootRoute;
