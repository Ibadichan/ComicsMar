const rootPath = () => '/';
const productPath = (id = ':id') => `/products/${id}`;
const cartPath = () => '/cart';
const contactPath = () => '/contacts';

export {
  rootPath,
  productPath,
  cartPath,
  contactPath
};
