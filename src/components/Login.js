import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
class Login extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      // Login Form
      <section className="Form my-4 mx-5">
        <div className="container">
          <div className="row no-gutters">
            <div className="col-lg-5">
              <img src="./login-img.png" alt="Login" />
            </div>
            <div className="col-lg-7 px-5 pt-2">
              <h1 className="font-weight-bold py-3">
                <i className="fa fa-user"></i> Login
              </h1>
              <h4>Signing into your account</h4>
              <form>
                <div className="form-row">
                  <div className="col-lg-7">
                    <input
                      type="email"
                      className="form-control my-3 p-2"
                      placeholder="Enter Email"
                      required
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="col-lg-7">
                    <input
                      type="password"
                      className="form-control my-3 p-2"
                      placeholder="Enter Password"
                      required
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="col-lg-7">
                    <button type="button" className="btn1 mt-3 mb-5">
                      Login
                    </button>
                  </div>
                </div>
                <a href="#" className="log-Link">
                  Forget password
                </a>
                <p>
                  Don't have an account?
                  <Link to="/register" className="log-Link">
                    Register here
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default withRouter(Login);
