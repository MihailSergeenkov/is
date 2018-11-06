import React, { Component } from 'react';
import Catalog from '~/src/Catalog';
import products from '~/constants/Products';

class CatalogPage extends Component {
  constructor(props) {
    super(props);
    this.state = { products: [] }
  }

  componentDidMount() {
    this.setState({ products });
  }

  render() {
    return <Catalog products={this.state.products}/>;
  }
}

export default CatalogPage;
