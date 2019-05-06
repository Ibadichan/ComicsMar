import React from 'react';
import PropTypes from 'prop-types';
import Price from './Price';
import Quantity from './Quantity';
import Button from '~/src/common/Button';

function CommerceContent(props) {
  const {
    product,
    quantity,
    onQuantityChange,
    addProductToCart
  } = props;

  return (
    <div className='catalog-item-сommerce'>
      <Price>{product.price}</Price>
      <Quantity
        productId={product.id}
        value={quantity}
        onChange={onQuantityChange}
      />
      <Button
        className='button catalog-item-buy'
        onClick={() => addProductToCart(product, quantity)}
      >
        Add to Cart
      </Button>
    </div>
  );
}

CommerceContent.propTypes = {
  product: PropTypes.object.isRequired,
  quantity: PropTypes.number.isRequired,
  onQuantityChange: PropTypes.func.isRequired,
  addProductToCart: PropTypes.func.isRequired
};

export default CommerceContent;
