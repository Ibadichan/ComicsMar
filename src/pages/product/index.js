import React from "react";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";
import PageLayout from "~/src/common/PageLayout";
import Gallery from "./components/gallery";
import Info from "./components/Info";

function ProductPage({ match, products }) {
  function findProduct() {
    const id = match.params.id;
    return products.filter(product => product.id == id)[0];
  }

  const product = findProduct();

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
  match: PropTypes.object.isRequired,
  products: PropTypes.array.isRequired
};

export default ProductPage;
