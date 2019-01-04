import React from 'react';
import Cart from './Cart';

function Header() {
  return (
    <header className='main-header'>
      <nav className='main-navigation'>
        <ul className='user-navigation'>
          <li><Cart /></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
