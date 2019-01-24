import React, { PureComponent } from 'react';
import Image from '../../common/components/product/Image';
import Gallery from './gallery/Gallery';
import PropTypes from 'prop-types';
import { productGallery } from './../../config/settings';

const slideWidth = productGallery.slideWidth;
const slideCount = productGallery.slideCount;

class Photos extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      photoFull: props.product.photoFull,
      galleryPosition: 0
    };

    this.handleThumbClick = this.handleThumbClick.bind(this);
    this.moveGalleryBackward = this.moveGalleryBackward.bind(this);
    this.moveGalleryForward = this.moveGalleryForward.bind(this);
  }

  componentDidMount() {
    const photos = document.querySelectorAll('.product-gallery-list img');
    let img;

    photos.forEach(photo => {
      img = document.createElement('img');
      img.src = photo.parentNode.href;
    });
  }

  handleThumbClick(event) {
    event.preventDefault();
    const currentTarget = event.currentTarget;
    let target = event.target;

    while (target != currentTarget) {
      if (target.nodeName == 'A') {
        const photoFull = Object.assign(
          {},
          this.state.photoFull,
          { src: target.href, alt: target.title }
        );
        this.setState({ photoFull });
        break;
      }

      target = target.parentNode;
    }
  }

  moveGalleryBackward() {
    const galleryPosition = Math.min(
      this.state.galleryPosition + slideWidth * slideCount, 0
    );

    this.setState({ galleryPosition });
  }

  moveGalleryForward() {
    const slides = document.querySelectorAll('.product-gallery-list li');
    const galleryPosition = Math.max(
      this.state.galleryPosition - slideWidth * slideCount,
      -slideWidth * (slides.length - slideCount)
    );

    this.setState({ galleryPosition });
  }

  render() {
    const product = this.props.product;
    const photoFull = this.state.photoFull;
    const galleryPosition = this.state.galleryPosition;

    return (
      <section className='product-photos'>
        <h2 className='visually-hidden'>Product photos</h2>

        <Image {...photoFull} className='product-photo-full' />
        <Gallery
          product={product}
          onThumbClick={this.handleThumbClick}
          moveBackward={this.moveGalleryBackward}
          moveForward={this.moveGalleryForward}
          position={galleryPosition}
        />
      </section>
    );
  }
}

Photos.propTypes = {
  product: PropTypes.shape({
    photoFull: PropTypes.object.isRequired
  }).isRequired
};

export default Photos;
