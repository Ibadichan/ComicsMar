import React from 'react';
import CartLink from './CartLink';
import HomeLink from './HomeLink';
import ContactLink from './ContactLink';

function Header() {
  return (
    <header className='main-header'>
      <nav className='main-navigation'>
        <ul className='site-navigation'>
          <li><HomeLink /></li>
          <li><ContactLink /></li>
        </ul>
        <ul className='user-navigation'>
          <li><CartLink /></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
