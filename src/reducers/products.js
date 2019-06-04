import {
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE
} from "~/src/config/actionTypes";

const INITIAL_STATE = { items: [], isFetching: false };
const assign = Object.assign;

function products(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_PRODUCTS_REQUEST:
      return assign({}, state, { isFetching: true });
    case FETCH_PRODUCTS_SUCCESS:
      return assign({}, state, {
        items: parseProducts(action.response),
        isFetching: false
      });
    case FETCH_PRODUCTS_FAILURE:
      console.error(action.error);
      return assign({}, state, { isFetching: false, error: action.error });
    default:
      return state;
  }
}

function parseProducts({ items, includes }) {
  const assets = includes.Asset;
  const products = items.map(({ fields }) => {
    fields.photoFull = findProductPhotos(assets, fields.photoFull);
    fields.largePhotos = findProductPhotos(assets, fields.largePhotos);
    fields.smallPhotos = findProductPhotos(assets, fields.smallPhotos);

    return fields;
  });

  return products;
}

function findProductPhotos(assets, photos) {
  photos = Array.isArray(photos) ? photos : [photos];

  const parsedPhotos = photos.map(photo => {
    let asset, assetFields;

    for (let i = 0; i < assets.length; i++) {
      asset = assets[i];
      assetFields = asset.fields;

      if (asset.sys.id !== photo.sys.id) {
        continue;
      }
      return {
        src: assetFields.file.url,
        alt: assetFields.title,
        width: assetFields.file.details.image.width,
        height: assetFields.file.details.image.height
      };
    }
  });

  return parsedPhotos.length > 1 ? parsedPhotos : parsedPhotos[0];
}

export default products;
