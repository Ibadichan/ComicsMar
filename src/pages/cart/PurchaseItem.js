import React from 'react';
import PropTypes from 'prop-types';
import Image from '../../common/components/product/Image';

function PurchaseItem({ purchase }) {
  const { title, imageUrl, price, quantity } = purchase;

  return (
    <li className='purchase-item'>
      <h3>{title}</h3>

      <Image
        src={imageUrl}
        width='300'
        height='450'
        alt={title}
        className='purchase-image'
      />

      <p className='purchase-price'>
        Price: <b>{price}</b>
      </p>

      <p className='purchase-quantity'>
        Quantity: <b>{quantity}</b>
      </p>

      <p className='purchase-total-price'>
        Total Price: <b>{parseInt(price) * quantity + '$'}</b>
      </p>

      <a href='#' className='button purchase-buy'>Buy</a>
    </li>
  );
}

PurchaseItem.propTypes = {
  purchase: PropTypes.shape({
    title: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    quantity: PropTypes.oneOfType([
      PropTypes.string.isRequired,
      PropTypes.number.isRequired
    ])
  })
};

export default PurchaseItem;
