import {
  CLICK_ON_PRODUCT_THUMB,
  SCROLL_PRODUCT_THUMBS_FORWARD,
  SCROLL_PRODUCT_THUMBS_BACKWARD,
  TOGGLE_PRODUCT_GALLERY_MODAL
} from '~/src/config/actionTypes';

function clickOnProductThumb(photoFull) {
  return {
    type: CLICK_ON_PRODUCT_THUMB,
    photoFull
  };
}

function scrollProductThumbsForward(slideWidth, slideCount, slidesLength) {
  return {
    type: SCROLL_PRODUCT_THUMBS_FORWARD,
    slideWidth,
    slideCount,
    slidesLength
  };
}

function scrollProductThumbsBackward(slideWidth, slideCount) {
  return {
    type: SCROLL_PRODUCT_THUMBS_BACKWARD,
    slideWidth,
    slideCount
  };
}

function toggleProductGalleryModal() {
  return {
    type: TOGGLE_PRODUCT_GALLERY_MODAL
  };
}

export {
  clickOnProductThumb,
  scrollProductThumbsForward,
  scrollProductThumbsBackward,
  toggleProductGalleryModal
};
