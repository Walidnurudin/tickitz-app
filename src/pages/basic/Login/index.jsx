import React, { Component } from "react";
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
        console.log(res.data.data.token);
        localStorage.setItem("token", res.data.data.token);
        this.props.history.push("/basic-home");
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

  handleReset = (e) => {
    e.preventDefault();
  };

  render() {
    return (
      <div className="container text-center">
        <h1>Login page</h1>
        <hr />
        {this.state.isError && <div className="alert alert-danger">{this.state.msg}</div>}
        <form onSubmit={this.handleSubmit} onReset={this.handleReset}>
          <input
            type="text"
            placeholder="input email"
            name="email"
            onChange={this.handleChangeForm}
          />
          <br />
          <input
            type="password"
            placeholder="input password"
            name="password"
            onChange={this.handleChangeForm}
          />
          <br />
          <button className="btn btn-outline-primary" type="reset">
            reset
          </button>
          <button className="btn btn-primary" type="submit">
            submit
          </button>
        </form>
      </div>
    );
  }
}

export default Login;
