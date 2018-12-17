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

class Hello extends Component {
  render() {
    return (
      <h1>Hello <Label>World!</Label></h1>
    );
  }
}

export default Hello;
