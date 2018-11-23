import { mainPath } from '~/src/helpers/routes';
import CatalogPage from '~/src/components/views/Catalog';

export default {
  path: mainPath(),
  exact: true,
  strict: true,
  component: CatalogPage
};
