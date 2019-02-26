import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PageContent from './PageContent';

class ProductPage extends Component {
  findProduct() {
    const { match, products } = this.props;
    const id = match.params.id;
    return products.filter(product => product.id == id)[0];
  }

  render() {
    const product = this.findProduct();

    if (product) {
      return <PageContent product={product} />;
    } else {
      return <Redirect to='/404' />;
    };
  }
}

ProductPage.propTypes = {
  match: PropTypes.object.isRequired,
  products: PropTypes.array.isRequired
};

function mapStateToProps({ products }) {
  return { products: products.items };
}

const connectedProductPage = connect(
  mapStateToProps,
  null
)(ProductPage);

export default connectedProductPage;
