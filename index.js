import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from '~/src/store';
import Application from '~/src/Application';

ReactDOM.render(
  <Provider store={store}>
    <Application />
  </Provider>,
  document.getElementById('app-root')
);
