import React from 'react';
import CatalogItem from './CatalogItem';

function CatalogList({ products }) {
  return (
    <section className='catalog'>
      <h2>Catalog of products</h2>
      <ul className='catalog-list'>
        {
          products.map(product => {
            return <CatalogItem key={product.id} product={product} />
          })
        }
      </ul>
    </section>
  );
}

export default CatalogList;
