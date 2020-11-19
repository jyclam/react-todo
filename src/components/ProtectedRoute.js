import React from "react";
import { Route, Redirect } from "react-router-dom";

export const ProtectedRoute = ({
  component: Component,
  isAuthenticated,
  ...rest
}) => (
  <Route
    {...rest}
    path="/"
    render={(props) =>
      isAuthenticated === true ? (
        <Component {...props} />
      ) : (
        <Redirect to="/login" />
      )
    }
  />
);
