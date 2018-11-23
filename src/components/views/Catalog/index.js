import React, { Component } from 'react';
import Catalog from '~/src/components/views/Catalog/Catalog';
import products from '~/constants/Products';
import basketContext from '~/basketContext';

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
    this.setState({ products });
  }

  render() {
    return (
      <basketContext.Provider value={{ basket: this.state.basket, addProduct: this.addProduct }} >
        <Catalog products={this.state.products}/>
      </basketContext.Provider>
    );
  }
}

export default CatalogPage;
