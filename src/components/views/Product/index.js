import React, { Component } from 'react';
import request from 'superagent';
import Product from '~/src/components/views/Product/Product';

const apiURL = 'https://cdn.contentful.com/spaces/hg3oyk3bbz3t/entries/';
const accessToken = '6bd686df5791bb025edc0670eccfac2b65e6612713eae0e69421ca295f2802f1';


class ProductPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {
        id: null,
        title: null,
        price: null,
        imageUrls: []
      }
    };
  }

  componentDidMount() {
    const { id } = this.props.match.params;

    request
      .get(apiURL)
      .query({
        select: 'fields',
        content_type: 'product',
        'fields.id': id
      })
      .set('Authorization', `Bearer ${accessToken}`)
      .then(({ body: { items: products } }) => (
        this.setState({
          product: products[0].fields
        })
      ));
  }

  render() {
    return <Product product={this.state.product} />;
  }
}

export default ProductPage;
