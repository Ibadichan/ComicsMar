import {
  FETCH_SLIDESHOW_PHOTOS_REQUEST,
  FETCH_SLIDESHOW_PHOTOS_SUCCESS,
  FETCH_SLIDESHOW_PHOTOS_FAILURE
} from "../config/actionTypes";
import { updateState, createReducer } from "../helpers/redux/reducerUtilities";
import { findPhotoById } from "../helpers/parsers/contentful";

const slideshow = createReducer(
  { items: [], isFetching: false },
  {
    [FETCH_SLIDESHOW_PHOTOS_REQUEST]: fetchSlideshowPhotosRequest,
    [FETCH_SLIDESHOW_PHOTOS_SUCCESS]: fetchSlideshowPhotosSuccess,
    [FETCH_SLIDESHOW_PHOTOS_FAILURE]: fetchSlideshowPhotosFailure
  }
);

function fetchSlideshowPhotosRequest(state) {
  return updateState(state, { isFetching: true });
}

function fetchSlideshowPhotosSuccess(state, { response }) {
  const { items, includes } = response;
  const slides = items.map(({ fields }) => {
    fields.photo = findPhotoById(fields.photo.sys.id, includes.Asset);
    return fields;
  });

  return updateState(state, {
    items: slides,
    isFetching: false
  });
}

function fetchSlideshowPhotosFailure(state, { error }) {
  console.error(error);
  return updateState(state, { error, isFetching: false });
}

export default slideshow;
