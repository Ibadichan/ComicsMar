import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchProducts } from '~/src/actions/products';
import PageLayout from '~/src/common/PageLayout';
import Spinner from '~/src/common/Spinner';
import CatalogList from './CatalogList';
import NoticeMessage from './NoticeMessage';
import Slideshow from './Slideshow';

class CatalogPage extends Component {
  componentDidMount() {
    this.props.fetchProducts();
  }

  render() {
    const { location, products, isFetching } = this.props;

    if (isFetching) { return <Spinner /> };

    return (
      <PageLayout title='ComicsMar - World of comics'>
        {
          location.state &&
          location.state.message &&
          <NoticeMessage text={location.state.message} />
        }
        <Slideshow />
        <CatalogList products={products} />
      </PageLayout>
    );
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
