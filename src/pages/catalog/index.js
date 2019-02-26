import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import PageContent from './PageContent';

class CatalogPage extends Component {
  render() {
    const { location, products } = this.props;

    return (
      <PageContent
        location={location}
        products={products}
      />
    );
  }
}

CatalogPage.propTypes = {
  location: PropTypes.object.isRequired,
  products: PropTypes.array.isRequired
};

function mapStateToProps({ products }) {
  return {
    products: products.items
  };
}

const connectedCatalogPage = connect(
  mapStateToProps,
  null
)(CatalogPage);

export default connectedCatalogPage;
