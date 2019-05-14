import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import reducers from "./reducers";
import { loadState, saveState } from './utils/localeStorage';
import throttle from 'lodash/throttle';

import "./index.css";
import App from "./pages/App";

import * as serviceWorker from './serviceWorker';

window.axios = axios;

const persistedState = loadState();

const store = createStore(reducers, persistedState, applyMiddleware(reduxThunk));

store.subscribe(throttle(() => {
  saveState(store.getState());
}, 1000))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
