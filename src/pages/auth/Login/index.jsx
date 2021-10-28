import React, { Component } from "react";
import "./index.css";
import { login, tickitz1, tickitz2, google, fb } from "../../../assets/img";
import { Eye, EyeSlash } from "react-bootstrap-icons";
import { Input } from "../../../components";
import axios from "../../../utils/axios";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      form: {
        email: "",
        password: ""
      },
      isError: false,
      msg: ""
    };
  }

  checkToken = () => {
    if (localStorage.getItem("token")) {
      this.props.history.push("/");
    }
  };

  componentDidMount() {
    this.checkToken();
  }

  handleChangeForm = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("auth/login", this.state.form)
      .then((res) => {
        localStorage.setItem("token", res.data.data.token);
        this.props.history.push("/");
      })
      .catch((err) => {
        console.log(err.response.data);
        this.setState({
          isError: true,
          msg: err.response.data.msg
        });

        setTimeout(() => {
          this.setState({
            isError: false,
            msg: ""
          });
        }, 2000);
      });
  };

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

                <form onSubmit={this.handleSubmit}>
                  <Input
                    label="Email"
                    type="text"
                    name="email"
                    placeholder="Write your email"
                    handleChange={this.handleChangeForm}
                  />

                  <Input
                    label="Password"
                    name="password"
                    placeholder="Write your password"
                    handleChange={this.handleChangeForm}
                    inputPassword={true}
                  />

                  <div className="d-grid">
                    <button className="btn btn-primary form__btn" type="submit">
                      Sign In
                    </button>
                    {this.state.isError && (
                      <div className="alert alert-danger">{this.state.msg}</div>
                    )}
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
