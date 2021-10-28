import React, { Component } from "react";
import "./index.css";
import axios from "../../../utils/axios";
import { noImage } from "../../../assets/img";
import { Footer, Navbar, ProfileCard, Input, NavbarProfile } from "../../../components";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataUser: {},
      form: {
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: ""
      },
      formPassword: {
        newPassword: "",
        confirmPassword: ""
      }
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

  handleFormInfo = (e) => {
    this.setState(
      {
        form: {
          ...this.state.form,
          [e.target.name]: e.target.value
        }
      },
      () => {
        console.log(this.state.form);
      }
    );
  };

  handleFormPassword = (e) => {
    this.setState(
      {
        formPassword: {
          ...this.state.formPassword,
          [e.target.name]: e.target.value
        }
      },
      () => {
        console.log(this.state.formPassword);
      }
    );
  };

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
                <ProfileCard
                  image={dataUser.image}
                  firstName={dataUser.firstName}
                  lastName={dataUser.lastName}
                  role={dataUser.role}
                />
              </div>

              {/* FORM */}
              <div className="col-12 col-md-9 profile__page">
                <div className="profile__form">
                  <NavbarProfile />

                  <div className="profile__form--detail">
                    <div className="mulish-400 profile__form--detail--header">
                      Details Information
                    </div>

                    <div className="row profile__form--detai--form">
                      <div className="col-12 col-md-6 profile__form--detail--item">
                        <Input
                          label="First Name"
                          type="text"
                          name="firstName"
                          placeholder="First Name"
                          handleChange={this.handleFormInfo}
                        />
                      </div>

                      <div className="col-12 col-md-6 profile__form--detail--item">
                        <Input
                          label="Last Name"
                          type="text"
                          name="lastName"
                          placeholder="Last Name"
                          handleChange={this.handleFormInfo}
                        />
                      </div>

                      <div className="col-12 col-md-6 profile__form--detail--item">
                        <Input
                          label="Email"
                          type="text"
                          name="email"
                          placeholder="email@domain.com"
                          handleChange={this.handleFormInfo}
                        />
                      </div>

                      <div className="col-12 col-md-6 profile__form--detail--item">
                        <Input
                          label="Phone Number"
                          type="number"
                          name="phoneNumber"
                          placeholder="phone number"
                          handleChange={this.handleFormInfo}
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
                        <Input
                          label="New Password"
                          inputPassword={true}
                          placeholder="New Password"
                          name="newPassword"
                          handleChange={this.handleFormPassword}
                        />
                      </div>

                      <div className="col-12 col-md-6 profile__form--detail--item">
                        <Input
                          label="Confirm Password"
                          inputPassword={true}
                          placeholder="Confirm Password"
                          name="confirmPassword"
                          handleChange={this.handleFormPassword}
                        />
                      </div>

                      <div className="col-12 col-md-6 profile__form--detail--item">
                        <button className="btn btn-primary mulish-700 btn__profile--update">
                          Update changes
                        </button>
                      </div>
                    </div>
                  </div>
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
