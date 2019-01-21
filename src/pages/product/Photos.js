import React from 'react';
import Image from '../../common/components/product/Image';
import PropTypes from 'prop-types';

function Photos({ product }) {
  return (
    <section className='product-photos'>
      <h2>Product photos:</h2>

      <Image
        {...product.photoFull}
        className='product-photo-full'
      />
    </section>
  );
}

Photos.propTypes = {
  product: PropTypes.shape({
    photoFull: PropTypes.object.isRequired
  }).isRequired
};

export default Photos;
