import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import * as serviceWorker from "./serviceWorker";
import "semantic-ui-css/semantic.min.css";
import { Provider } from "react-redux";
import configureStore from "./store";
import { Router } from "react-router-dom";
import Routes from "./routes";
import createBrowserHistory from "history/createBrowserHistory";

const rootEl = document.getElementById("root");
const store = configureStore();
const history = createBrowserHistory();

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Routes dispatch={store.dispatch} />
    </Router>
  </Provider>,
  rootEl
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
if (module.hot) {
  module.hot.accept("./routes", () => {
    const NextApp = require("./routes").default;
    ReactDOM.render(
      <Provider store={store}>
        <Router history={history}>
          <NextApp dispatch={store.dispatch} />
        </Router>
      </Provider>,
      rootEl
    );
  });
}
