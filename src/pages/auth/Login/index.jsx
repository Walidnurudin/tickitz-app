import React, { Component } from "react";
import "./index.css";
import { login, tickitz1, tickitz2, google, fb } from "../../../assets/img";

class Login extends Component {
  render() {
    return (
      <>
        <div className="container-fluid">
          {/* <!-- RESET PADDING --> */}
          <div className="row p-0">
            {/* <!-- RESET PADDING --> */}
            <div className="col-md-7 d-none d-md-inline-block p-0">
              <div style={{ position: "relative", width: "100%" }}>
                <div className="banner__overlay">
                  <img src={tickitz1} alt="logo" className="banner__logo" />
                  <span className="banner__overlay--title inter-400">wait, watch, wow!</span>
                </div>

                <img src={login} alt="image login" className="banner__img" />
              </div>
            </div>

            {/* <!-- FORM -->
        <!-- RESET PADDING --> */}
            <div className="col-md-5 col-12 p-0">
              <div className="container">
                <div className="header">
                  <div className="d-block d-md-none">
                    <img src={tickitz2} alt="logo" width="130px" />
                  </div>

                  <span className="header__title inter-600 d-none d-md-block">Sign In</span>
                  <span
                    className="header__title mulish-600 d-block d-md-none"
                    style={{ fontSize: "40px", marginTop: "45px" }}
                  >
                    Sign In
                  </span>
                  <p className="inter-400 text-secondary d-none d-md-block">
                    Sign in with your data that you entered during your registration
                  </p>
                </div>

                <form>
                  <div className="mb-3">
                    <label htmlFor="email" className="mulish-400 text-secondary">
                      Email
                    </label>
                    <input
                      type="text"
                      className="form-control form__input"
                      placeholder="Write your email"
                    />
                  </div>

                  <div className="mb-3 position-relative">
                    <label htmlFor="password" className="mulish-400 text-secondary">
                      Password
                    </label>
                    <i className="bi bi-eye text-secondary icon__eye"></i>
                    <input
                      type="text"
                      className="form-control form__input"
                      placeholder="Write your password"
                    />
                  </div>
                  <div className="d-grid">
                    <button className="btn btn-primary form__btn" type="button">
                      Sign In
                    </button>
                  </div>
                </form>

                <p className="inter-500 text-secondary text-center">
                  Forgot your password? <a href="#">Reset now</a>
                </p>

                <span className="line">
                  <h2>or</h2>
                </span>

                <div className="thrid__login d-flex justify-content-evenly">
                  <div className="thrid__login--card">
                    <div>
                      <img src={google} alt="logo google" width="24px" />
                      <span
                        className="
                      mulish-600
                      text-secondary
                      ms-3
                      d-none d-md-inline-block
                    "
                      >
                        Google
                      </span>
                    </div>
                  </div>

                  <div className="thrid__login--card">
                    <div>
                      <img src={fb} alt="logo facebook" width="24px" />
                      <span
                        className="
                      mulish-600
                      text-secondary
                      ms-3
                      d-none d-md-inline-block
                    "
                      >
                        Facebook
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Login;
