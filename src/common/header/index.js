import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CartLink from './CartLink';
import HomeLink from './HomeLink';
import ContactLink from './ContactLink';
import ToggleNavigation from './ToggleNavigation';

class Header extends Component {
  constructor(props) {
    super(props);
    this.header = createRef();
    this.toggleNavigation = this.toggleNavigation.bind(this);
  }

  toggleNavigation() {
    const header = this.header.current;
    header && header.classList.toggle('opened');
  }

  render() {
    return (
      <header className='main-header' ref={this.header}>
        <nav className='main-navigation'>
          <HomeLink />
          <div className='main-navigation-content'>
            <ul className='site-navigation'>
              <li><ContactLink /></li>
            </ul>
            <ul className='user-navigation'>
              <li><CartLink purchases={this.props.purchases} /></li>
            </ul>
          </div>
        </nav>
        <ToggleNavigation onClick={this.toggleNavigation} />
      </header>
    );
  }
}

Header.propTypes = {
  purchases: PropTypes.array.isRequired
};

function mapStateToProps({ purchases }) {
  return { purchases };
}

const connectedHeader = connect(
  mapStateToProps,
  null
)(Header);

export default connectedHeader;
