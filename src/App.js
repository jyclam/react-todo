import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";

import ToDo from "./pages/ToDo";
import Login from "./pages/Login";

const App = () => {
  return (
    <div>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/" component={ToDo} />
      </Switch>
    </div>
  );
};

export default App;
