import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Image from '../../common/components/product/Image';
import Gallery from './gallery/Gallery';
import OpenGalleryModal from './gallery/OpenGalleryModal';
import GalleryModal from './gallery/GalleryModal';
import { productGallery } from './../../config/settings';
const { slideWidth, slideCount, touchMinDistance } = productGallery;

class Photos extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      photoFull: props.product.photoFull,
      galleryPosition: 0,
      galleryModalIsOpen: false
    };
    this.swipe = {};
    this.handleThumbClick = this.handleThumbClick.bind(this);
    this.moveGalleryBackward = this.moveGalleryBackward.bind(this);
    this.moveGalleryForward = this.moveGalleryForward.bind(this);
    this.handleGalleryTouchStart = this.handleGalleryTouchStart.bind(this);
    this.handleGalleryTouchEnd = this.handleGalleryTouchEnd.bind(this);
    this.toggleGalleryModal = this.toggleGalleryModal.bind(this);
  }

  componentDidMount() {
    const photos = document.querySelectorAll('.product-gallery-list img');
    let img;

    photos.forEach(photo => {
      img = document.createElement('img');
      img.src = photo.parentNode.href;
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.galleryModalIsOpen !== prevState.galleryModalIsOpen) {
      document.body.classList.toggle('with-modal');
    }
  }

  componentWillUnmount() {
    document.body.classList.remove('with-modal');
  }

  handleThumbClick(event) {
    event.preventDefault();
    const currentTarget = event.currentTarget;
    let target = event.target;

    while (target != currentTarget) {
      if (
        target.nodeName == 'A' &&
        target.href != this.state.photoFull.src
      ) {
        this.setState(state => {
          const photoFull = Object.assign(
            {},
            state.photoFull,
            { src: target.href, alt: target.title }
          );
          return { photoFull };
        });
        break;
      }

      target = target.parentNode;
    }
  }

  moveGalleryBackward() {
    this.setState(state => {
      const galleryPosition = Math.min(
        state.galleryPosition + slideWidth * slideCount, 0
      );
      return { galleryPosition };
    });
  }

  moveGalleryForward() {
    this.setState((state, props) => {
      const slides = props.product.smallPhotos;
      const galleryPosition = Math.max(
        state.galleryPosition - slideWidth * slideCount,
        -slideWidth * (slides.length - slideCount)
      );
      return { galleryPosition };
    });
  }

  handleGalleryTouchStart(event) {
    const touch = event.touches[0];
    this.swipe.x = touch.clientX;
  }

  handleGalleryTouchEnd(event) {
    const touch = event.changedTouches[0];
    const touchDistance = touch.clientX - this.swipe.x;
    if (Math.abs(touchDistance) < touchMinDistance) { return; }
    touchDistance < 0 ?
      this.moveGalleryBackward() :
      this.moveGalleryForward()
  }

  toggleGalleryModal(event) {
    if (event.target === event.currentTarget) {
      this.setState(state => ({ galleryModalIsOpen: !state.galleryModalIsOpen }));
    }
  }

  render() {
    const photoFull = this.state.photoFull;
    const galleryProps = {
      product: this.props.product,
      onThumbClick: this.handleThumbClick,
      moveBackward: this.moveGalleryBackward,
      moveForward: this.moveGalleryForward,
      onTouchStart: this.handleGalleryTouchStart,
      onTouchEnd: this.handleGalleryTouchEnd,
      position: this.state.galleryPosition
    };

    return (
      <section className='product-photos'>
        <h2 className='visually-hidden'>Product photos</h2>

        <Image {...photoFull} className='product-photo-full' />
        <Gallery {...galleryProps} />
        <OpenGalleryModal onClick={this.toggleGalleryModal} />

        {
          this.state.galleryModalIsOpen &&
          <GalleryModal
            close={this.toggleGalleryModal}
            galleryProps={galleryProps}
            photoFull={photoFull}
          />
        }
      </section>
    );
  }
}

Photos.propTypes = {
  product: PropTypes.shape({
    photoFull: PropTypes.object.isRequired,
    smallPhotos: PropTypes.array.isRequired
  }).isRequired
};

export default Photos;
