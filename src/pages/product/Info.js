import React from 'react';
import PropTypes from 'prop-types';
const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };

function Info({ product }) {
  const publishedAt =
    new Date(product.publishedAt)
    .toLocaleString('en', dateOptions);

  return (
    <section className='product-info'>
      <h2>Product info:</h2>

      <b className='product-published-at'>
        {`Published at: ${publishedAt}`}
      </b>
      <p className='product-description'>{product.description}</p>
    </section>
  );
}

Info.propTypes = {
  product: PropTypes.shape({
    publishedAt: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
  }).isRequired
};

export default Info;
