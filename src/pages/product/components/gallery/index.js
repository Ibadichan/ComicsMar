import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import GalleryContent from "./GalleryContent";
import settings from "config/settings";
const { touchMinDistance } = settings.productGallery;
import {
  changePhotoFull,
  moveGalleryForward,
  moveGalleryBackward,
  toggleGalleryModal
} from "./stateChanges";

class Gallery extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      photoFull: props.product.photoFull,
      galleryPosition: 0,
      modalIsOpen: false
    };
    this._swipe = {};
    this.handleThumbClick = this.handleThumbClick.bind(this);
    this.moveGalleryBackward = this.moveGalleryBackward.bind(this);
    this.moveGalleryForward = this.moveGalleryForward.bind(this);
    this.handleTouchStart = this.handleTouchStart.bind(this);
    this.handleTouchEnd = this.handleTouchEnd.bind(this);
    this.toggleGalleryModal = this.toggleGalleryModal.bind(this);
  }

  componentDidMount() {
    this.props.product.largePhotos.forEach(largePhoto => {
      new Image().src = largePhoto.src;
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.modalIsOpen != prevState.modalIsOpen) {
      document.body.classList.toggle("with-modal");
    }
  }

  componentWillUnmount() {
    document.body.classList.remove("with-modal");
  }

  handleThumbClick(event) {
    event.preventDefault();
    let { currentTarget, target } = event;

    while (target != currentTarget) {
      if (target.nodeName == "A" && target.href != this.state.photoFull.src) {
        this.setState(changePhotoFull.bind(null, target));
        break;
      }

      target = target.parentNode;
    }
  }

  moveGalleryForward() {
    this.setState(moveGalleryForward);
  }

  moveGalleryBackward() {
    this.setState(moveGalleryBackward);
  }

  handleTouchStart(event) {
    const touch = event.touches[0];
    this._swipe.x = touch.clientX;
  }

  handleTouchEnd(event) {
    const touch = event.changedTouches[0];
    const touchDistance = touch.clientX - this._swipe.x;
    if (Math.abs(touchDistance) < touchMinDistance) {
      return;
    }
    touchDistance < 0 ? this.moveGalleryBackward() : this.moveGalleryForward();
  }

  toggleGalleryModal(event) {
    if (event.target === event.currentTarget) {
      this.setState(toggleGalleryModal);
    }
  }

  render() {
    return (
      <GalleryContent
        photoFull={this.state.photoFull}
        product={this.props.product}
        onThumbClick={this.handleThumbClick}
        moveBackward={this.moveGalleryBackward}
        moveForward={this.moveGalleryForward}
        onTouchStart={this.handleTouchStart}
        onTouchEnd={this.handleTouchEnd}
        position={this.state.galleryPosition}
        toggleGalleryModal={this.toggleGalleryModal}
        modalIsOpen={this.state.modalIsOpen}
      />
    );
  }
}

Gallery.propTypes = {
  product: PropTypes.shape({
    photoFull: PropTypes.object.isRequired
  }).isRequired
};

export default Gallery;
