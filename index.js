import React from 'react';
import ReactDOM from 'react-dom';
import products from '~/constants/Products';
import ProductCard from '~/src/ProductCard';

ReactDOM.render(
  <ProductCard product={products[0]} />,
  document.getElementById('app1')
);
ReactDOM.render(
  <ProductCard product={products[1]} />,
  document.getElementById('app2')
);
ReactDOM.render(
  <ProductCard product={products[2]} />,
  document.getElementById('app3')
);
