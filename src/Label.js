import React, { Component } from 'react';

class Label extends Component {
  render() {
    const children = this.props.children;

    return (
      <span style={{ color: 'red' }}>
        { children }
      </span>
    );
  }
}

export default Label;
