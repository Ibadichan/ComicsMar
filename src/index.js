import "core-js/stable";
import "regenerator-runtime/runtime";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import Application from "application/Container";
import store from "store";
import historyCallback from "helpers/history/historyCallback";
import "scss/main.scss";

historyCallback(window.location, "PUSH");

ReactDOM.render(
  <Provider store={store}>
    <Application />
  </Provider>,
  document.getElementById("app-root")
);
