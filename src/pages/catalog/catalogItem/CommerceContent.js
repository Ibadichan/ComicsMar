import React from 'react';
import PropTypes from 'prop-types';
import Price from './Price';
import Quantity from './Quantity';
import BuyButton from './BuyButton';

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
      <BuyButton
        product={product}
        quantity={quantity}
        addProductToCart={addProductToCart}
      />
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
