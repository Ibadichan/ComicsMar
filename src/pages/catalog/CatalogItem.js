import React from 'react';
import PropTypes from 'prop-types';
import Header from './catalogItem/Header';
import Commerce from './catalogItem/Commerce';
import Image from '../../common/components/product/Image';
import Link from '../../common/components/linkWrappers/Link';
import { productPath } from '../../helpers/routes';

function CatalogItem({ product }) {
  const { title, photoFull } = product;

  return (
    <li className='catalog-item'>
      <Link to={productPath(product.id)}>
        <Header>{title}</Header>
        <Image
          {...photoFull}
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
    photoFull: PropTypes.object.isRequired
  }).isRequired
};

export default CatalogItem;
