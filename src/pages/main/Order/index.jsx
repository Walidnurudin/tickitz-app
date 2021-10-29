import React, { Component } from "react";
import axios from "../../../utils/axios";
import "./index.css";
import { Footer, Navbar, Seat } from "../../../components";
import { cineone21, hiflix, ebvid, noImage } from "../../../assets/img";

class Order extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataUser: {},

      // [SEAT]
      listSeat: ["A", "B", "C", "D", "E", "F", "G"],
      selectedSeat: [],
      reservedSeat: [],
      leftSideSeatNum: [1, 2, 3, 4, 5, 6, 7],
      rightSideSeatNum: [8, 9, 10, 11, 12, 13, 14],

      // DATA
      dataMovie: {},
      dataSchedule: {},

      // PAYLOAD DATA
      movieId: props.location.state ? props.location.state.movieId : "",
      scheduleId: props.location.state ? props.location.state.scheduleId : "",
      timeSchedule: props.location.state ? props.location.state.timeSchedule : "",
      dateSchedule: props.location.state ? props.location.state.dateSchedule : ""
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
      .catch((err) => console.log(err));
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
        console.log(err);
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
        console.log(err);
      });
  };

  getSeat = () => {
    axios
      .get("/seat/?scheduleId=5&movieId=9&dateBooking=2021-11-03&timeBooking=20:00")
      .then((res) => {
        const newReserved = [];
        res.data.data.map((item) => newReserved.push(item.seat));
        this.setState({
          reservedSeat: newReserved
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  componentDidMount() {
    this.checkToken();
    this.getDataUser();
    this.checkingData();
    this.getMovieById();
    this.getScheduleById();
    this.getSeat();
  }

  checkToken = () => {
    if (!localStorage.getItem("token")) {
      this.props.history.push("/login");
    }
  };

  checkingData = () => {
    const { movieId, scheduleId, timeSchedule, dateSchedule } = this.state;
    if (!movieId || !scheduleId || !timeSchedule || !dateSchedule) {
      alert("Select Movie !");
      this.props.history.push("/");
    }
  };

  changeMovie = () => {
    this.props.history.push("/");
  };

  selectedSeat = (data) => {
    // console.log("user select seat");
    // console.log(data);
    if (this.state.selectedSeat.includes(data)) {
      const deleteSeat = this.state.selectedSeat.filter((el) => {
        return el !== data;
      });
      this.setState({
        selectedSeat: deleteSeat
      });
    } else {
      this.setState({
        selectedSeat: [...this.state.selectedSeat, data]
      });
    }
  };

  handleBooking = () => {
    if (this.state.selectedSeat.length < 1) {
      alert("Please Select Seat !");
    } else {
      const { movieId, scheduleId, dateSchedule, timeSchedule, selectedSeat } = this.state;
      const setData = {
        movieId,
        scheduleId,
        dateSchedule,
        timeSchedule,
        seat: selectedSeat
      };
      this.props.history.push("/payment", setData);
    }
  };

  render() {
    const {
      listSeat,
      leftSideSeatNum,
      rightSideSeatNum,
      dataUser,
      dataMovie,
      dataSchedule,
      dateSchedule,
      timeSchedule,
      selectedSeat
    } = this.state;
    return (
      <>
        <Navbar
          imageProfile={
            dataUser.image
              ? `${process.env.REACT_APP_LOCAL}uploads/user/${dataUser.image}`
              : noImage
          }
        />

        <section className="bg-light">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-7">
                <div className="d-none d-md-block movie__selected">
                  <h1 style={{ fontSize: "24px" }} className="mulish-700">
                    Movie Selected
                  </h1>
                  <div className="movie__selected--card">
                    <div className="d-flex justify-content-between">
                      <span className="mulish-700" style={{ fontSize: "24px" }}>
                        {dataMovie.name}
                      </span>
                      <div
                        style={{
                          padding: "10px 20px",
                          borderRadius: "8px",
                          backgroundColor: "#eff0f6",
                          cursor: "pointer"
                        }}
                        onClick={this.changeMovie}
                      >
                        <span className="mulish-700 text-primary" style={{ fontSize: "14px" }}>
                          Change movie
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="choose__seat">
                  <h1 style={{ fontSize: "24px" }} className="mulish-700">
                    Choose Your Seat
                  </h1>
                  <div className="choose__seat--card">
                    {listSeat.map((item, index) => (
                      <div key={index}>
                        <Seat
                          seatAlphabhet={item}
                          selectedSeat={this.selectedSeat}
                          reserved={this.state.reservedSeat}
                          selected={this.state.selectedSeat}
                        />
                      </div>
                    ))}

                    <div className="row row__num">
                      <div className="col"></div>
                      {leftSideSeatNum.map((item, index) => (
                        <div className="col" key={index}>
                          <div className="row__num--span--right">{item}</div>
                        </div>
                      ))}

                      <div className="col"></div>

                      {rightSideSeatNum.map((item, index) => (
                        <div className="col" key={index}>
                          <div className="row__num--span--right">{item}</div>
                        </div>
                      ))}
                    </div>

                    <div>
                      <p className="mulish-600 seating__key">Seating key</p>
                      <div className="seating__key--wrap">
                        <div className="mulish-600 text-secondary d-flex seating__key--item seating__key--available">
                          <div></div>
                          <span>Available</span>
                        </div>
                        <div className="mulish-600 text-secondary d-flex seating__key--item seating__key--selected">
                          <div></div>
                          <span>Selected</span>
                        </div>
                        <div className="mulish-600 text-secondary d-flex seating__key--item seating__key--lovenest">
                          <div></div>
                          <span>Love nest</span>
                        </div>
                        <div className="mulish-600 text-secondary d-flex seating__key--item seating__key--sold">
                          <div></div>
                          <span>Sold</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-5">
                <div className="order__info">
                  <h1 style={{ fontSize: "24px" }} className="mulish-700">
                    Order Info
                  </h1>
                  <div className="order__info--card">
                    <div className="text-center">
                      <img
                        src={
                          dataSchedule.premiere === "cineone21"
                            ? cineone21
                            : dataSchedule.premiere === "hiflix"
                            ? hiflix
                            : ebvid
                        }
                        alt="logo"
                        width="132px"
                      />
                      <span
                        className="d-block mulish-600"
                        style={{ fontSize: "24px", marginTop: "13px" }}
                      >
                        {dataSchedule.premiere} Cinema
                      </span>
                    </div>
                    <div style={{ marginTop: "32px" }}>
                      <div
                        className="d-flex justify-content-between"
                        style={{ marginBottom: "16px" }}
                      >
                        <span className="mulish-400 text-secondary" style={{ fontSize: "14px" }}>
                          Movie selected
                        </span>
                        <span className="mulish-600" style={{ fontSize: "14px" }}>
                          {dataMovie.name}
                        </span>
                      </div>
                      <div
                        className="d-flex justify-content-between"
                        style={{ marginBottom: "16px" }}
                      >
                        <span className="mulish-400 text-secondary" style={{ fontSize: "14px" }}>
                          {dateSchedule}
                        </span>
                        <span className="mulish-600" style={{ fontSize: "14px" }}>
                          {timeSchedule}
                        </span>
                      </div>
                      <div
                        className="d-flex justify-content-between"
                        style={{ marginBottom: "16px" }}
                      >
                        <span className="mulish-400 text-secondary" style={{ fontSize: "14px" }}>
                          One ticket price
                        </span>
                        <span className="mulish-600" style={{ fontSize: "14px" }}>
                          ${dataSchedule.price}
                        </span>
                      </div>
                      <div
                        className="d-flex justify-content-between"
                        style={{ marginBottom: "40px" }}
                      >
                        <span className="mulish-400 text-secondary" style={{ fontSize: "14px" }}>
                          Seat choosed
                        </span>
                        <span className="mulish-600" style={{ fontSize: "14px" }}>
                          {selectedSeat.length > 0 ? selectedSeat.join(", ") : "not selected"}
                        </span>
                      </div>
                    </div>

                    <hr />

                    <div className="d-flex justify-content-between" style={{ marginTop: "24px" }}>
                      <span
                        className="mulish-600"
                        style={{ fontSize: "16px", letterSpacing: "0.75px" }}
                      >
                        Total Payment
                      </span>
                      <span className="text-primary mulish-700" style={{ fontSize: "24px" }}>
                        {selectedSeat.length > 0
                          ? `$${selectedSeat.length * dataSchedule.price}`
                          : "$0"}
                      </span>
                    </div>
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
                choose__btn
              "
                  onClick={this.changeMovie}
                >
                  Change your movie
                </button>
                <button
                  className="btn btn-primary mulish-700 choose__btn"
                  onClick={this.handleBooking}
                >
                  Checkout now
                </button>
              </div>

              <div className="col-0 col-md-5"></div>
            </div>
          </div>
        </section>
        <Footer />
      </>
    );
  }
}

export default Order;
