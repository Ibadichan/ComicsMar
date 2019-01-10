import React from 'react';
import PropTypes from 'prop-types';
import AddPurchaseContext from '../../../contexts/cart/AddPurchaseContext';

function BuyButton({ product, quantity }) {
  return (
    <AddPurchaseContext.Consumer>
      {
        addPurchase => (
          <a
            href='#'
            className='button catalog-item-buy'
            onClick={(event) => addPurchase(event, product, quantity)}
          >
            Add to Cart
          </a>
        )
      }
    </AddPurchaseContext.Consumer>
  );
}

BuyButton.propTypes = {
  product: PropTypes.object.isRequired,
  quantity: PropTypes.string.isRequired
};

export default BuyButton;
