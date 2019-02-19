import { cartPath } from '~/src/helpers/routes';
import CartPage from '~/src/pages/cart';

const CartRoute = {
  exact: true,
  strict: true,
  path: cartPath(),
  component: CartPage
};

export default CartRoute;
