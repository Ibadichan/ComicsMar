import {
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE
} from "../config/actionTypes";
import { updateState, createReducer } from "../helpers/redux/reducerUtilities";
import { findPhotoById, findPhotos } from "../helpers/parsers/contentful";

const products = createReducer(
  { items: [], isFetching: false },
  {
    [FETCH_PRODUCTS_REQUEST]: fetchProductsRequest,
    [FETCH_PRODUCTS_SUCCESS]: fetchProductsSuccess,
    [FETCH_PRODUCTS_FAILURE]: fetchProductsFailure
  }
);

function fetchProductsRequest(state) {
  return updateState(state, { isFetching: true });
}

function fetchProductsSuccess(state, action) {
  const { items, includes } = action.response;
  const assets = includes.Asset;

  const products = items.map(({ fields }) => {
    fields.photoFull = findPhotoById(fields.photoFull.sys.id, assets);
    fields.largePhotos = findPhotos(fields.largePhotos, assets);
    fields.smallPhotos = findPhotos(fields.smallPhotos, assets);

    return fields;
  });

  return updateState(state, {
    items: products,
    isFetching: false
  });
}

function fetchProductsFailure(state, { error }) {
  console.error(error);
  return updateState(state, { error, isFetching: false });
}

export default products;
