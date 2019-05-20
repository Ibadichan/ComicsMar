import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import Button from "~/src/common/Button";
import Quantity from "./Quantity";

class Commerce extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { quantity: 1 };
    this.handleQuantityChange = this.handleQuantityChange.bind(this);
  }

  handleQuantityChange(event) {
    const quantity = parseInt(event.target.value) || 1;
    this.setState({ quantity });
  }

  render() {
    const { product, addProductToCart } = this.props;
    const quantity = this.state.quantity;

    return (
      <div className="catalog-item-сommerce">
        <Quantity
          onChange={this.handleQuantityChange}
          value={quantity}
          productId={product.id}
        />
        <Button
          className="button catalog-item-buy"
          onClick={() => addProductToCart(product, quantity)}
        >
          Add to Cart
        </Button>
      </div>
    );
  }
}

Commerce.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired
  }).isRequired,
  addProductToCart: PropTypes.func.isRequired
};

export default Commerce;
