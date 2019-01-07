import React from 'react';
import PropTypes from 'prop-types';
import Header from './CatalogItem/Header';
import Image from './CatalogItem/Image';
import Commerce from './CatalogItem/Commerce';

function CatalogItem({ product }) {
  const { title, imageUrl } = product;

  return (
    <li className='catalog-item'>
      <Header>{title}</Header>
      <Image src={imageUrl} width='300' height='450' alt={title} />
      <Commerce product={product} />
    </li>
  );
}

CatalogItem.propTypes = {
  product: PropTypes.object.isRequired
};

export default CatalogItem;
