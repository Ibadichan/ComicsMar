import React from 'react';
import PropTypes from 'prop-types';

function Info({ product }) {
  const { published, description } = product;

  return (
    <section className='product-info'>
      <h2>Product info:</h2>

      <b className='product-published'>
        {`Published at: ${published}`}
      </b>
      <p className='product-description'>{description}</p>
    </section>
  );
}

Info.propTypes = {
  product: PropTypes.shape({
    published: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
  })
};

export default Info;
