import React, { Component, Fragment } from 'react';
import { Router, Switch } from 'react-router-dom';

import history from './common/history';
import routes from './routes/index';
import RouteWithSubRoutes from './common/components/RouteWithSubRoutes';

import Products from './constants/Products';

import Header from './common/components/header/Header';
import Footer from './common/components/Footer';

import AddPurchaseContext from './contexts/cart/AddPurchaseContext';
import CartAmountContext from './contexts/cart/CartAmountContext';
import ProductListContext from './contexts/products/ProductListContext';

class Application extends Component {
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
      <AddPurchaseContext.Provider value={this.addPurchase}>
      <CartAmountContext.Provider value={this.state.purchases}>
      <ProductListContext.Provider value={this.state.products}>
        <Router history={history}>
          <Fragment>
            <Header />
            <Switch>
              {
                routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)
              }
            </Switch>
            <Footer />
          </Fragment>
        </Router>
      </ProductListContext.Provider>
      </CartAmountContext.Provider>
      </AddPurchaseContext.Provider>
    );
  }
}

export default Application;
