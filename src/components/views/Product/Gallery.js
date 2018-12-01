import React, { Component } from 'react';
import HeadImage from '~/src/components/views/Product/HeadImage';

class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = { headImage: null };
    this.handleClick = this.handleClick.bind(this);
  }

  static getDerivedStateFromProps(props, state)  {
    if (!state.headImage) {
      return { headImage: props.product.headImage };
    }
    return false;
  }

  handleClick(e) {
    this.setState({ headImage: e.target.src });
  }

  render() {
    const { product } = this.props;

    return (
      <div>
        <HeadImage image={this.state.headImage} />
        {
          product['imageUrls'].map((image) =>(
            <img
              key={image}
              src={image}
              alt={product['title']}
              style={{ marginTop: '20px' }}
              width="100"
              heigth="100"
              onClick={this.handleClick}
            />
          ))
        }
      </div>
    );
  }
}

export default Gallery;
