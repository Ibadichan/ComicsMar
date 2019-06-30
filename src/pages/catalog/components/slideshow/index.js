import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import Slider from "./components/Slider";
import settings from "config/settings";
const {
  slideWidth,
  unitOfMeasurement,
  touchMinDistance,
  playInterval
} = settings.slideshow;
import { goToPrevSlide, goToNextSlide } from "./stateChanges";

class Slideshow extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { currentIndex: 0 };
    this._swipe = {};
    this._timerId = null;
    this.goToPrevSlide = this.goToPrevSlide.bind(this);
    this.goToNextSlide = this.goToNextSlide.bind(this);
    this.goToSlide = this.goToSlide.bind(this);
    this.handleTouchStart = this.handleTouchStart.bind(this);
    this.handleTouchEnd = this.handleTouchEnd.bind(this);
  }

  componentDidMount() {
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
    this.setState(goToPrevSlide);
  }

  goToNextSlide(stopSlideshow = true) {
    stopSlideshow && this.stopAutoSlideShow();
    this.setState(goToNextSlide);
  }

  handleTouchStart(event) {
    const touch = event.touches[0];
    this._swipe.x = touch.clientX;
  }

  handleTouchEnd(event) {
    const touch = event.changedTouches[0];
    const touchDistance = touch.clientX - this._swipe.x;

    if (Math.abs(touchDistance) < touchMinDistance) {
      return null;
    }
    touchDistance < 0 ? this.goToPrevSlide() : this.goToNextSlide();
  }

  goToSlide(event) {
    const { currentTarget, target } = event;

    if (
      target !== currentTarget &&
      target.nodeName == "BUTTON" &&
      target.dataset.index != this.state.currentIndex
    ) {
      this.stopAutoSlideShow();
      this.setState({ currentIndex: +target.dataset.index });
    }
  }

  calculateSliderPosition() {
    return this.state.currentIndex * -slideWidth;
  }

  render() {
    return (
      <Slider
        goToSlide={this.goToSlide}
        goToPrevSlide={this.goToPrevSlide}
        goToNextSlide={this.goToNextSlide}
        slides={this.props.slides}
        sliderPosition={this.calculateSliderPosition()}
        unitOfMeasurement={unitOfMeasurement}
        onTouchStart={this.handleTouchStart}
        onTouchEnd={this.handleTouchEnd}
        currentIndex={this.state.currentIndex}
      />
    );
  }
}

Slideshow.propTypes = {
  slides: PropTypes.array.isRequired
};

export default Slideshow;
