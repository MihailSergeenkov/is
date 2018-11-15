import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Image from '~/src/Image';
import TextBox from '~/src/TextBox';
import Price from '~/src/Price';
import BuyButton from '~/src/BuyButton';

class ProductCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { product } = this.props;

    return (
      <div className="card">
        <div className="card-image">
          <Image src={product['imageUrl']} width="150" height="250" alt={product['title']} />
          <BuyButton productId={product['id']} />
        </div>
        <div className="card-content">
          <div className="card-title">
            <TextBox text={product['title']} />
          </div>
          <Price price={product['price']} />
        </div>
      </div>
    );
  }
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    imageUrl: PropTypes.string.isRequired
  })
};

export default ProductCard;
