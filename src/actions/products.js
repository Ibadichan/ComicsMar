import {
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
  ORDER_PRODUCT_REQUEST,
  ORDER_PRODUCT_SUCCESS,
  ORDER_PRODUCT_FAILURE
} from "~/src/config/actionTypes";
import settings from "~/src/config/settings";
const {
  API_CALL,
  contentful: {
    deliveryBaseUrl,
    managementBaseUrl,
    deliveryAccessToken,
    managementAccessToken,
    spaceId,
    environment,
    contentType
  }
} = settings;

function fetchProducts() {
  return {
    [API_CALL]: {
      method: "GET",
      endpoint: `${deliveryBaseUrl}/spaces/${spaceId}/environments/${environment}/entries`,
      query: { contentType: "product" },
      headers: { Authorization: `Bearer ${deliveryAccessToken}` },
      types: [
        FETCH_PRODUCTS_REQUEST,
        FETCH_PRODUCTS_SUCCESS,
        FETCH_PRODUCTS_FAILURE
      ]
    }
  };
}

function orderProduct(payload) {
  return {
    [API_CALL]: {
      method: "POST",
      endpoint: `${managementBaseUrl}/spaces/${spaceId}/environments/${environment}/entries`,
      payload,
      headers: {
        Authorization: `Bearer ${managementAccessToken}`,
        "X-Contentful-Content-Type": "order",
        "Content-Type": contentType
      },
      types: [
        ORDER_PRODUCT_REQUEST,
        ORDER_PRODUCT_SUCCESS,
        ORDER_PRODUCT_FAILURE
      ]
    }
  };
}
export { fetchProducts, orderProduct };
