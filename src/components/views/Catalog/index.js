import React, { Component } from 'react';
import Catalog from '~/src/components/views/Catalog/Catalog';
import basketContext from '~/basketContext';
import request from 'superagent';

const apiURL = 'https://cdn.contentful.com/spaces/hg3oyk3bbz3t/entries/';
const accessToken = '6bd686df5791bb025edc0670eccfac2b65e6612713eae0e69421ca295f2802f1';

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
    request
      .get(apiURL)
      .query({
        select: 'fields',
        content_type: 'product'
      })
      .set('Authorization', `Bearer ${accessToken}`)
      .then(({ body: { items: products } }) => (
        this.setState({
          products: products.map((product) => product.fields)
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
