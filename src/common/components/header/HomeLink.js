import React from 'react';
import NavLink from '../linkWrappers/NavLink';
import { rootPath } from '../../../helpers/routes';

function HomeLink() {
  return (
    <NavLink to={rootPath()} activeClassName='disabled'>
      Home
    </NavLink>
  );
}

export default HomeLink;
