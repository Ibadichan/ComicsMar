import React from "react";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";
import PageLayout from "common/PageLayout";
import Gallery from "./components/gallery";
import Info from "./components/Info";

function ProductPage({ product }) {
  if (!product) {
    return <Redirect to="/404" />;
  }

  return (
    <PageLayout title={product.title}>
      <div className="product-columns">
        <Gallery product={product} />
        <Info product={product} />
      </div>
    </PageLayout>
  );
}

ProductPage.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired
  }).isRequired
};

export default ProductPage;
