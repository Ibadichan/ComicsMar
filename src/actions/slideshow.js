import {
  FETCH_SLIDESHOW_PHOTOS_REQUEST,
  FETCH_SLIDESHOW_PHOTOS_SUCCESS,
  FETCH_SLIDESHOW_PHOTOS_FAILURE
} from "~/src/config/actionTypes";
import settings from "~/src/config/settings";
const {
  API_CALL,
  contentful: { baseUrl, spaceId, accessToken, environment }
} = settings;

function fetchSlideshowPhotos() {
  return {
    [API_CALL]: {
      method: "GET",
      endpoint: `${baseUrl}/spaces/${spaceId}/environments/${environment}/entries`,
      query: { contentType: "favouriteProduct" },
      headers: { Authorization: `Bearer ${accessToken}` },
      types: [
        FETCH_SLIDESHOW_PHOTOS_REQUEST,
        FETCH_SLIDESHOW_PHOTOS_SUCCESS,
        FETCH_SLIDESHOW_PHOTOS_FAILURE
      ]
    }
  };
}

export { fetchSlideshowPhotos };
