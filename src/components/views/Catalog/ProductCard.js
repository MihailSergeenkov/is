import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Image from '~/src/components/views/Catalog/Image';
import TextBox from '~/src/components/views/Catalog/TextBox';
import Price from '~/src/components/views/Catalog/Price';
import BuyButton from '~/src/components/views/Catalog/BuyButton';
import Link from '~/src/components/Link';
import { productPath } from '~/src/helpers/routes';

class ProductCard extends Component {
  constructor(props) {
    super(props);

    this.state = { productQuantity: 1 };
    this.handleChange = this.handleChange.bind(this);
    this.dragStart = this.dragStart.bind(this);
  }

  handleChange(e) {
    this.setState({ productQuantity: +e.target.value });
  }

  dragStart(e) {
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('product', this.props.product['id']);
    e.dataTransfer.setDragImage(e.target, 5, 5);
    return true;
  }

  render() {
    const { product } = this.props;

    return (
      <div className="card" draggable="true" onDragStart={this.dragStart}>
        <div className="card-image">
          <Image src={product['imageUrl']} width="150" height="250" alt={product['title']} />
          <BuyButton productId={product['id']} productQuantity={this.state.productQuantity} />
        </div>
        <div className="card-content">
          <div className="card-title">
            <Link to={productPath(product['id'])}>
              <TextBox text={product['title']} />
            </Link>
          </div>
          <Price price={product['price']} />
          <input type="number" placeholder="Укажите кол-во (по-умолчанию 1):" min="1" onChange={this.handleChange} />
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
