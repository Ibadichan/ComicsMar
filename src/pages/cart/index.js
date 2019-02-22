import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { rootPath } from '~/src/helpers/routes';
import PageContent from './PageContent';

class CartPage extends Component {
  render() {
    const purchases = this.props.purchases;
    const redirect = {
      pathname: rootPath(),
      state: { message: 'Cart is empty, add something' }
    };

    if (purchases.length == 0) {
      return <Redirect to={redirect} />;
    } else {
      return <PageContent purchases={purchases} />;
    }
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
