import { productPath } from '../helpers/routes';
import ProductContainer from '../containers/ProductContainer';
import { fetchProduct } from '../actions/Product';

export default {
  path: productPath(),
  component: ProductContainer,
  prepareData: (store, query, params) => {
    store.dispatch(fetchProduct(params.id));
  }
};
