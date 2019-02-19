import React, { StrictMode } from 'react';
import { Router, Switch } from 'react-router-dom';
import history from '~/src/common/history';
import routes from '~/src/routes';
import RouteWithSubRoutes from '~/src/common/RouteWithSubRoutes';
import ScrollToTop from '~/src/common/ScrollToTop';

function Application() {
  return (
    <Router history={history}>
      <StrictMode>
        <ScrollToTop />
        <Switch>
          {
            routes.map((route, i) => (
              <RouteWithSubRoutes key={i} {...route} />
            ))
          }
        </Switch>
      </StrictMode>
    </Router>
  );
}

export default Application;
