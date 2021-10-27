import React, { Component } from "react";
import "./index.css";
import axios from "../../../utils/axios";
import { noImage, menuProfileIcon } from "../../../assets/img";
import Footer from "../../../components/Footer";
import Navbar from "../../../components/Navbar";
import TicketOrderHistory from "../../../components/TicketOrderHistory";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataUser: {}
    };
  }

  checkToken = () => {
    if (!localStorage.getItem("token")) {
      this.props.history.push("/login");
    }
  };

  componentDidMount() {
    this.checkToken();
    this.getDataUser();
  }

  getDataUser = () => {
    axios
      .get("/user")
      .then((res) => {
        this.setState({
          dataUser: res.data.data[0]
        });
      })
      .catch((err) => console.log(err));
  };

  render() {
    const { dataUser } = this.state;
    return (
      <>
        <Navbar
          imageProfile={
            dataUser.image ? `${process.env.REACT_APP_API}uploads/user/${dataUser.image}` : noImage
          }
        />
        <div className="bg-light">
          <div className="container">
            <div className="row">
              {/* INFO */}
              <div className="col-12 col-md-3 profile__page">
                <div className="profile__info mulish-400 text-secondary">
                  <div className="profile__info--header">
                    <span>INFO</span>
                    <img src={menuProfileIcon} alt="menu" width="28px" />
                  </div>

                  <div className="profile__info--name">
                    <img
                      src={
                        dataUser.image
                          ? `${process.env.REACT_APP_API}uploads/user/${dataUser.image}`
                          : noImage
                      }
                      alt="profile"
                      width="136px"
                    />
                    <h6 className="mulish-600">
                      {dataUser.firstName} {dataUser.lastName}
                    </h6>
                    <span className="mulish-400">{dataUser.role}</span>
                  </div>

                  <hr />

                  <div className="profile__info--point">
                    <h6>Loyalty Points</h6>
                  </div>
                </div>
              </div>

              {/* FORM */}
              <div className="col-12 col-md-9 profile__page">
                <div className="profile__form">
                  <div className="profile__form--navigate">
                    <div className="mulish-400 profile__form--navigate--link isActive__profile--link">
                      Account Settings
                    </div>
                    <div className="mulish-400 profile__form--navigate--link">Order History</div>
                  </div>

                  {/* <div className="profile__form--detail">
                    <div className="mulish-400 profile__form--detail--header">
                      Details Information
                    </div>

                    <div className="row profile__form--detai--form">
                      <div className="col-12 col-md-6 profile__form--detail--item">
                        <label htmlFor="First Name" className="d-block text-secondary mulish-400">
                          First Name
                        </label>
                        <input
                          type="text"
                          placeholder="First Name"
                          className="profile__form--input text-secondary mulish-400"
                        />
                      </div>

                      <div className="col-12 col-md-6 profile__form--detail--item">
                        <label htmlFor="Last Name" className="d-block text-secondary mulish-400">
                          Last Name
                        </label>
                        <input
                          type="text"
                          placeholder="Last Name"
                          className="profile__form--input text-secondary mulish-400"
                        />
                      </div>

                      <div className="col-12 col-md-6 profile__form--detail--item">
                        <label htmlFor="Email" className="d-block text-secondary mulish-400">
                          Email
                        </label>
                        <input
                          type="email"
                          placeholder="email@domain.com"
                          className="profile__form--input text-secondary mulish-400"
                        />
                      </div>

                      <div className="col-12 col-md-6 profile__form--detail--item">
                        <label htmlFor="Phone Number" className="d-block text-secondary mulish-400">
                          Phone Number
                        </label>
                        <input
                          type="number"
                          placeholder="Phone Number"
                          className="profile__form--input text-secondary mulish-400"
                        />
                      </div>

                      <div className="col-12 col-md-6 profile__form--detail--item">
                        <button className="btn btn-primary mulish-700 btn__profile--update">
                          Update changes
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="profile__form--account">
                    <div className="mulish-400 profile__form--detail--header">
                      Account and Privacy
                    </div>

                    <div className="row profile__form--detai--form">
                      <div className="col-12 col-md-6 profile__form--detail--item">
                        <label htmlFor="New Password" className="d-block text-secondary mulish-400">
                          New Password
                        </label>
                        <input
                          type="password"
                          placeholder="New Password"
                          className="profile__form--input text-secondary mulish-400"
                        />
                      </div>

                      <div className="col-12 col-md-6 profile__form--detail--item">
                        <label
                          htmlFor="Confirm Password"
                          className="d-block text-secondary mulish-400"
                        >
                          Confirm Password
                        </label>
                        <input
                          type="password"
                          placeholder="Confirm Password"
                          className="profile__form--input text-secondary mulish-400"
                        />
                      </div>

                      <div className="col-12 col-md-6 profile__form--detail--item">
                        <button className="btn btn-primary mulish-700 btn__profile--update">
                          Update changes
                        </button>
                      </div>
                    </div>
                  </div> */}

                  <TicketOrderHistory />
                  <TicketOrderHistory />
                  <TicketOrderHistory />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default Profile;
