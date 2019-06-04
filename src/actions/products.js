import {
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE
} from "~/src/config/actionTypes";
import settings from "~/src/config/settings";
const {
  API_CALL,
  contentful: { baseUrl, spaceId, accessToken, environment }
} = settings;

function fetchProducts() {
  return {
    [API_CALL]: {
      method: "GET",
      endpoint: `${baseUrl}/spaces/${spaceId}/environments/${environment}/entries`,
      query: { contentType: "product" },
      headers: { Authorization: `Bearer ${accessToken}` },
      types: [
        FETCH_PRODUCTS_REQUEST,
        FETCH_PRODUCTS_SUCCESS,
        FETCH_PRODUCTS_FAILURE
      ]
    }
  };
}

export { fetchProducts };
