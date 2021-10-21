import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newName: props.name
    };
  }

  handleLogout = () => {
    this.props.history.push("/basic-login");
  };

  render() {
    return (
      <>
        <h1>Navbar component</h1>
        <h2>{this.props.name}</h2>
        {/* <Link to="/login">Login</Link> | <Link to="/">Home</Link> |{" "}
        <Link to="/movie-detail">Detail</Link> | <Link to="/order">Order</Link> |{" "}
        <Link to="/payment">Payment</Link> <hr /> */}
        <Link to="/basic-react">BasicReact</Link> |<Link to="/basic-home">BasicHome</Link> |
        <button onClick={this.handleLogout}>Logout</button>
      </>
    );
  }
}

export default withRouter(Navbar);
