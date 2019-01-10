import React from 'react';

function Footer() {
  return (
    <footer className='main-footer'>
      <ul className='main-footer-social-list'>
        <li>
          <a href='#facebook' className='social-button-facebook'>
            <span className='visually-hidden'>Facebook</span>
          </a>
        </li>
        <li>
          <a href='#vkontakte' className='social-button-vkontakte'>
            <span className='visually-hidden'>Vkontakte</span>
          </a>
        </li>
        <li>
          <a href='#twitter' className='social-button-twitter'>
            <span className='visually-hidden'>Twitter</span>
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
