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
    console.log("Logout");
    this.props.history.push("/login");
  };

  render() {
    console.log(this.props);
    console.log(this.state);
    return (
      <>
        <h1>Navbar component</h1>
        <h2>{this.props.name}</h2>
        <Link to="/detail">Detail</Link> | <button onClick={this.handleLogout}>Logout</button>
      </>
    );
  }
}

export default withRouter(Navbar);
