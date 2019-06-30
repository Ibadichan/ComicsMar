import React from "react";
import PropTypes from "prop-types";
import PageLayout from "common/PageLayout";
import NoticeMessage from "common/NoticeMessage";
import Slideshow from "./components/slideshow/Container";
import CatalogList from "./components/CatalogList";

function CatalogPage({ location: { state }, products }) {
  return (
    <PageLayout title="ComicsMar - World of comics">
      {state && state.message && (
        <NoticeMessage text={state.message} className={state.className} />
      )}
      <Slideshow />
      <CatalogList products={products} />
    </PageLayout>
  );
}

CatalogPage.propTypes = {
  location: PropTypes.object.isRequired,
  products: PropTypes.array.isRequired
};

export default CatalogPage;
