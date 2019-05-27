import React, { Component, StrictMode } from "react";
import PropTypes from "prop-types";
import { Router, Switch } from "react-router-dom";
import history from "~/src/common/history";
import routes from "~/src/routes";
import RouteWithSubRoutes from "~/src/common/RouteWithSubRoutes";
import ScrollToTop from "~/src/common/ScrollToTop";
import Spinner from "~/src/common/Spinner";

class Application extends Component {
  componentDidMount() {
    this.props.fetchProducts();
  }

  render() {
    const { isFetching, products } = this.props;

    if (isFetching || products.length == 0) {
      return <Spinner />;
    }

    return (
      <StrictMode>
        <Router history={history}>
          <ScrollToTop>
            <Switch>
              {routes.map((route, i) => (
                <RouteWithSubRoutes key={i} {...route} />
              ))}
            </Switch>
          </ScrollToTop>
        </Router>
      </StrictMode>
    );
  }
}

Application.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  products: PropTypes.array.isRequired
};

export default Application;
