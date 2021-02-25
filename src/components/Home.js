import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
class Home extends Component {
  render() {
    return (
      <section className="Form my-4 mx-5">
        <div className="container">
          <div className="row no-gutters">
            <div className="col-lg-5">
              <img src="./home-img.jpg" alt="Home" />
            </div>
            <div className="col-lg-7 px-5 pt-2">
              <h1 className="font-weight-bold py-3">Welcome</h1>
              <h4>Connect with us</h4>
              <form>
                <div className="form-row">
                  <div className="col-lg-7">
                    <Link to="/login">
                      <button className="btn1 mt-3 mb-3">Login</button>
                    </Link>
                  </div>
                </div>
                <div className="form-row">
                  <div className="col-lg-7">
                    <Link to="/register">
                      <button type="button" className="btn1  mb-5">
                        Register
                      </button>
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default withRouter(Home);
