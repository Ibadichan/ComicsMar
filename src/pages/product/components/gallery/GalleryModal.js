import React from "react";
import { createPortal } from "react-dom";
import Button from "common/Button";
import WrappedImage from "common/images/WrappedImage";
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
    <div className="modal-overlay open" onClick={toggleGalleryModal}>
      <section className="product-photos-modal">
        <h2 className="visually-hidden">Product photos in modal</h2>

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

          <Button className="modal-close" onClick={toggleGalleryModal} hideText>
            Close
          </Button>
        </div>
      </section>
    </div>,
    document.getElementById("modal-root")
  );
}

export default GalleryModal;
