import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  clickOnProductThumb,
  scrollProductThumbsForward,
  scrollProductThumbsBackward,
  toggleProductGalleryModal
} from '~/src/actions/productGallery';
import GalleryContent from './gallery/GalleryContent';
import settings from '~/src/config/settings';
const { slideWidth, slideCount, touchMinDistance } = settings.productGallery;

class Gallery extends PureComponent {
  constructor(props) {
    super(props);
    this._swipe = {};
    this.handleThumbClick = this.handleThumbClick.bind(this);
    this.moveGalleryBackward = this.moveGalleryBackward.bind(this);
    this.moveGalleryForward = this.moveGalleryForward.bind(this);
    this.handleGalleryTouchStart = this.handleGalleryTouchStart.bind(this);
    this.handleGalleryTouchEnd = this.handleGalleryTouchEnd.bind(this);
    this.toggleGalleryModal = this.toggleGalleryModal.bind(this);
  }

  componentDidMount() {
    this.props.clickOnProductThumb(
      this.props.product.photoFull
    );
    this.preloadImages();
  }

  componentDidUpdate(prevProps) {
    if (this.props.galleryModalIsOpen != prevProps.galleryModalIsOpen) {
      document.body.classList.toggle('with-modal');
    }
  }

  componentWillUnmount() {
    document.body.classList.remove('with-modal');
  }

  preloadImages() {
    const photos = document.querySelectorAll('.product-gallery-list img');
    let img;

    photos.forEach(photo => {
      img = document.createElement('img');
      img.src = photo.parentNode.href;
    });
  }

  handleThumbClick(event) {
    event.preventDefault();
    let { currentTarget, target } = event;

    while (target != currentTarget) {
      if (
        target.nodeName == 'A' &&
        target.href != this.props.photoFull.src
      ) {
        this.props.clickOnProductThumb(
          {
            src: target.href,
            alt: target.title,
            width: 300,
            height: 450
          }
        );
        break;
      }

      target = target.parentNode;
    }
  }

  moveGalleryForward() {
    this.props.scrollProductThumbsForward(
      slideWidth,
      slideCount,
      this.props.product.smallPhotos.length
    );
  }

  moveGalleryBackward() {
    this.props.scrollProductThumbsBackward(
      slideWidth,
      slideCount
    );
  }

  handleGalleryTouchStart(event) {
    const touch = event.touches[0];
    this._swipe.x = touch.clientX;
  }

  handleGalleryTouchEnd(event) {
    const touch = event.changedTouches[0];
    const touchDistance = touch.clientX - this._swipe.x;
    if (Math.abs(touchDistance) < touchMinDistance) { return; }
    touchDistance < 0 ?
      this.moveGalleryBackward() :
      this.moveGalleryForward()
  }

  toggleGalleryModal(event) {
    if (event.target === event.currentTarget) {
      this.props.toggleProductGalleryModal();
    }
  }

  render() {
    return (
      <GalleryContent
        photoFull={this.props.photoFull}
        product={this.props.product}
        onThumbClick={this.handleThumbClick}
        moveBackward={this.moveGalleryBackward}
        moveForward={this.moveGalleryForward}
        onTouchStart={this.handleGalleryTouchStart}
        onTouchEnd={this.handleGalleryTouchEnd}
        position={this.props.galleryPosition}
        toggleGalleryModal={this.toggleGalleryModal}
        galleryModalIsOpen={this.props.galleryModalIsOpen}
      />
    );
  }
}

Gallery.propTypes = {
  product: PropTypes.shape({
    photoFull: PropTypes.object.isRequired,
    smallPhotos: PropTypes.array.isRequired
  }).isRequired,
  photoFull: PropTypes.object.isRequired,
  galleryPosition: PropTypes.number.isRequired,
  galleryModalIsOpen: PropTypes.bool.isRequired,
  clickOnProductThumb: PropTypes.func.isRequired,
  scrollProductThumbsForward: PropTypes.func.isRequired,
  scrollProductThumbsBackward: PropTypes.func.isRequired,
  toggleProductGalleryModal: PropTypes.func.isRequired
};

function mapStateToProps({ productGallery }) {
  const {
    photoFull,
    galleryPosition,
    galleryModalIsOpen
  } = productGallery;

  return {
    photoFull,
    galleryPosition,
    galleryModalIsOpen
  };
}

function mapActionsToProps(dispatch) {
  return {
    clickOnProductThumb(photoFull) {
      dispatch(clickOnProductThumb(photoFull));
    },

    scrollProductThumbsForward(slideWidth, slideCount, slidesLength) {
      dispatch(
        scrollProductThumbsForward(
          slideWidth,
          slideCount,
          slidesLength
        )
      );
    },

    scrollProductThumbsBackward(slideWidth, slideCount) {
      dispatch(
        scrollProductThumbsBackward(slideWidth, slideCount)
      );
    },

    toggleProductGalleryModal() {
      dispatch(toggleProductGalleryModal());
    }
  };
}

const connectedGallery = connect(
  mapStateToProps,
  mapActionsToProps
)(Gallery);

export default connectedGallery;
