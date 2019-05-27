import React from "react";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";
import PageLayout from "~/src/common/PageLayout";
import Gallery from "./components/gallery";
import Info from "./components/Info";

function ProductPage({ product }) {
  if (!product) {
    return <Redirect to="/404" />;
  }

  return (
    <PageLayout title={product.title}>
      <Gallery product={product} />
      <Info product={product} />
    </PageLayout>
  );
}

ProductPage.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired
  }).isRequired
};

export default ProductPage;
