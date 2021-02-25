import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../Home";
import Login from "../Login";
import Register from "../Register";
import Menu from "../Router/Menu";
import Service from "../Service";

class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Menu />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/register" exact component={Register} />
          <Route path="/login" exact component={Login} />
          <Route path="/service" exact component={Service} />
        </Switch>
      </BrowserRouter>
    );
  }
}
export default Router;
