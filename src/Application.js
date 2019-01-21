import React, { Component, StrictMode } from 'react';

import { Router, Switch } from 'react-router-dom';
import history from './common/history';
import routes from './routes/index';
import RouteWithSubRoutes from './common/components/RouteWithSubRoutes';

import request from 'superagent';
import { baseUrl, spaceId, accessToken, environment } from './constants/contentful';

import Header from './common/components/header/Header';
import Footer from './common/components/Footer';

import AddPurchaseContext from './contexts/cart/AddPurchaseContext';
import CartAmountContext from './contexts/cart/CartAmountContext';
import ProductListContext from './contexts/products/ProductListContext';

class Application extends Component {
  constructor(props) {
    super(props);
    this.state = { purchases: [], products: [] };
    this.addPurchase = this.addPurchase.bind(this);
  }

  componentDidMount() {
    request
      .get(`${baseUrl}/spaces/${spaceId}/environments/${environment}/entries`)
      .query({ content_type: 'product' })
      .set('Authorization', `Bearer ${accessToken}`)
      .then(response => this.parseProducts(response.body))
      .then(products => this.setState({ products }))
      .catch(error => console.error(error));
  }

  parseProducts({ items, includes }) {
    let products = [];
    let product, photoFullId, asset, assetFields;

    for (let i = 0; i < items.length; i++) {
      product = items[i].fields;
      photoFullId = product.photoFull.sys.id;

      for (let j = 0; j < includes.Asset.length; j++) {
        asset = includes.Asset[j];
        assetFields = asset.fields;

        if (asset.sys.id !== photoFullId) { continue; }
        product.photoFull = {
          src: assetFields.file.url,
          alt: assetFields.title,
          width: assetFields.file.details.image.width,
          height: assetFields.file.details.image.height
        };
        break;
      }

      products.push(product);
    }

    return products;
  }

  addPurchase(event, purchase, quantity) {
    event.preventDefault();
    const purchases = JSON.parse(JSON.stringify(this.state.purchases));
    let purchaseExists = false;
    purchase.quantity = quantity;

    for (let i = 0; i < purchases.length; i++) {
      if (purchases[i].id !== purchase.id) { continue; }
      purchases[i].quantity += purchase.quantity;
      purchaseExists = true;
      break;
    };

    if (!purchaseExists) { purchases.push(purchase); }

    this.setState({ purchases });
  }

  render() {
    return (
      <AddPurchaseContext.Provider value={this.addPurchase}>
      <CartAmountContext.Provider value={this.state.purchases}>
      <ProductListContext.Provider value={this.state.products}>
        <Router history={history}>
          <StrictMode>
            <Header />
            <Switch>
              {
                routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)
              }
            </Switch>
            <Footer />
          </StrictMode>
        </Router>
      </ProductListContext.Provider>
      </CartAmountContext.Provider>
      </AddPurchaseContext.Provider>
    );
  }
}

export default Application;
