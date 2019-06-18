import React from "react";
import PropTypes from "prop-types";
import Button from "~/src/common/Button";
import WrappedImage from "~/src/common/images/WrappedImage";
import GalleryList from "./GalleryList";
import GalleryModal from "./GalleryModal";

function GalleryContent(props) {
  const {
    product,
    onThumbClick,
    moveForward,
    moveBackward,
    photoFull,
    onTouchStart,
    onTouchEnd,
    position,
    toggleGalleryModal
  } = props;

  return (
    <section className="product-photos">
      <h2 className="visually-hidden">Product photos</h2>

      <div className="product-photos-container">
        <WrappedImage
          image={photoFull}
          wrapper={{
            node: "p",
            attributes: { className: "product-photo-full" }
          }}
        />

        <div className="product-gallery">
          <Button
            className="product-gallery-prev"
            onClick={moveBackward}
            hideText
          >
            Prev
          </Button>

          <GalleryList
            product={product}
            onThumbClick={onThumbClick}
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
            position={position}
          />

          <Button
            className="product-gallery-next"
            onClick={moveForward}
            hideText
          >
            Next
          </Button>
        </div>

        <Button className="button open-fullscreen" onClick={toggleGalleryModal}>
          Open on fullscreen
        </Button>

        <GalleryModal {...props} />
      </div>
    </section>
  );
}

GalleryContent.propTypes = {
  product: PropTypes.object.isRequired,
  onThumbClick: PropTypes.func.isRequired,
  moveBackward: PropTypes.func.isRequired,
  moveForward: PropTypes.func.isRequired,
  onTouchStart: PropTypes.func.isRequired,
  onTouchEnd: PropTypes.func.isRequired,
  position: PropTypes.number.isRequired,
  photoFull: PropTypes.object.isRequired,
  toggleGalleryModal: PropTypes.func.isRequired,
  modalIsOpen: PropTypes.bool.isRequired
};

export default GalleryContent;
