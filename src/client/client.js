// Startup point for the client side application
import "babel-polyfill";

import { BrowserRouter } from "react-router-dom";
import React from "react";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import ReactDom from "react-dom";
import { renderRoutes } from "react-router-config";
import axios from "axios";
import reducers from "./reducers";
import Routes from "./Routes";

const axiosInstance = axios.create({
  baseURL: "/api",
});

const store = createStore(
  reducers,
  window.INITIAL_STATE,
  applyMiddleware(thunk.withExtraArgument(axiosInstance))// add "axiosInstance" argement with thunk "dispatch getState" 
);
ReactDom.hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <div>{renderRoutes(Routes)}</div>
    </BrowserRouter>
  </Provider>,
  document.querySelector("#root")
);
