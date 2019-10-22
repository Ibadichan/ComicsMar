import { matchPath } from "react-router-dom";
import { parse } from "qs";
import store from "store";
import routes from "routes";
import prepareData from "./prepareData";

function historyCallback(location, action) {
  const state = {
    query: {},
    params: {},
    routes: []
  };

  routes.some(route => {
    const match = matchPath(location.pathname, route);

    if (match) {
      state.routes.push(route);
      Object.assign(state.params, match.params);
      Object.assign(state.query, parse(location.search.slice(1)));
    }

    return match;
  });

  prepareData(store, state);
}

export default historyCallback;
