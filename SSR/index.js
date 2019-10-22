import React from "react";
import ReactDOMServer from "react-dom/server";
import { Provider } from "react-redux";
import { StaticRouter, Switch, matchPath } from "react-router-dom";
import { Helmet } from "react-helmet";
import routes from "routes";
import prepareData from "helpers/history/prepareData";
import store from "./store";
import RouteWithSubRoutes from "./RouteWithSubRoutes";

function renderApp(request, response) {
  const state = {
    query: {},
    params: {},
    routes: []
  };

  const context = {};

  routes.some(route => {
    const match = matchPath(request.path, route);

    if (match) {
      state.routes.push(route);
      Object.assign(state.params, match.params);
      Object.assign(state.query, request.query);
    }

    return match;
  });

  return prepareData(store, state).then(() => {
    const content = ReactDOMServer.renderToString(
      <Provider store={store}>
        <StaticRouter location={request.url} context={context}>
          <Switch>
            {routes.map((route, i) => (
              <RouteWithSubRoutes key={i} {...route} />
            ))}
          </Switch>
        </StaticRouter>
      </Provider>
    );

    const helmet = Helmet.renderStatic();

    if (context.url == "/404" || state.routes.length == 0) {
      response.status(404);
    }

    return {
      content,
      helmet,
      initialState: JSON.stringify(store.getState())
    };
  });
}

export default renderApp;
