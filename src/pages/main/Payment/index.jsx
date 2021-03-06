import React, { Component } from "react";
import "./index.css";
import {
  noImage,
  warningIcon,
  google_pay,
  visa,
  gopay,
  paypal,
  dana,
  bca,
  bri,
  ovo
} from "../../../assets/img";
import axios from "../../../utils/axios";
import { Footer, Navbar, Input } from "../../../components";

class Payment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isError: false,
      dataUser: {},
      dataPaymentMethods: [
        {
          id: 1,
          name: "Google Pay",
          image: google_pay
        },
        {
          id: 2,
          name: "Visa",
          image: visa
        },
        {
          id: 3,
          name: "Gopay",
          image: gopay
        },
        {
          id: 4,
          name: "Paypal",
          image: paypal
        },
        {
          id: 5,
          name: "Dana",
          image: dana
        },
        {
          id: 6,
          name: "Bca",
          image: bca
        },
        {
          id: 7,
          name: "Bri",
          image: bri
        },
        {
          id: 8,
          name: "Ovo",
          image: ovo
        }
      ],

      // DATA
      dataMovie: {},
      dataSchedule: {},

      // PAYLOAD DATA
      movieId: props.location.state ? props.location.state.movieId : "",
      scheduleId: props.location.state ? props.location.state.scheduleId : "",
      timeSchedule: props.location.state ? props.location.state.timeSchedule : "",
      dateSchedule: props.location.state ? props.location.state.dateSchedule : "",
      seat: props.location.state ? props.location.state.seat : "",
      paymentMethod: ""
    };
  }

  getDataUser = () => {
    axios
      .get("/user")
      .then((res) => {
        this.setState({
          dataUser: res.data.data[0]
        });
      })
      .catch((err) => console.log(err.response));
  };

  getMovieById = () => {
    axios
      .get(`/movie/${this.state.movieId}`)
      .then((res) => {
        this.setState({
          dataMovie: res.data.data[0]
        });
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  getScheduleById = () => {
    axios
      .get(`/schedule/${this.state.scheduleId}`)
      .then((res) => {
        this.setState({
          dataSchedule: res.data.data[0]
        });
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  componentDidMount() {
    this.getDataUser();
    this.checkingData();
    this.getMovieById();
    this.getScheduleById();
  }

  checkingData = () => {
    const { movieId, scheduleId, timeSchedule, dateSchedule } = this.state;
    if (!movieId || !scheduleId || !timeSchedule || !dateSchedule) {
      this.props.history.push("/");
    }
  };

  handlePaymentMethod = (name) => {
    this.setState({
      paymentMethod: name
    });
  };

  handlePayYourOrder = () => {
    const {
      dataUser,
      dataMovie,
      dataSchedule,
      scheduleId,
      timeSchedule,
      dateSchedule,
      seat,
      paymentMethod
    } = this.state;
    if (!paymentMethod) {
      this.setState({
        isError: true
      });
      setTimeout(() => {
        this.setState({
          isError: false
        });
      }, 3000);
    } else {
      axios
        .post("/booking", {
          userId: dataUser.id,
          // statusPayment: "success",
          scheduleId,
          timeBooking: timeSchedule,
          dateBooking: dateSchedule,
          paymentMethod,
          seat
        })
        .then((res) => {
          window.location.assign(`${res.data.data.urlRedirect}`);

          // this.props.history.push("/ticket", {
          //   id: res.data.data.id,
          //   userId: dataUser.id,
          //   name: dataMovie.name,
          //   price: seat.length * dataSchedule.price,
          //   statusPayment: "success",
          //   scheduleId,
          //   timeBooking: timeSchedule,
          //   dateBooking: dateSchedule,
          //   paymentMethod,
          //   seat
          // });
        })
        .catch((err) => {
          console.log(err.response);
        });
    }
  };

  handlePrevius = () => {
    this.props.history.goBack();
  };

  render() {
    const {
      dataUser,
      dataPaymentMethods,
      dataMovie,
      dataSchedule,
      timeSchedule,
      dateSchedule,
      seat,
      paymentMethod
    } = this.state;
    return (
      <>
        <Navbar imageProfile={dataUser.image} />
        <div className="bg-light">
          {/* <!-- mobile --> */}
          <div className="d-block d-md-none">
            <div
              className="d-flex justify-content-between"
              style={{ padding: "16px 24px", backgroundColor: "white" }}
            >
              <span className="mulish-400 text-secondary" style={{ fontSize: "20px" }}>
                Total payment
              </span>
              <span className="mulish-600" style={{ fontSize: "20px" }}>
                {seat.length > 0 ? `$${seat.length * dataSchedule.price}` : "$0"}
              </span>
            </div>
          </div>

          <div className="container">
            <div className="row">
              <div className="col-12 col-md-7">
                {/* <!-- web --> */}
                <div className="d-none d-md-block payment__info">
                  <h1 style={{ fontSize: "24px" }} className="mulish-700">
                    Payment Info
                  </h1>
                  <div className="payment__info--card">
                    <div
                      className="
                    d-flex
                    justify-content-between
                    payment__info--card--item
                  "
                    >
                      <span className="mulish-400 text-secondary" style={{ fontSize: "20px" }}>
                        Date & time
                      </span>
                      <span className="mulish-400" style={{ fontSize: "20px" }}>
                        {dateSchedule} at {timeSchedule}
                      </span>
                    </div>

                    <div className="line__payment"></div>

                    <div
                      className="
                    d-flex
                    justify-content-between
                    payment__info--card--item
                  "
                    >
                      <span className="mulish-400 text-secondary" style={{ fontSize: "20px" }}>
                        Movie title
                      </span>
                      <span className="mulish-400" style={{ fontSize: "20px" }}>
                        {dataMovie.name}
                      </span>
                    </div>

                    <div className="line__payment"></div>

                    <div
                      className="
                    d-flex
                    justify-content-between
                    payment__info--card--item
                  "
                    >
                      <span className="mulish-400 text-secondary" style={{ fontSize: "20px" }}>
                        Cinema name
                      </span>
                      <span className="mulish-400" style={{ fontSize: "20px" }}>
                        {dataSchedule.premiere} Cinema
                      </span>
                    </div>

                    <div className="line__payment"></div>

                    <div
                      className="
                    d-flex
                    justify-content-between
                    payment__info--card--item
                  "
                    >
                      <span className="mulish-400 text-secondary" style={{ fontSize: "20px" }}>
                        Number of tickets
                      </span>
                      <span className="mulish-400" style={{ fontSize: "20px" }}>
                        {seat.length} pieces
                      </span>
                    </div>

                    <div className="line__payment"></div>

                    <div
                      className="
                    d-flex
                    justify-content-between
                    payment__info--card--item
                  "
                    >
                      <span className="mulish-400 text-secondary" style={{ fontSize: "20px" }}>
                        Total payment
                      </span>
                      <span className="mulish-600" style={{ fontSize: "20px" }}>
                        ${seat.length * dataSchedule.price}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="payment__method">
                  <h1 style={{ fontSize: "24px" }} className="mulish-700">
                    Choose a Payment Method
                  </h1>
                  <div className="payment__method--card">
                    <div className="payment__method--wrap">
                      {dataPaymentMethods.map((item) => (
                        <div
                          className={
                            item.name === paymentMethod
                              ? "payment__method--card--item isActive__payment"
                              : "payment__method--card--item"
                          }
                          style={{ cursor: "pointer" }}
                          key={item.id}
                          onClick={() => this.handlePaymentMethod(item.name)}
                        >
                          <img src={item.image} alt={item.name} />
                        </div>
                      ))}
                    </div>
                    {/* <span className="line">
                      <h2>or</h2>
                    </span>

                    <div className="text-center" style={{ marginTop: "24px" }}>
                      <span className="mulish-400 text-secondary">Pay via cash. </span>
                      <span className="mulish-600 text-primary">See how it work</span>
                    </div> */}
                  </div>
                </div>

                {this.state.isError && (
                  <div className="alert alert-danger">Select your payment method !</div>
                )}
              </div>

              <div className="col-12 col-md-5">
                <div className="personal__info">
                  <h1 style={{ fontSize: "24px" }} className="mulish-700">
                    Personal Info
                  </h1>
                  <div className="payment__info--card">
                    <Input
                      label="Full Name"
                      type="text"
                      placeholder="Fullname"
                      value={`${dataUser.firstName} ${dataUser.lastName}`}
                      disabled
                    />

                    <Input
                      label="Email"
                      type="email"
                      placeholder="email"
                      value={dataUser.email}
                      disabled
                    />

                    <Input
                      label="Phone Number"
                      type="text"
                      placeholder="phone number"
                      value={dataUser.phoneNumber ? dataUser.phoneNumber : "no phone number"}
                      disabled
                    />

                    {/* <div
                      style={{
                        padding: "20px 32px",
                        background: "rgba(244, 183, 64, 0.3)",
                        width: "100%",
                        borderRadius: "4px"
                      }}
                    >
                      <img src={warningIcon} alt="warning" width="26px" />
                      <span
                        className="mulish-400 text-secondary"
                        style={{ fontSize: "16px", marginLeft: "25px" }}
                      >
                        Fill your data correctly.
                      </span>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-12 col-md-7 d-flex justify-content-between">
                <button
                  className="
                d-none d-md-inline-block
                btn btn-outline-primary
                mulish-700
                payment__btn
              "
                  onClick={this.handlePrevius}
                >
                  Previus step
                </button>
                <button
                  className="btn btn-primary mulish-700 payment__btn"
                  onClick={this.handlePayYourOrder}
                  disabled={!paymentMethod}
                >
                  Pay your order
                </button>
              </div>

              <div className="col-0 col-md-5"></div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default Payment;
