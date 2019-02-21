import {
  MOVE_SLIDESHOW_SELECTIVELY,
  MOVE_SLIDESHOW_FORWARD,
  MOVE_SLIDESHOW_BACKWARD,
  FETCH_SLIDESHOW_PHOTOS_SUCCESS,
  FETCH_SLIDESHOW_PHOTOS_FAILURE
} from '~/src/config/actionTypes';
import request from 'superagent';
import settings from '~/src/config/settings';
const {
  baseUrl,
  spaceId,
  accessToken,
  environment
} = settings.contentful;

function moveSlideshowSelectively(currentIndex) {
  return {
    type: MOVE_SLIDESHOW_SELECTIVELY,
    currentIndex
  };
}

function moveSlideshowForward() {
  return {
    type: MOVE_SLIDESHOW_FORWARD
  };
}

function moveSlideshowBackward() {
  return {
    type: MOVE_SLIDESHOW_BACKWARD
  };
}

function fetchSlideshowPhotosSuccess(photos) {
  return {
    type: FETCH_SLIDESHOW_PHOTOS_SUCCESS,
    photos
  };
}

function fetchSlideshowPhotosFailure(error) {
  return {
    type: FETCH_SLIDESHOW_PHOTOS_FAILURE,
    error
  };
}

function fetchSlideshowPhotos() {
  return function(dispatch) {
    request
      .get(`${baseUrl}/spaces/${spaceId}/environments/${environment}/entries`)
      .query({ content_type: 'favouriteProduct' })
      .set('Authorization', `Bearer ${accessToken}`)
      .then(response => dispatch(fetchSlideshowPhotosSuccess(response.body)))
      .catch(error => dispatch(fetchSlideshowPhotosFailure(error)));
  }
}

export {
  moveSlideshowSelectively,
  moveSlideshowForward,
  moveSlideshowBackward,
  fetchSlideshowPhotos
};
