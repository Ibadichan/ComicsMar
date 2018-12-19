import React from 'react';
import Header from './CatalogItem/Header';
import Image from './CatalogItem/Image';
import Price from './CatalogItem/Price';

function CatalogItem(props) {
  const { title, imageUrl, price } = props.product;

  return (
    <li className='catalog-item'>
      <Header>{title}</Header>
      <Image src={imageUrl} width='300' height='450' alt={title} />
      <Price>{price}</Price>
    </li>
  );
}

export default CatalogItem;
