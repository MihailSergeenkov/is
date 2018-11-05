import React from 'react';
import ReactDOM from 'react-dom';
import products from '~/constants/Products';
import Image from '~/src/Image';

ReactDOM.render(
  <Image src={products[0]['imageUrl']} width="150" height="150" alt={products[0]['title']} />,
  document.getElementById('app')
);
