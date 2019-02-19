import { rootPath } from '~/src/helpers/routes';
import CatalogPage from '~/src/pages/catalog';

const RootRoute = {
  exact: true,
  path: rootPath(),
  component: CatalogPage
};

export default RootRoute;
