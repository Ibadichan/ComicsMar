import "core-js/stable";
import "regenerator-runtime/runtime";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import Application from "application/Container";
import store from "store";
import history from "common/history";
import historyCallback from "helpers/history/historyCallback";
import "scss/main.scss";

const site = (
  <Provider store={store}>
    <Application />
  </Provider>
);

if (process.env.NODE_ENV == "development") {
  historyCallback(window.location, "PUSH");

  ReactDOM.render(site, document.getElementById("app-root"));
} else if (process.env.NODE_ENV == "production") {
  ReactDOM.hydrate(site, document.getElementById("app-root"));
}

history.listen(historyCallback);
