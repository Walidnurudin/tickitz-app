import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { tickitz2, menuIcon } from "../../assets/img";
import { Search } from "react-bootstrap-icons";
import "./index.css";

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
        <nav className="navbar navbar-expand-lg navbar__app" style={{ padding: "36px 0px" }}>
          <div className="container">
            <img src={tickitz2} alt="logo" width="120px" style={{ marginRight: "82px" }} />
            {/* <!-- icon --> */}
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span
                className="
              navbar-toggler-icon
              d-flex
              justify-content-center
              align-items-center
            "
              >
                <img src={menuIcon} alt="menu" />
              </span>
            </button>
            {/* <!-- end icon --> */}

            <div className="collapse navbar-collapse navbar__app--list" id="navbarSupportedContent">
              {this.props.isAdmin ? (
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item navbar__app--list--item">
                    <Link
                      className="nav-link mulish-600 text-black"
                      style={{ fontSize: "16px" }}
                      to="/dashboard"
                    >
                      Dashboard
                    </Link>
                  </li>
                  <li className="nav-item navbar__app--list--item">
                    <Link
                      className="nav-link mulish-600 text-black"
                      style={{ fontSize: "16px" }}
                      to="/manage-movie"
                    >
                      Manage Movie
                    </Link>
                  </li>
                  <li className="nav-item navbar__app--list--item">
                    <Link
                      className="nav-link mulish-600 text-black"
                      style={{ fontSize: "16px" }}
                      to="/manage-schedule"
                    >
                      Manage Schedule
                    </Link>
                  </li>
                </ul>
              ) : (
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item navbar__app--list--item">
                    <Link
                      className="nav-link mulish-600 text-black"
                      style={{ fontSize: "16px" }}
                      to="/"
                    >
                      Home
                    </Link>
                  </li>
                  <li className="nav-item navbar__app--list--item">
                    <a
                      className="nav-link mulish-600 text-black"
                      style={{ fontSize: "16px" }}
                      href="#"
                    >
                      Payment
                    </a>
                  </li>
                  <li className="nav-item navbar__app--list--item">
                    <Link
                      className="nav-link mulish-600 text-black"
                      style={{ fontSize: "16px" }}
                      to="/profile"
                    >
                      Profile
                    </Link>
                  </li>
                </ul>
              )}

              <div className="d-flex flex-column flex-md-row">
                <div className="nav-item navbar__app--list--item dropdown">
                  <a
                    className="nav-link dropdown-toggle mulish-600 text-black"
                    style={{ fontSize: "16px" }}
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Location
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li>
                      <a className="dropdown-item" href="#">
                        Jakarta
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Bandung
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Indramayu
                      </a>
                    </li>
                  </ul>
                </div>
                <input
                  className="form-control me-2 navbar__input text-secondary mulish-600"
                  type="search"
                  placeholder="Search..."
                  aria-label="Search"
                />
                <Search className="mx-5 my-auto navbar__search" />
                {/* <i className="bi bi-search mx-5 my-auto navbar__search"></i> */}
                {/* <button className="btn btn-primary btn__sign_in" type="button">
                  Sign Up
                </button> */}
                <img src={this.props.imageProfile} alt="profile" className="navbar__profile" />
              </div>
            </div>
          </div>
        </nav>
      </>
    );
  }
}

export default withRouter(Navbar);
