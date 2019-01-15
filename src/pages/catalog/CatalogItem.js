import React from 'react';
import PropTypes from 'prop-types';
import Header from './catalogItem/Header';
import Commerce from './catalogItem/Commerce';
import Image from '../../common/components/product/Image';
import Link from '../../common/components/linkWrappers/Link';
import { productPath } from '../../helpers/routes';

function CatalogItem({ product }) {
  const { title, imageUrl } = product;

  return (
    <li className='catalog-item'>
      <Link to={productPath(product.id)}>
        <Header>{title}</Header>
        <Image
          src={imageUrl}
          width='300'
          height='450'
          alt={title}
          className='catalog-item-image'
        />
      </Link>
      <Commerce product={product} />
    </li>
  );
}

CatalogItem.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired
  })
};

export default CatalogItem;
