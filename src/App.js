import React from "react";
import "./components/Login.css";

import "./components/Router/Menu.css";
import "./App.css";

import Router from "./components/Router/Router";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router />
      </div>
    );
  }
}

export default App;
