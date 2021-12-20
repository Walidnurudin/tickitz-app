import React, { useState } from "react";
import { Link, withRouter, useHistory } from "react-router-dom";
import { tickitz2, menuIcon, noImage } from "../../assets/img";
import { Search } from "react-bootstrap-icons";
import { Modal } from "react-bootstrap";
import { logout } from "../../stores/actions/auth";
import { useDispatch } from "react-redux";
import "./index.css";

function Navbar({ imageProfile, isAdmin }) {
  const history = useHistory();
  const dispatch = useDispatch();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleLogout = () => {
    dispatch(logout()).then((res) => {
      localStorage.removeItem("token");
      history.push("/login");
    });
  };

  const linkActive = (path) => {
    return location.pathname === path ? "text-primary" : "text-black";
  };

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
            {isAdmin ? (
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item navbar__app--list--item">
                  <Link
                    className={`nav-link mulish-600 ${linkActive("/dashboard")}`}
                    style={{ fontSize: "16px" }}
                    to="/dashboard"
                  >
                    Dashboard
                  </Link>
                </li>
                <li className="nav-item navbar__app--list--item">
                  <Link
                    className={`nav-link mulish-600 ${linkActive("/manage-movie")}`}
                    style={{ fontSize: "16px" }}
                    to="/manage-movie"
                  >
                    Manage Movie
                  </Link>
                </li>
                <li className="nav-item navbar__app--list--item">
                  <Link
                    className={`nav-link mulish-600 ${linkActive("/manage-schedule")}`}
                    style={{ fontSize: "16px" }}
                    to="/manage-schedule"
                  >
                    Manage Schedule
                  </Link>
                </li>
              </ul>
            ) : (
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li>
                  <Link
                    className={`nav-link mulish-600 ${linkActive("/")}`}
                    style={{ fontSize: "16px" }}
                    to="/"
                  >
                    Home
                  </Link>
                </li>
                {/* <li className="nav-item navbar__app--list--item">
                  <a
                    className={`nav-link mulish-600 ${linkActive("/payment")}`}
                    style={{ fontSize: "16px" }}
                    href="#"
                  >
                    Payment
                  </a>
                </li> */}
                <li className="nav-item navbar__app--list--item">
                  <Link
                    className={`nav-link mulish-600 ${linkActive("/profile")}`}
                    style={{ fontSize: "16px" }}
                    to="/profile"
                  >
                    Profile
                  </Link>
                </li>
              </ul>
            )}

            <div className="d-flex flex-column flex-md-row align-items-center">
              {/* <div className="nav-item navbar__app--list--item dropdown">
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
              </div> */}
              {!isAdmin && (
                <input
                  className="form-control me-2 navbar__input text-secondary mulish-600 me-md-5 m-0"
                  type="search"
                  placeholder="Search..."
                  aria-label="Search"
                />
              )}
              {/* <Search className="mx-5 my-auto navbar__search" /> */}
              {/* <i className="bi bi-search mx-5 my-auto navbar__search"></i> */}
              {/* <button className="btn btn-primary btn__sign_in" type="button">
                  Sign Up
                </button> */}
              <img
                src={
                  imageProfile
                    ? `${process.env.REACT_APP_LOCAL}uploads/user/${imageProfile}`
                    : noImage
                }
                alt="profile"
                className="navbar__profile"
              />

              <button
                className="btn btn-danger mulish-600 px-2 py-1 ms-md-5 ms-0 mt-3 mt-md-0"
                onClick={handleShow}
              >
                Logout
              </button>

              <Modal show={show} onHide={handleClose}>
                <Modal.Header>
                  <Modal.Title className="mulish-600">Are you sure want to logout?</Modal.Title>
                </Modal.Header>
                <Modal.Footer>
                  <button
                    className="btn btn-secondary mulish-600 px-2 py-1 ms-5"
                    onClick={handleClose}
                  >
                    Cancel
                  </button>
                  <button
                    className="btn btn-danger mulish-600 px-2 py-1 ms-5"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </Modal.Footer>
              </Modal>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default withRouter(Navbar);
