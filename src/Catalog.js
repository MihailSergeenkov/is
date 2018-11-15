import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProductCard from '~/src/ProductCard';
import BasketButton from '~/src/BasketButton';
import basketContext from '~/basketContext';

class Catalog extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { products } = this.props;

    return (
      <basketContext.Consumer>
        {
          ({ basket }) => (
            <div className="container">
              <BasketButton products={basket} />
              <div className="row">
                {
                  products.map((product) => (
                    <div className="col s4" key={product['id']}>
                      <ProductCard product={product} />
                    </div>
                  ))
                }
              </div>
            </div>
          )
        }
      </basketContext.Consumer>
    );
  }
}

Catalog.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape(ProductCard.propTypes)
  )
};

export default Catalog;
