import React from "react";
import PropTypes from "prop-types";
import WrappedImage from "~/src/common/images/WrappedImage";

function GalleryItem({ largePhoto, smallPhoto }) {
  return (
    <li className="product-gallery-item">
      <WrappedImage
        image={smallPhoto}
        wrapper={{
          node: "a",
          attributes: { href: largePhoto.src, title: largePhoto.alt }
        }}
      />
    </li>
  );
}

GalleryItem.propTypes = {
  largePhoto: PropTypes.object.isRequired,
  smallPhoto: PropTypes.object.isRequired
};

export default GalleryItem;
