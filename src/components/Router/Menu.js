import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
class Menu extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#">
          <img className="logo" src="./logoere.jpg" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item">
              <Link className="nav-links" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-links" to="#">
                About us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-links" to="/service">
                Service
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
export default withRouter(Menu);
