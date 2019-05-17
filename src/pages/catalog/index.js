import React from "react";
import PropTypes from "prop-types";
import PageLayout from "~/src/common/PageLayout";
import NoticeMessage from "~/src/common/NoticeMessage";
import Slideshow from "./components/slideshow/Container";
import CatalogList from "./components/CatalogList";

function CatalogPage({ location, products }) {
  return (
    <PageLayout title="ComicsMar - World of comics">
      {location.state && location.state.message && (
        <NoticeMessage
          text={location.state.message}
          className="alert-success"
        />
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
