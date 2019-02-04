import React, { Component, StrictMode } from 'react';

import { Router, Switch } from 'react-router-dom';
import history from './common/history';
import routes from './routes/index';
import RouteWithSubRoutes from './common/components/RouteWithSubRoutes';
import ScrollToTop from './common/components/ScrollToTop';

import request from 'superagent';
import settings from './config/settings';
const { baseUrl, spaceId, accessToken, environment  } = settings.contentful;

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
    const assets = includes.Asset;
    const products = items.map(({ fields }) => {
      fields.photoFull   = this.findProductPhotos(assets, fields.photoFull);
      fields.largePhotos = this.findProductPhotos(assets, fields.largePhotos);
      fields.smallPhotos = this.findProductPhotos(assets, fields.smallPhotos);

      return fields;
    });

    return products;
  }

  findProductPhotos(assets, photos) {
    photos = Array.isArray(photos) ? photos : [photos];

    const parsedPhotos = photos.map(photo => {
      let asset, assetFields;

      for (let i = 0; i < assets.length; i++) {
        asset = assets[i];
        assetFields = asset.fields;

        if (asset.sys.id !== photo.sys.id) { continue };
        return {
          src: assetFields.file.url,
          alt: assetFields.title,
          width: assetFields.file.details.image.width,
          height: assetFields.file.details.image.height
        };
      };
    });

    return (parsedPhotos.length > 1 ? parsedPhotos : parsedPhotos[0]);
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
          <ScrollToTop>
            <StrictMode>
              <Header />
              <Switch>
                {
                  routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)
                }
              </Switch>
              <Footer />
            </StrictMode>
          </ScrollToTop>
        </Router>
      </ProductListContext.Provider>
      </CartAmountContext.Provider>
      </AddPurchaseContext.Provider>
    );
  }
}

export default Application;
