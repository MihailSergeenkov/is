import React, { Component } from 'react';
import HeadImage from './HeadImage';

class Gallery extends Component {
  constructor(props) {
    super(props);

    this.state = {
      headImage: {
        image: null,
        from: 'props'
      }
    };

    this.handleClick = this.handleClick.bind(this);
  }

  static getDerivedStateFromProps(props, state)  {
    if (state.headImage.from == 'props') {
      return {
        headImage: {
          image: props.product.headImage,
          from: 'props'
        }
      };
    }
    return false;
  }

  handleClick(e) {
    this.setState({
      headImage: {
        image: e.target.src,
        from: 'user'
      }
    });
  }

  render() {
    const { product } = this.props;

    return (
      <div>
        <HeadImage image={this.state.headImage.image} />
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
