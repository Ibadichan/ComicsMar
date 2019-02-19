import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PageLayout from '~/src/common/PageLayout';
import Photos from './Photos';
import Info from './Info';

class ProductPage extends Component {
  findProduct() {
    const { match, products } = this.props;
    const id = match.params.id;
    return products.filter(product => product.id == id)[0];
  }

  render() {
    const product = this.findProduct();

    if (!product) { return <Redirect to='/404' /> };

    return (
      <PageLayout title={product.title}>
        <Photos product={product} />
        <Info product={product} />
      </PageLayout>
    );
  }
}

ProductPage.propTypes = {
  match: PropTypes.object.isRequired,
  products: PropTypes.array.isRequired
};

function mapStateToProps(state) {
  return { products: state.products.items };
}

const connectedProductPage = connect(
  mapStateToProps,
  null
)(ProductPage);

export default connectedProductPage;
