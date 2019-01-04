import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Price from './Price';
import Quantity from './Quantity';
import BuyButton from './BuyButton';

class Commerce extends Component {
  constructor(props) {
    super(props);
    this.state = { quantityValue: '1' };
    this.handleQuantityChange = this.handleQuantityChange.bind(this);
  }

  handleQuantityChange(event) {
    this.setState({
      quantityValue: event.target.value
    });
  }

  render() {
    const product = this.props.product;
    const quantity = this.state.quantityValue;

    return (
      <div className='catalog-item-сommerce'>
        <Price>{product.price}</Price>
        <Quantity
          productId={product.id}
          value={quantity}
          onChange={this.handleQuantityChange}
        />
        <BuyButton product={product} quantity={quantity} />
      </div>
    );
  }
}

Commerce.propTypes = {
  product: PropTypes.object.isRequired
};

export default Commerce;
