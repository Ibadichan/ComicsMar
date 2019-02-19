import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addProductToCart } from '~/src/actions/purchases';
import Price from './Price';
import Quantity from './Quantity';
import BuyButton from './BuyButton';

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
    const product = this.props.product;
    const quantity = this.state.quantity;

    return (
      <div className='catalog-item-сommerce'>
        <Price>{product.price}</Price>
        <Quantity
          productId={product.id}
          value={quantity}
          onChange={this.handleQuantityChange}
        />
        <BuyButton
          product={product}
          quantity={quantity}
          addProductToCart={this.props.addProductToCart}
        />
      </div>
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
