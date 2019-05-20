import React from "react";
import PropTypes from "prop-types";
import CatalogItem from "./catalogItem/Container";

function CatalogList({ products }) {
  return (
    <section className="catalog">
      <h2>Catalog of products:</h2>
      <ul className="catalog-list">
        {products.map(product => (
          <CatalogItem key={product.id} product={product} />
        ))}
      </ul>
    </section>
  );
}

CatalogList.propTypes = {
  products: PropTypes.array.isRequired
};

export default CatalogList;
