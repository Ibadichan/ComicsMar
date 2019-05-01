import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import CartLink from './CartLink';
import HomeLink from './HomeLink';
import ContactLink from './ContactLink';
import ToggleNavigation from './ToggleNavigation';

const HeaderContent = forwardRef((props, ref) => (
  <header className='main-header' ref={ref}>
    <nav className='main-navigation'>
      <HomeLink />
      <div className='main-navigation-content'>
        <ul className='site-navigation'>
          <li><ContactLink /></li>
          <li><a href="javascript:void(0);">About</a></li>
          <li><a href="javascript:void(0);">Team</a></li>
        </ul>
        <ul className='user-navigation'>
          <li><CartLink purchases={props.purchases} /></li>
        </ul>
      </div>
    </nav>
    <ToggleNavigation onClick={props.toggleNavigation} />
  </header>
));

HeaderContent.propTypes = {
  purchases: PropTypes.array.isRequired,
  toggleNavigation: PropTypes.func.isRequired
};

export default HeaderContent;
