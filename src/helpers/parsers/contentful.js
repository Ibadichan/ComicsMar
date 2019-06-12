function findPhotoById(id, assets) {
  let asset, assetFields;

  for (let i = 0; i < assets.length; i++) {
    asset = assets[i];
    assetFields = asset.fields;

    if (asset.sys.id !== id) continue;

    return {
      src: assetFields.file.url,
      alt: assetFields.title,
      width: assetFields.file.details.image.width,
      height: assetFields.file.details.image.height
    };
  }
}

function findPhotos(photos, assets) {
  return photos.map(photo => findPhotoById(photo.sys.id, assets));
}

export { findPhotoById, findPhotos };
