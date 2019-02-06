const rootPath = () => '/';
const productPath = (id = ':id') => `/products/${id}`;
const cartPath = () => '/cart';
const contactPath = () => '/contacts';
const productPhotoPath = (product_id = ':product_id', id = ':id') => (
  `/products/${product_id}/photos/${id}`
);

export {
  rootPath,
  productPath,
  productPhotoPath,
  cartPath,
  contactPath
};
