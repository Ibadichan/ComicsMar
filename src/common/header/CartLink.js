import React from 'react';
import PropTypes from 'prop-types';
import NavLink from '../linkWrappers/NavLink';
import { cartPath } from '~/src/helpers/routes';

function CartLink({ purchases }) {
  return (
    <NavLink to={cartPath()} activeClassName='active'>
      <span
        className='cart-link-counter'
        data-badge={purchases.length}
      >
        My cart
      </span>
    </NavLink>
  );
}

CartLink.propTypes = {
  purchases: PropTypes.array.isRequired
};

export default CartLink;
