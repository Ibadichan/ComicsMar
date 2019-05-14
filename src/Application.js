import React, { Component, StrictMode } from "react";
import PropTypes from "prop-types";
import { Router, Switch } from "react-router-dom";
import history from "~/src/common/history";
import routes from "~/src/routes";
import RouteWithSubRoutes from "~/src/common/RouteWithSubRoutes";
import ScrollToTop from "~/src/common/ScrollToTop";
import { connect } from "react-redux";
import { fetchProducts } from "~/src/actions/products";
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

function mapStateToProps({ products }) {
  return {
    isFetching: products.isFetching,
    products: products.items
  };
}

function mapActionsToProps(dispatch) {
  return {
    fetchProducts() {
      dispatch(fetchProducts());
    }
  };
}

export default connect(
  mapStateToProps,
  mapActionsToProps
)(Application);
