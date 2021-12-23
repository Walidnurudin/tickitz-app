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
  updatePassword,
  updateImage
} from "../../../stores/actions/user";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // handling error
      isError: false,
      isSuccess: false,
      msg: "",

      // data ticket
      data: [],

      // form
      form: {
        firstName: props.user.data.firstName,
        lastName: props.user.data.lastName,
        email: props.user.data.email,
        phoneNumber: props.user.data.phoneNumber
      },
      responProfile: {
        isError: false,
        isSuccess: false,
        msg: ""
      },
      formImage: {
        image: ""
      },
      formPassword: {
        newPassword: "",
        confirmPassword: ""
      },
      responPassword: {
        isError: false,
        isSuccess: false,
        msg: ""
      },
      isOrderComponent: false
    };
  }

  componentDidMount() {
    axios
      .get("user/ticket-history")
      .then((res) => {
        this.setState({
          data: res.data.data
        });
      })
      .catch((err) => {
        console.log(err.response);
      });
  }

  resetForm = () => {
    this.setState({
      form: {
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: ""
      }
    });
  };

  // PAYMENT
  continuePayment = (payment) => {
    window.location.assign(`${payment}`);
  };

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

  showDetail = (item) => {
    this.props.history.push("/ticket", {
      id: item.id,
      userId: item.userId,
      name: item.name,
      price: item.totalPayment,
      statusPayment: item.statusPayment,
      scheduleId: item.scheduleId,
      timeBooking: item.timeBooking,
      dateBooking: item.dateBooking,
      paymentMethod: item.paymentMethod,
      seat: item.seat
    });
  };

  // PROFILE
  handleFormInfo = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    });
  };

  handleUpdate = () => {
    this.props
      .updateProfile(this.state.form)
      .then((res) => {
        this.setState({
          responProfile: {
            isSuccess: true,
            msg: res.value.data.msg
          }
        });

        setTimeout(() => {
          this.setState({
            responProfile: {
              isSuccess: false,
              msg: ""
            }
          });
        }, 3000);
        this.props.getUser();
      })
      .catch((err) => {
        this.setState({
          responProfile: {
            isError: true,
            msg: err.response.data.msg
          }
        });

        setTimeout(() => {
          this.setState({
            responProfile: {
              isError: false,
              msg: ""
            }
          });
        }, 3000);
      });
  };

  // UPDATE IMAGE
  onChangeFile(event) {
    event.stopPropagation();
    event.preventDefault();
    const file = event.target.files[0];
    this.setState(
      {
        formImage: {
          image: file
        }
      },
      () => {
        if (this.state.formImage.image === null || !this.state.formImage.image) {
          // notifError("Masukan gambar");
        } else {
          const formData = new FormData();
          for (const data in this.state.formImage) {
            formData.append(data, this.state.formImage[data]);
          }

          // UNTUK MENGECEK DATA DI DALAM FORMDATA
          for (const data of formData.entries()) {
            // [
            //   [property, value],
            //   [],
            // ]
            console.log(data[0] + ", " + data[1]);
          }

          this.props
            .updateImage(formData)
            .then((res) => {
              this.props.getUser();
              this.setState({
                isSuccess: true,
                msg: "Success update image"
              });

              setTimeout(() => {
                this.setState({
                  isSuccess: false,
                  msg: ""
                });
              }, 3000);
            })
            .catch((err) => {
              this.setState({
                isError: true,
                msg: this.props.user.msg
              });

              setTimeout(() => {
                this.setState({
                  isError: false,
                  msg: ""
                });
              }, 3000);
            });
        }
      }
    );
  }

  deleteImage = () => {
    this.props
      .updateImage({})
      .then((res) => {
        this.props.getUser();
        this.setState({
          isSuccess: true,
          msg: "Success delete image"
        });

        setTimeout(() => {
          this.setState({
            isSuccess: false,
            msg: ""
          });
        }, 3000);
      })
      .catch((err) => {
        this.setState({
          isError: true,
          msg: this.props.user.msg
        });

        setTimeout(() => {
          this.setState({
            isError: false,
            msg: ""
          });
        }, 3000);
      });
  };

  // PASSWORD
  handleFormPassword = (e) => {
    this.setState({
      formPassword: {
        ...this.state.formPassword,
        [e.target.name]: e.target.value
      }
    });
  };

  handlePassword = () => {
    this.props
      .updatePassword(this.state.formPassword)
      .then((res) => {
        this.setState({
          formPassword: {
            newPassword: "",
            confirmPassword: ""
          },
          responPassword: {
            isSuccess: true,
            msg: res.value.data.msg
          }
        });

        setTimeout(() => {
          this.setState({
            responPassword: {
              isSuccess: false,
              msg: ""
            }
          });
        }, 3000);

        this.props.getUser();
      })
      .catch((err) => {
        this.setState({
          responPassword: {
            isError: true,
            msg: err.response.data.msg
          }
        });

        setTimeout(() => {
          this.setState({
            responPassword: {
              isError: false,
              msg: ""
            }
          });
        }, 3000);
      });
  };

  render() {
    const { isOrderComponent, data, form, isError, isSuccess, msg, responProfile, responPassword } =
      this.state;
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
                  isError={isError}
                  isSuccess={isSuccess}
                  msg={msg}
                  image={user.image}
                  firstName={user.firstName}
                  lastName={user.lastName}
                  role={user.role}
                  email={user.email}
                  phone={user.phoneNumber}
                  onClick={() => {
                    this.upload.click();
                  }}
                  handleDelete={this.deleteImage}
                />

                <input
                  type="file"
                  ref={(ref) => (this.upload = ref)}
                  style={{ display: "none" }}
                  onChange={(e) => this.onChangeFile(e)}
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
                              movieName={item.name}
                              premiere={item.premiere}
                              statusUsed={item.statusUsed}
                              onClick={() => this.showDetail(item)}
                              onClickPayment={() => this.continuePayment(item.payment)}
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
                              value={form.firstName}
                            />
                          </div>

                          <div className="col-12 col-md-6 profile__form--detail--item">
                            <Input
                              label="Last Name"
                              type="text"
                              name="lastName"
                              placeholder="Last Name"
                              handleChange={this.handleFormInfo}
                              value={form.lastName}
                            />
                          </div>

                          <div className="col-12 col-md-6 profile__form--detail--item">
                            <Input
                              label="Email"
                              type="text"
                              name="email"
                              placeholder="email@domain.com"
                              handleChange={this.handleFormInfo}
                              value={form.email}
                              disabled={true}
                            />
                          </div>

                          <div className="col-12 col-md-6 profile__form--detail--item">
                            <Input
                              label="Phone Number"
                              type="number"
                              name="phoneNumber"
                              placeholder="phone number"
                              handleChange={this.handleFormInfo}
                              value={form.phoneNumber}
                            />
                          </div>

                          {responProfile.isError ? (
                            <div className="alert alert-danger mt-3">{responProfile.msg}</div>
                          ) : responProfile.isSuccess ? (
                            <div className="alert alert-success mt-3">{responProfile.msg}</div>
                          ) : (
                            <div></div>
                          )}

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

                          {responPassword.isError ? (
                            <div className="alert alert-danger mt-3">{responPassword.msg}</div>
                          ) : responPassword.isSuccess ? (
                            <div className="alert alert-success mt-3">{responPassword.msg}</div>
                          ) : (
                            <div></div>
                          )}

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
  getUser,
  updateImage
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
