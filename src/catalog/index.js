import React, { Component } from 'react';
import Products from '../../constants/Products';
import AddPurchaseContext from '../contexts/cart/AddPurchaseContext';
import CartAmountContext from '../contexts/cart/CartAmountContext';
import Catalog from './Catalog';

class CatalogPage extends Component {
  constructor(props) {
    super(props);
    this.state = { purchases: [], products: Products };
    this.addPurchase = this.addPurchase.bind(this);
  }

  addPurchase(event, purchase, quantity) {
    event.preventDefault();
    const purchases = JSON.parse(JSON.stringify(this.state.purchases));
    let purchaseExists = false;
    purchase.quantity = Math.round(quantity <= 1 ? 1 : quantity);

    for (let i = 0; i < purchases.length; i++) {
      if (purchases[i].id !== purchase.id) { continue; }
      purchases[i].quantity += purchase.quantity;
      purchaseExists = true;
      break;
    };

    if (!purchaseExists) { purchases.push(purchase); }

    this.setState({ purchases: purchases });
  }

  render() {
    return (
      <CartAmountContext.Provider value={this.state.purchases}>
        <AddPurchaseContext.Provider value={this.addPurchase}>
          <Catalog products={this.state.products} />
        </AddPurchaseContext.Provider>
      </CartAmountContext.Provider>
    );
  }
}

export default CatalogPage;
