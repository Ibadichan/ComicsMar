import settings from "config/settings";
const { slideWidth, slideCount } = settings.productGallery;

function changePhotoFull(target, prevState) {
  return {
    photoFull: Object.assign({}, prevState.photoFull, {
      src: target.href,
      alt: target.title
    })
  };
}

function moveGalleryForward(prevState, props) {
  const galleryPosition = Math.max(
    prevState.galleryPosition - slideWidth * slideCount,
    -slideWidth * (props.product.smallPhotos.length - slideCount)
  );

  return { galleryPosition };
}

function moveGalleryBackward(prevState) {
  const galleryPosition = Math.min(
    prevState.galleryPosition + slideWidth * slideCount,
    0
  );
  return { galleryPosition };
}

function toggleGalleryModal(prevState) {
  return { modalIsOpen: !prevState.modalIsOpen };
}

export {
  changePhotoFull,
  moveGalleryForward,
  moveGalleryBackward,
  toggleGalleryModal
};
