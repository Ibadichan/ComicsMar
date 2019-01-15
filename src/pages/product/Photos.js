import React from 'react';
import Image from '../../common/components/product/Image';
import PropTypes from 'prop-types';

function Photos({ product }) {
  const { imageUrl, title } = product;

  return (
    <section className='product-photos'>
      <h2>Product photos:</h2>

      <Image
        src={imageUrl}
        width='300'
        height='450'
        alt={title}
        className='product-photo-full'
      />
    </section>
  );
}

Photos.propTypes = {
  product: PropTypes.shape({
    imageUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  })
};

export default Photos;
