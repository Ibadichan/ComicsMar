import React from "react";
import { createPortal } from "react-dom";
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
    position,
    modalIsOpen
  } = props;

  const open = modalIsOpen ? "open" : "";

  return createPortal(
    <div className={`modal-overlay ${open}`} onClick={toggleGalleryModal}>
      <section className={`product-photos-modal ${open}`}>
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