import React from "react";

import { Route, Switch } from "react-router-dom";
import SimplePage from "./containers/simplePage";
import App from "./App";

const routes = props => {
  return (
    <div>
      <App />
      <Switch>
        <Route exact path="/simple" component={SimplePage} />
      </Switch>
    </div>
  );
};

export default routes;
