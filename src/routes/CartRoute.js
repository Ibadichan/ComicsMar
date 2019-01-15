import { cartPath } from '../helpers/routes';
import CartPage from '../pages/cart/index';

const CartRoute = {
  exact: true,
  strict: true,
  path: cartPath(),
  component: CartPage
};

export default CartRoute;
