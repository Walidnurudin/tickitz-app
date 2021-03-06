import React, { Component } from "react";
import "./index.css";
import { loginImage, tickitz1, tickitz2, google, fb } from "../../../assets/img";
import { connect } from "react-redux";
import { Input } from "../../../components";
import Loader from "react-loader-spinner";
import { register } from "../../../stores/actions/auth";
import { Link } from "react-router-dom";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      form: {
        firstname: "",
        lastname: "",
        email: "",
        password: ""
      },
      response: {
        isLoading: false,
        isError: false,
        isSuccess: false,
        msg: ""
      }
    };
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
    this.setState({
      ...this.state,
      response: {
        isLoading: true,
        isError: false,
        msg: ""
      }
    });
    this.props
      .register(this.state.form)
      .then((res) => {
        this.setState({
          ...this.state,
          response: {
            isLoading: false,
            isError: false,
            isSuccess: true,
            msg: res.value.data.msg
          }
        });

        setTimeout(() => {
          this.setState({
            ...this.state,
            response: {
              isLoading: false,
              isError: false,
              isSuccess: false,
              msg: ""
            }
          });
          this.props.history.push("/login");
        }, 3500);
      })
      .catch((err) => {
        this.setState({
          ...this.state,
          response: {
            isLoading: false,
            isError: true,
            msg: err.response.data.msg
          }
        });

        setTimeout(() => {
          this.setState({
            ...this.state,
            response: {
              isLoading: false,
              isError: false,
              msg: ""
            }
          });
        }, 3000);
      });
  };

  render() {
    const { response } = this.state;
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

                <img src={loginImage} alt="image login" className="banner__img" />
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

                  <span className="header__title inter-600 d-none d-md-block">
                    Fill your additional details
                  </span>
                  <span
                    className="header__title mulish-600 d-block d-md-none"
                    style={{ fontSize: "40px", marginTop: "45px" }}
                  >
                    Fill your additional details
                  </span>
                </div>

                <form onSubmit={this.handleSubmit}>
                  <div className="row">
                    <div className="col-6">
                      <Input
                        label="First name"
                        type="text"
                        name="firstName"
                        placeholder="Write your first name"
                        handleChange={this.handleChangeForm}
                      />
                    </div>
                    <div className="col-6">
                      <Input
                        label="Last name"
                        type="text"
                        name="lastName"
                        placeholder="Write your last name"
                        handleChange={this.handleChangeForm}
                      />
                    </div>
                  </div>
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

                  {response.isError && <div className="alert alert-danger">{response.msg}</div>}
                  {response.isSuccess && <div className="alert alert-success">{response.msg}</div>}

                  <div className="d-grid">
                    {response.isLoading ? (
                      <button className="btn btn-primary form__btn" type="submit" disabled={true}>
                        <Loader type="TailSpin" color="white" height={50} />
                      </button>
                    ) : (
                      <button className="btn btn-primary form__btn" type="submit">
                        Sign Up
                      </button>
                    )}
                  </div>
                </form>

                <p className="inter-500 text-secondary text-center">
                  Do you already have an account? <Link to="login">Login</Link>
                </p>

                {/* 
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
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth
});

const mapDispatchToProps = {
  register
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
