import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchProducts } from '~/src/actions/products';
import Spinner from '~/src/common/Spinner';
import PageContent from './PageContent';

class CatalogPage extends Component {
  componentDidMount() {
    this.props.fetchProducts();
  }

  render() {
    const { location, products, isFetching } = this.props;

    if (isFetching) {
      return <Spinner />;
    } else {
      return <PageContent location={location} products={products} />;
    }
  }
}

CatalogPage.propTypes = {
  location: PropTypes.object.isRequired,
  products: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  fetchProducts: PropTypes.func.isRequired
};

function mapStateToProps({ products }) {
  return {
    isFetching: products.isFetching,
    products: products.items
  };
}

function mapActionsToProps(dispatch) {
  return {
    fetchProducts() {
      dispatch(fetchProducts());
    }
  };
}

const connectedCatalogPage = connect(
  mapStateToProps,
  mapActionsToProps
)(CatalogPage);

export default connectedCatalogPage;
