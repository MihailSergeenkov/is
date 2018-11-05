import React from 'react';
import ReactDOM from 'react-dom';
import products from '~/constants/Products';
import Image from '~/src/Image';
import TextBox from '~/src/TextBox';
import Price from '~/src/Price';

ReactDOM.render(
  <Price price={products[0]['price']} />,
  document.getElementById('app')
);
