import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { rootPath } from '~/src/helpers/routes';
import PageLayout from '~/src/common/PageLayout';
import PurchaseList from './PurchaseList';

class CartPage extends Component {
  render() {
    const purchases = this.props.purchases;

    return (
      <PageLayout title='Products added to cart:'>
        {
          purchases.length ?
            <PurchaseList purchases={purchases} /> :
            <Redirect
              to={{
                pathname: rootPath(),
                state: { message: 'Cart is empty, add something' }
              }}
            />
        }
      </PageLayout>
    );
  }
}

CartPage.propTypes = {
  purchases: PropTypes.array.isRequired
};

function mapStateToProps({ purchases }) {
  return { purchases };
}

const connectedCartPage = connect(
  mapStateToProps,
  null
)(CartPage);

export default connectedCartPage;
