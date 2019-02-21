import {
  MOVE_SLIDESHOW_SELECTIVELY,
  MOVE_SLIDESHOW_FORWARD,
  MOVE_SLIDESHOW_BACKWARD,
  FETCH_SLIDESHOW_PHOTOS_SUCCESS,
  FETCH_SLIDESHOW_PHOTOS_FAILURE
} from '~/src/config/actionTypes';

const INITIAL_STATE = { photos: [], currentIndex: 0 };
const assign = Object.assign;

function slideshow(state = INITIAL_STATE, action) {
  const { currentIndex: oldCurrentIndex, photos } = state;
  let currentIndex;

  switch (action.type) {
    case MOVE_SLIDESHOW_SELECTIVELY:
      return assign({}, state, { currentIndex: action.currentIndex });
    case MOVE_SLIDESHOW_BACKWARD:
      currentIndex = (
        oldCurrentIndex == 0 ?
          photos.length - 1 :
          oldCurrentIndex - 1
      );

      return assign({}, state, { currentIndex });
    case MOVE_SLIDESHOW_FORWARD:
      currentIndex = (
        oldCurrentIndex == photos.length - 1 ?
        0 :
        oldCurrentIndex + 1
      );

      return assign({}, state, { currentIndex });
    case FETCH_SLIDESHOW_PHOTOS_SUCCESS:
      return assign({}, state, { photos: parsePhotos(action.photos) });
    case FETCH_SLIDESHOW_PHOTOS_FAILURE:
      console.error(action.error);
      return assign({}, state, { error: action.error });
    default:
      return state;
  }
}

function parsePhotos({ items, includes }) {
  const assets = includes.Asset;
  let asset, assetFields, photoId;

  const photos = items.map(({ fields }) => {
    photoId = fields.photo.sys.id;

    for (let i = 0; i < assets.length; i++) {
      asset = assets[i];
      assetFields = asset.fields;

      if (asset.sys.id !== photoId) { continue };
      fields.photo = {
        src: assetFields.file.url,
        alt: assetFields.title,
        width: assetFields.file.details.image.width,
        height: assetFields.file.details.image.height
      };
      return fields;
    };
  });

  return photos;
}

export default slideshow;
