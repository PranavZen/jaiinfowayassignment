import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
class Register extends Component {
  render() {
    return (
      // Register Form
      <section className="Form my-4 mx-5">
        <div className="container">
          <div className="row no-gutters">
            <div className="col-lg-5">
              <img src="./login-img.png" alt="Login" />
            </div>
            <div className="col-lg-7 px-5 pt-2">
              <h1 className="font-weight-bold py-3">Register</h1>

              <form>
                <div className="form-row">
                  <div className="col-lg-7">
                    <input
                      type="text"
                      className="form-control my-3 p-2"
                      placeholder="Enter First Name"
                      required
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="col-lg-7">
                    <input
                      type="text"
                      className="form-control my-3 p-2"
                      placeholder="Enter Last Name"
                      required
                    />
                  </div>
                </div>
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
                    <Link to="/login">
                      <button type="button" className="btn1 mt-3 mb-5">
                        Register
                      </button>
                    </Link>
                  </div>
                </div>

                <p>
                  Already register?
                  <Link to="/login" className="log-Link">
                    Login here
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
export default withRouter(Register);
