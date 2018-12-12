import { mainPath } from '~/src/helpers/routes';
import ProductsContainer from '~/src/containers/ProductsContainer';
import { fetchProducts } from '~/src/actions/Products';

export default {
  path: mainPath(),
  exact: true,
  strict: true,
  component: ProductsContainer,
  prepareData: (store) => {
    store.dispatch(fetchProducts());
  }
};
