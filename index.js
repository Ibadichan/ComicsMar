import React from 'react';
import ReactDOM from 'react-dom';
import Application from './src/Application';
import { Provider } from 'react-redux';
import store from './src/store/index';

ReactDOM.render(
  <Provider store={store}>
    <Application />
  </Provider>,
  document.getElementById('app-root')
);
