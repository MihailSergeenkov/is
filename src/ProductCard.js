import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Image from '~/src/Image';
import TextBox from '~/src/TextBox';
import Price from '~/src/Price';
import BuyButton from '~/src/BuyButton';

class ProductCard extends Component {
  constructor(props) {
    super(props);

    this.state = { productNumber: 1 };
    this.handleChange = this.handleChange.bind(this);
    this.dragStart = this.dragStart.bind(this);
  }

  handleChange(e) {
    this.setState({ productNumber: +e.target.value });
  }

  dragStart(e) {
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setDragImage(e.target, 5, 5);
    return true;
  }

  render() {
    const { product } = this.props;

    return (
      <div className="card" draggable="true" onDragStart={this.dragStart}>
        <div className="card-image">
          <Image src={product['imageUrl']} width="150" height="250" alt={product['title']} />
          <BuyButton productId={product['id']} productNumber={this.state.productNumber} />
        </div>
        <div className="card-content">
          <div className="card-title">
            <TextBox text={product['title']} />
          </div>
          <Price price={product['price']} />
          <input type="number" id="productNumber"  placeholder="Укажите кол-во (по-умолчанию 1):" min="1" onChange={this.handleChange} />
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
