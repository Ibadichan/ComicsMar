import {
  CLICK_ON_PRODUCT_THUMB,
  SCROLL_PRODUCT_THUMBS_FORWARD,
  SCROLL_PRODUCT_THUMBS_BACKWARD,
  TOGGLE_PRODUCT_GALLERY_MODAL
} from '~/src/config/actionTypes';

const INITIAL_STATE = {
  photoFull: { src: '' },
  galleryPosition: 0,
  galleryModalIsOpen: false
};
const assign = Object.assign;

function productGallery(state = INITIAL_STATE,  action) {
  let galleryPosition;
  const { slideWidth, slideCount, slidesLength, photoFull } = action;

  switch (action.type) {
    case CLICK_ON_PRODUCT_THUMB:
      return assign({}, state, { photoFull });
    case SCROLL_PRODUCT_THUMBS_FORWARD:
      galleryPosition = Math.max(
        state.galleryPosition - slideWidth * slideCount,
        -slideWidth * (slidesLength - slideCount)
      );
      return assign({}, state, { galleryPosition });
    case SCROLL_PRODUCT_THUMBS_BACKWARD:
      galleryPosition = Math.min(
        state.galleryPosition + slideWidth * slideCount, 0
      );
      return assign({}, state, { galleryPosition });
    case TOGGLE_PRODUCT_GALLERY_MODAL:
      return assign(
        {},
        state,
        { galleryModalIsOpen: !state.galleryModalIsOpen }
      );
    default:
      return state;
  }
}

export default productGallery;
