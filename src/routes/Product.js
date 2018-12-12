import { productPath } from '~/src/helpers/routes';
import ProductContainer from '~/src/containers/ProductContainer';
import { fetchProduct } from '~/src/actions/Product';

export default {
  path: productPath(),
  component: ProductContainer,
  prepareData: (store, query, params) => {
    store.dispatch(fetchProduct(params.id));
  }
};
