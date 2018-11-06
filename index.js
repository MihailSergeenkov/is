import React from 'react';
import ReactDOM from 'react-dom';
import products from '~/constants/Products';
import Catalog from '~/src/Catalog';

ReactDOM.render(
  <Catalog products={products} />,
  document.getElementById('app')
);
