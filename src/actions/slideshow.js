import {
  FETCH_SLIDESHOW_PHOTOS_REQUEST,
  FETCH_SLIDESHOW_PHOTOS_SUCCESS,
  FETCH_SLIDESHOW_PHOTOS_FAILURE
} from "config/actionTypes";
import settings from "config/settings";
const {
  API_CALL,
  contentful: { deliveryBaseUrl, spaceId, deliveryAccessToken, environment }
} = settings;

function fetchSlideshowPhotos() {
  return {
    [API_CALL]: {
      method: "GET",
      endpoint: `${deliveryBaseUrl}/spaces/${spaceId}/environments/${environment}/entries`,
      query: { contentType: "favouriteProduct" },
      headers: { Authorization: `Bearer ${deliveryAccessToken}` },
      types: [
        FETCH_SLIDESHOW_PHOTOS_REQUEST,
        FETCH_SLIDESHOW_PHOTOS_SUCCESS,
        FETCH_SLIDESHOW_PHOTOS_FAILURE
      ]
    }
  };
}

export { fetchSlideshowPhotos };
