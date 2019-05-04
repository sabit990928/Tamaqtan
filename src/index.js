import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import reducers from "./reducers";

import "./index.css";
import App from "./pages/App";

import * as serviceWorker from './serviceWorker';

window.axios = axios;

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
