import { mainPath } from '../helpers/routes';
import ProductsContainer from '../containers/ProductsContainer';
import { fetchProducts } from '../actions/Products';

export default {
  path: mainPath(),
  exact: true,
  strict: true,
  component: ProductsContainer,
  prepareData: (store) => {
    store.dispatch(fetchProducts());
  }
};
