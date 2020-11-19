import React from "react";
import { Switch, Route } from "react-router-dom";

import { checkAuth } from "./utils/auth";
import ToDo from "./pages/ToDo";
import Login from "./pages/Login";
import { ProtectedRoute } from "./components/ProtectedRoute";

const App = () => {
  // TODO: create user context if adding pages / features
  const isAuthenticated = checkAuth();

  return (
    <div>
      <Switch>
        <Route path="/login" component={Login} />
        <ProtectedRoute isAuthenticated={isAuthenticated} component={ToDo} />
      </Switch>
    </div>
  );
};

export default App;
