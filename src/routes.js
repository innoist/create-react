import React from "react";

import { Route, Switch } from "react-router-dom";
import SimplePage from "./containers/simplePage";
import FormikPage from "./containers/FormikPage";

import TestAndSetupPage from "./containers/TestAndSetupPage";
import Hooks from "./containers/HooksPage";

import App from "./App";

const routes = props => {
  return (
    <div>
      <App />
      <Switch>
        <Route exact path="/simple" component={SimplePage} />
        <Route exact path="/test" component={TestAndSetupPage} />
        <Route exact path="/hooks" component={Hooks} />
        <Route exact path="/formik" component={FormikPage} />
      </Switch>
    </div>
  );
};

export default routes;
