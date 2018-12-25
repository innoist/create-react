import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "semantic-ui-css/semantic.min.css";
import { Provider } from "react-redux";
import configureStore from "./store";

const rootEl = document.getElementById("root");
const store = configureStore();
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootEl
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
if (module.hot) {
  module.hot.accept("./App", () => {
    const NextApp = require("./App").default;
    ReactDOM.render(
      <Provider store={store}>
        <NextApp />
      </Provider>,
      rootEl
    );
  });
}
