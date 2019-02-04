import React, { PureComponent } from 'React';
import Arrow from './../../../common/components/slider/Arrow';
import Slider from './Slider';
import Controls from './Controls';
import request from 'superagent';
import settings from './../../../config/settings';
const { baseUrl, spaceId, accessToken, environment  } = settings.contentful;
const {
  slideWidth,
  unitOfMeasurement,
  touchMinDistance,
  playInterval
} = settings.slideShow;

class SlideShow extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { slides: [], currentIndex: 0 };
    this.swipe = {};
    this.timerId = null;
    this.sliderPosition = 0;
    this.goToPrevSlide = this.goToPrevSlide.bind(this);
    this.goToNextSlide = this.goToNextSlide.bind(this);
    this.goToSlide = this.goToSlide.bind(this);
    this.handleTouchStart = this.handleTouchStart.bind(this);
    this.handleTouchEnd = this.handleTouchEnd.bind(this);
  }

  componentDidMount() {
    request
      .get(`${baseUrl}/spaces/${spaceId}/environments/${environment}/entries`)
      .query({ content_type: 'favouriteProduct' })
      .set('Authorization', `Bearer ${accessToken}`)
      .then(response => this.parseSlides(response.body))
      .then(slides => this.setState(() => ({ slides })))
      .catch(error => console.error(error));
    this.startAutoSlideShow();
  }

  componentWillUnmount() {
    this.stopAutoSlideShow();
  }

  startAutoSlideShow() {
    const self = this;

    self.timerId = setTimeout(function run() {
      self.goToNextSlide(false);
      self.timerId = setTimeout(run, playInterval);
    }, playInterval);
  }

  stopAutoSlideShow() {
    clearTimeout(this.timerId);
  }

  parseSlides({ items, includes }) {
    const assets = includes.Asset;
    let asset, assetFields, photoId;

    const slides = items.map(({ fields }) => {
      photoId = fields.photo.sys.id;

      for (let i = 0; i < assets.length; i++) {
        asset = assets[i];
        assetFields = asset.fields;

        if (asset.sys.id !== photoId) { continue };
        fields.photo = {
          src: assetFields.file.url,
          alt: assetFields.title,
          width: assetFields.file.details.image.width,
          height: assetFields.file.details.image.height
        };
        return fields;
      };
    });

    return slides;
  }

  goToPrevSlide() {
    this.stopAutoSlideShow();
    const { currentIndex: oldCurrentIndex, slides } = this.state;
    let newCurrentIndex;

    if (oldCurrentIndex == 0) {
      newCurrentIndex = slides.length - 1;
      this.sliderPosition = newCurrentIndex * -slideWidth;
    } else {
      newCurrentIndex = oldCurrentIndex - 1;
      this.sliderPosition += slideWidth;
    }

    this.setState(() => ({ currentIndex: newCurrentIndex }));
  }

  goToNextSlide(stopSlideshow = true) {
    stopSlideshow && this.stopAutoSlideShow();

    const { currentIndex: oldCurrentIndex, slides } = this.state;
    let newCurrentIndex;

    if (oldCurrentIndex == slides.length - 1) {
      this.sliderPosition = newCurrentIndex = 0;
    } else {
      newCurrentIndex = oldCurrentIndex + 1;
      this.sliderPosition -= slideWidth;
    }

    this.setState(() => ({ currentIndex: newCurrentIndex }));
  }

  handleTouchStart(event) {
    const touch = event.touches[0];
    this.swipe.x = touch.clientX;
  }

  handleTouchEnd(event) {
    const touch = event.changedTouches[0];
    const touchDistance = touch.clientX - this.swipe.x;

    if (Math.abs(touchDistance) < touchMinDistance) { return; }
    this.stopAutoSlideShow();
    touchDistance < 0 ?
      this.goToPrevSlide() :
      this.goToNextSlide()
  }

  goToSlide(event) {
    const currentTarget = event.currentTarget;
    const target = event.target;

    if (
      target !== currentTarget &&
      target.nodeName == 'BUTTON' &&
      target.dataset.index != this.state.currentIndex
    ) {
      this.stopAutoSlideShow();
      const newCurrentIndex = +target.dataset.index;
      this.sliderPosition = newCurrentIndex * -slideWidth;

      this.setState(() => ({ currentIndex: newCurrentIndex }));
    }
  }

  render() {
    return (
      <section className='slideshow'>
        <h2 className='visually-hidden'>Popular product</h2>

        <div className='slideshow-container'>
          <Arrow
            className='slideshow-prev'
            onClick={this.goToPrevSlide}
          >
            Prev
          </Arrow>

          <Arrow
            className='slideshow-next'
            onClick={this.goToNextSlide}
          >
            Next
          </Arrow>

          <Slider
            slides={this.state.slides}
            sliderPosition={this.sliderPosition}
            unitOfMeasurement={unitOfMeasurement}
            onTouchStart={this.handleTouchStart}
            onTouchEnd={this.handleTouchEnd}
          />

          <Controls
            currentIndex={this.state.currentIndex}
            slides={this.state.slides}
            onClick={this.goToSlide}
          />
        </div>
      </section>
    );
  }
}

export default SlideShow;
