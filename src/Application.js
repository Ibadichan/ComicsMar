import React, { Component, StrictMode } from 'react';

import { Router, Switch } from 'react-router-dom';
import history from './common/history';
import routes from './routes/index';
import RouteWithSubRoutes from './common/components/RouteWithSubRoutes';
import ScrollToTop from './common/components/ScrollToTop';

import { connect } from 'react-redux';
import { fetchProducts } from './actions/products';

import Header from './common/components/header/Header';
import Footer from './common/components/Footer';
import Spinner from './common/components/Spinner';

class Application extends Component {
  constructor(props) {
    super(props);
    this.addPurchase = this.addPurchase.bind(this);
  }

  componentDidMount() {
    this.props.fetchProducts();
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

    this.setState(() => ({ purchases }));
  }

  render() {
    if (this.props.isFetching) { return <Spinner /> };

    return (
      <p>Hello Redux !!!</p>
      // <Router history={history}>
      //   <StrictMode>
      //     <ScrollToTop />

      //     <Header />
      //     <Switch>
      //       {
      //         routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)
      //       }
      //     </Switch>
      //     <Footer />
      //   </StrictMode>
      // </Router>
    );
  }
}

function mapStateToProps(state) {
  return {
    isFetching: state.products.isFetching
  };
}

function mapActionsToProps(dispatch) {
  return {
    fetchProducts() {
      dispatch(fetchProducts());
    }
  };
}

const connectedApplication = connect(
  mapStateToProps,
  mapActionsToProps
)(Application);

export default connectedApplication;
