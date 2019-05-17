import request from "superagent";
import settings from "~/src/config/settings";
const { baseUrl, spaceId, accessToken, environment } = settings.contentful;
import {
  FETCH_SLIDESHOW_PHOTOS_SUCCESS,
  FETCH_SLIDESHOW_PHOTOS_FAILURE
} from "~/src/config/actionTypes";

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
      .query({ content_type: "favouriteProduct" })
      .set("Authorization", `Bearer ${accessToken}`)
      .then(response => dispatch(fetchSlideshowPhotosSuccess(response.body)))
      .catch(error => dispatch(fetchSlideshowPhotosFailure(error)));
  };
}

export { fetchSlideshowPhotos };
