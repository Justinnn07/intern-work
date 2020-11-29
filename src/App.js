import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Body from "./Body";
import Header from "./Header";
import Login from "./Login";
import Signup from "./Signup";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Signup />
          </Route>
          <Route path="/">
            <Header />
            <Body />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
