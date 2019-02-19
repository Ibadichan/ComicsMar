import request from 'superagent';
import settings from '~/src/config/settings';
import {
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE
} from '~/src/config/actionTypes';

const {
  baseUrl,
  spaceId,
  accessToken,
  environment
} = settings.contentful;

function fetchProductsRequest() {
  return {
    type: FETCH_PRODUCTS_REQUEST
  };
}

function fetchProductsSuccess(products) {
  return {
    type: FETCH_PRODUCTS_SUCCESS,
    products
  };
}

function fetchProductsFailure(error) {
  return {
    type: FETCH_PRODUCTS_FAILURE,
    error
  };
}

function fetchProducts() {
  return function(dispatch) {
    dispatch(fetchProductsRequest());

    return (
      request
        .get(`${baseUrl}/spaces/${spaceId}/environments/${environment}/entries`)
        .query({ content_type: 'product' })
        .set('Authorization', `Bearer ${accessToken}`)
        .then(response => dispatch(fetchProductsSuccess(response.body)))
        .catch(error => dispatch(fetchProductsFailure(error)))
    );
  }
}

export { fetchProducts };
