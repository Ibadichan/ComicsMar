import React, { PureComponent } from 'React';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  moveSlideshowSelectively,
  moveSlideshowForward,
  moveSlideshowBackward,
  fetchSlideshowPhotos
} from '~/src/actions/slideshow';
import settings from '~/src/config/settings';
import Arrow from '~/src/common/slider/Arrow';
import Slider from './slideshow/Slider';
import Controls from './slideshow/Controls';
const {
  slideWidth,
  unitOfMeasurement,
  touchMinDistance,
  playInterval
} = settings.slideshow;

class Slideshow extends PureComponent {
  constructor(props) {
    super(props);
    this._swipe = {};
    this._timerId = null;
    this.goToPrevSlide = this.goToPrevSlide.bind(this);
    this.goToNextSlide = this.goToNextSlide.bind(this);
    this.goToSlide = this.goToSlide.bind(this);
    this.handleTouchStart = this.handleTouchStart.bind(this);
    this.handleTouchEnd = this.handleTouchEnd.bind(this);
  }

  componentDidMount() {
    this.props.fetchSlideshowPhotos();
    this.startAutoSlideShow();
  }

  componentWillUnmount() {
    this.stopAutoSlideShow();
  }

  startAutoSlideShow() {
    const self = this;

    self._timerId = setTimeout(function run() {
      self.goToNextSlide(false);
      self._timerId = setTimeout(run, playInterval);
    }, playInterval);
  }

  stopAutoSlideShow() {
    clearTimeout(this._timerId);
  }

  goToPrevSlide() {
    this.stopAutoSlideShow();
    this.props.moveSlideshowBackward();
  }

  goToNextSlide(stopSlideshow = true) {
    stopSlideshow && this.stopAutoSlideShow();
    this.props.moveSlideshowForward();
  }

  handleTouchStart(event) {
    const touch = event.touches[0];
    this._swipe.x = touch.clientX;
  }

  handleTouchEnd(event) {
    const touch = event.changedTouches[0];
    const touchDistance = touch.clientX - this._swipe.x;

    if (Math.abs(touchDistance) < touchMinDistance) { return; }
    this.stopAutoSlideShow();
    touchDistance < 0 ?
      this.goToPrevSlide() :
      this.goToNextSlide()
  }

  goToSlide(event) {
    const { currentTarget, target } = event;

    if (
      target !== currentTarget &&
      target.nodeName == 'BUTTON' &&
      target.dataset.index != this.props.currentIndex
    ) {
      this.stopAutoSlideShow();
      this.props.moveSlideshowSelectively(+target.dataset.index);
    }
  }

  calculateSliderPosition() {
    return this.props.currentIndex * -slideWidth;
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
            slides={this.props.slides}
            sliderPosition={this.calculateSliderPosition()}
            unitOfMeasurement={unitOfMeasurement}
            onTouchStart={this.handleTouchStart}
            onTouchEnd={this.handleTouchEnd}
          />

          <Controls
            currentIndex={this.props.currentIndex}
            slides={this.props.slides}
            onClick={this.goToSlide}
          />
        </div>
      </section>
    );
  }
}

Slideshow.propTypes = {
  currentIndex: PropTypes.number.isRequired,
  slides: PropTypes.array.isRequired,
  moveSlideshowSelectively: PropTypes.func.isRequired,
  moveSlideshowBackward: PropTypes.func.isRequired,
  moveSlideshowForward: PropTypes.func.isRequired,
  fetchSlideshowPhotos: PropTypes.func.isRequired
};

function mapStateToProps({ slideshow }) {
  return {
    currentIndex: slideshow.currentIndex,
    slides: slideshow.photos
  };
}

function mapActionsToProps(dispatch) {
  return {
    moveSlideshowSelectively(currentIndex) {
      dispatch(moveSlideshowSelectively(currentIndex))
    },

    moveSlideshowBackward() {
      dispatch(moveSlideshowBackward());
    },

    moveSlideshowForward() {
      dispatch(moveSlideshowForward());
    },

    fetchSlideshowPhotos() {
      dispatch(fetchSlideshowPhotos());
    }
  };
}

const connectedSlideshow = connect(
  mapStateToProps,
  mapActionsToProps
)(Slideshow);

export default connectedSlideshow;
