import React, { Component } from 'react';
import Catalog from '~/src/components/views/Catalog/Catalog';
import basketContext from '~/basketContext';
import fetchProducts from '~/src/components/fetchProducts';

class CatalogPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
      basket: []
    };

    this.addProduct = (product) => {
      return () => {
        this.setState((prevState) => ({
          basket: [...prevState.basket, product]
        }));
      };
    };
  }

  componentDidMount() {
    fetchProducts().then((products) => (
      this.setState({
        products: products.map((product) => ({
          ...product,
          headImage: product['imageUrls'][0]
        }))
      })
    ));
  }

  render() {
    return (
      <basketContext.Provider value={{ basket: this.state.basket, addProduct: this.addProduct }}>
        <Catalog products={this.state.products}/>
      </basketContext.Provider>
    );
  }
}

export default CatalogPage;
