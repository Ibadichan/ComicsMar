import React, { Component } from 'react';
import Products from '../../constants/Products';
import CatalogList from './CatalogList';

class CatalogPage extends Component {
  constructor(props) {
    super(props);
    this.state = { products: Products };
  }

  render() {
    return <CatalogList products={this.state.products} />
  }
}

export default CatalogPage;
