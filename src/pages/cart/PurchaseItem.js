import React from 'react';
import PropTypes from 'prop-types';
import Image from '~/src/common/product/Image';

function PurchaseItem({ purchase }) {
  const { title, photoFull, price, quantity } = purchase;

  return (
    <li className='purchase-item'>
      <h3>{title}</h3>

      <Image
        {...photoFull}
        className='purchase-item-image'
      />

      <p className='purchase-item-price'>
        Price: <b>{price}$</b>
      </p>

      <p className='purchase-item-quantity'>
        Quantity: <b>{quantity}</b>
      </p>

      <p className='purchase-item-total-price'>
        Total Price: <b>{price * quantity}$</b>
      </p>

      <a href='#' className='button'>Buy</a>
    </li>
  );
}

PurchaseItem.propTypes = {
  purchase: PropTypes.shape({
    title: PropTypes.string.isRequired,
    photoFull: PropTypes.object.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired
  }).isRequired
};

export default PurchaseItem;
