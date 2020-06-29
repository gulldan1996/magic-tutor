import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Main from './pages/Main';

export const useRoutes = () => (
  <Switch>
    <Route path="/" exact>
      <Main />
    </Route>
    <Redirect to="/" />
  </Switch>
);
