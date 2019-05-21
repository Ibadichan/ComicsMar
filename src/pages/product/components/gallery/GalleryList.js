import React from "react";
import PropTypes from "prop-types";
import GalleryItem from "./GalleryItem";

function GalleryList(props) {
  const { product, onThumbClick, onTouchStart, onTouchEnd, position } = props;
  const { smallPhotos, largePhotos } = product;

  return (
    <div className="product-gallery-list-wrapper">
      <ul
        className="product-gallery-list"
        onClick={onThumbClick}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        style={{ transform: `translateX(${position}px)` }}
      >
        {smallPhotos.map((smallPhoto, i) => (
          <GalleryItem
            key={i}
            largePhoto={largePhotos[i]}
            smallPhoto={smallPhoto}
          />
        ))}
      </ul>
    </div>
  );
}

GalleryList.propTypes = {
  product: PropTypes.shape({
    largePhotos: PropTypes.array.isRequired,
    smallPhotos: PropTypes.array.isRequired
  }).isRequired,
  onThumbClick: PropTypes.func.isRequired,
  onTouchStart: PropTypes.func.isRequired,
  onTouchEnd: PropTypes.func.isRequired,
  position: PropTypes.number.isRequired
};

export default GalleryList;
