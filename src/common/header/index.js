import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import HeaderContent from './HeaderContent';

class Header extends Component {
  constructor(props) {
    super(props);
    this.header = createRef();
    this.handleNavigationToggle = this.handleNavigationToggle.bind(this);
  }

  handleNavigationToggle() {
    const header = this.header.current;
    header && header.classList.toggle('opened');
  }

  render() {
    return (
      <HeaderContent
        ref={this.header}
        purchases={this.props.purchases}
        toggleNavigation={this.handleNavigationToggle}
      />
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
