import React, { Component } from 'react';
import Label from './Label';
import CashCheck from './CashCheck';

class Hello extends Component {
  render() {
    return (
      <div>
        Hello <Label>Buyer!</Label>
        <CashCheck/>
      </div>
    );
  }
}

export default Hello;
