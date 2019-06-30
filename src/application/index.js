import React, { StrictMode } from "react";
import PropTypes from "prop-types";
import { Router, Switch } from "react-router-dom";
import history from "common/history";
import RouteWithSubRoutes from "common/RouteWithSubRoutes";
import ScrollToTop from "common/ScrollToTop";
import Spinner from "common/Spinner";
import routes from "routes";

function Application(props) {
  if (props.isFetching) {
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

Application.propTypes = {
  isFetching: PropTypes.bool.isRequired
};

export default Application;
