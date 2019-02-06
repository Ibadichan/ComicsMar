import React from 'react';
import NavLink from '../linkWrappers/NavLink';
import { rootPath } from '../../../helpers/routes';
import logo from '../../../../img/logo.svg';

function HomeLink() {
  return (
    <NavLink
      to={rootPath()}
      className='header-logo'
      activeClassName='disabled'
    >
      <img src={logo} width='300' height='113' alt='ComicsMar logo' />
    </NavLink>
  );
}

export default HomeLink;
