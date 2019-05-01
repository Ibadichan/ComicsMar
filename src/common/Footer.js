import React from 'react';

function Footer() {
  return (
    <footer className='main-footer'>
      <div className='main-footer-container'>
        <div className='social-list-wrapper'>
          <b>Keep connected:</b>
          <ul className='social-list'>
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
        </div>

        <p className='site-is-fake'>
          This site is fake and does not sell anything,
          the real owner is here
          <a href='https://www.marvel.com' target='_blank'>
            https://www.marvel.com
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
