import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addProductToCart } from '~/src/actions/purchases';
import CommerceContent from './CommerceContent';

class Commerce extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { quantity: 1 };
    this.handleQuantityChange = this.handleQuantityChange.bind(this);
  }

  handleQuantityChange(event) {
    this.setState({ quantity: +event.target.value });
  }

  render() {
    return (
      <CommerceContent
        product={this.props.product}
        quantity={this.state.quantity}
        onQuantityChange={this.handleQuantityChange}
        addProductToCart={this.props.addProductToCart}
      />
    );
  }
}

Commerce.propTypes = {
  product: PropTypes.object.isRequired,
  addProductToCart: PropTypes.func.isRequired
};

function mapActionsToProps(dispatch) {
  return {
    addProductToCart(product, quantity) {
      dispatch(addProductToCart(product, quantity));
    }
  };
}

const connectedCommerce = connect(
  null,
  mapActionsToProps
)(Commerce);

export default connectedCommerce;
