import React from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";
import Button from "~/src/common/Button";
import WrappedImage from "~/src/common/images/WrappedImage";
import GalleryList from "./GalleryList";

function GalleryModal(props) {
  const {
    toggleGalleryModal,
    photoFull,
    moveForward,
    moveBackward,
    product,
    onThumbClick,
    onTouchStart,
    onTouchEnd,
    position
  } = props;

  return createPortal(
    <div className="modal-overlay" onClick={toggleGalleryModal}>
      <section className="product-photos-modal">
        <h2 className="visually-hidden">Product photos in modal</h2>

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

        <Button className="modal-close" onClick={toggleGalleryModal} hideText>
          Close
        </Button>
      </section>
    </div>,
    document.getElementById("modal-root")
  );
}

GalleryModal.propTypes = {
  product: PropTypes.object.isRequired,
  onThumbClick: PropTypes.func.isRequired,
  moveBackward: PropTypes.func.isRequired,
  moveForward: PropTypes.func.isRequired,
  onTouchStart: PropTypes.func.isRequired,
  onTouchEnd: PropTypes.func.isRequired,
  position: PropTypes.number.isRequired,
  photoFull: PropTypes.object.isRequired,
  toggleGalleryModal: PropTypes.func.isRequired,
  galleryModalIsOpen: PropTypes.bool.isRequired
};

export default GalleryModal;
