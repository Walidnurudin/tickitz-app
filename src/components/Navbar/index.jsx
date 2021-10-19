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
    this.props.history.push("/login");
  };

  render() {
    return (
      <>
        <h1>Navbar component</h1>
        <h2>{this.props.name}</h2>
        <Link to="/">Home</Link> | <Link to="/movie-detail">Detail</Link> |{" "}
        <Link to="/order">Order</Link> | <Link to="/payment">Payment</Link> |{" "}
        <button onClick={this.handleLogout}>Logout</button>
      </>
    );
  }
}

export default withRouter(Navbar);
