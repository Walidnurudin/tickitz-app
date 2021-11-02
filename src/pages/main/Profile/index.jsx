import React, { Component } from "react";
import "./index.css";
import axios from "../../../utils/axios";
import {
  Footer,
  Navbar,
  ProfileCard,
  Input,
  NavbarProfile,
  TicketOrderHistory
} from "../../../components";
import { connect } from "react-redux";
import {
  getUserBooking,
  updateProfile,
  getUser,
  updatePassword
} from "../../../stores/actions/user";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // data ticket
      data: [],

      // form
      form: {
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: ""
      },
      formPassword: {
        newPassword: "",
        confirmPassword: ""
      },
      isOrderComponent: false
    };
  }

  // componentDidMount() {
  //   axios
  //     .get("booking/user-id")
  //     .then((res) => {
  //       this.setState({
  //         data: res.data.data
  //       });
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }

  // NAVIGATION
  handleProfile = () => {
    this.setState({
      isOrderComponent: false
    });
  };

  handleOrderHistory = () => {
    this.setState({
      isOrderComponent: true
    });
  };

  // PROFILE
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

  handleUpdate = () => {
    this.props.updateProfile(this.state.form).then((res) => {
      console.log(res);
      this.props.getUser().then((res) => {
        console.log(res);

        this.setState({
          form: {
            firstName: "",
            lastName: "",
            email: "",
            phoneNumber: ""
          }
        });
      });
    });
  };

  // PASSWORD
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

  handlePassword = () => {
    this.props.updatePassword(this.state.formPassword).then((res) => {
      console.log(res);
      this.props.getUser().then((res) => {
        console.log(res);

        this.setState({
          formPassword: {
            newPassword: "",
            confirmPassword: ""
          }
        });
      });
    });
  };

  render() {
    const { isOrderComponent, data } = this.state;
    const user = this.props.user.data;
    return (
      <>
        <Navbar imageProfile={user.image} />
        <div className="bg-light">
          <div className="container">
            <div className="row">
              {/* INFO */}
              <div className="col-12 col-md-3 profile__page">
                <ProfileCard
                  image={user.image}
                  firstName={user.firstName}
                  lastName={user.lastName}
                  role={user.role}
                  email={user.email}
                  phone={user.phoneNumber}
                />
              </div>

              {/* FORM */}
              <div className="col-12 col-md-9 profile__page">
                <div className="profile__form">
                  <NavbarProfile
                    isOrderComponent={isOrderComponent}
                    handleProfile={this.handleProfile}
                    handleOrderHistory={this.handleOrderHistory}
                  />

                  {isOrderComponent ? (
                    <>
                      {data.length > 0 ? (
                        <>
                          {data.map((item) => (
                            <TicketOrderHistory
                              key={item.id}
                              date={item.dateBooking}
                              time={item.timeBooking}
                              movieName={item.movieId}
                              premiere="cineone21"
                              statusUsed={item.statusUsed}
                            />
                          ))}
                        </>
                      ) : (
                        <h1 className="mulish-600 text-center text-secondary mt-5">
                          data not found
                        </h1>
                      )}
                    </>
                  ) : (
                    <>
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
                            <button
                              className="btn btn-primary mulish-700 btn__profile--update"
                              onClick={() => this.handleUpdate()}
                            >
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
                            <button
                              className="btn btn-primary mulish-700 btn__profile--update"
                              onClick={() => this.handlePassword()}
                            >
                              Update changes
                            </button>
                          </div>
                        </div>
                      </div>
                    </>
                  )}
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

const mapStateToProps = (state) => ({
  user: state.user
});

const mapDispatchToProps = {
  getUserBooking,
  updateProfile,
  updatePassword,
  getUser
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
