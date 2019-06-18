import React from "react";
import PropTypes from "prop-types";

function Info({ product }) {
  const publishedAt = new Date(product.publishedAt).toLocaleString("en", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });

  return (
    <section className="product-info">
      <div className="product-info-container">
        <h2>Product info:</h2>

        <b className="product-published-at">{`Published at: ${publishedAt}`}</b>
        <p className="product-description">{product.description}</p>
      </div>
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
