import React, { Component } from "react";
import axios from "../../../utils/axios";
import "./index.css";
import Footer from "../../../components/Footer";
import Seat from "../../../components/Seat";
import { cineone21 } from "../../../assets/img";

class Order extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // [SEAT]
      listSeat: ["A", "B", "C"],
      selectedSeat: [],
      reservedSeat: ["A1", "C7"],

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

  componentDidMount() {
    this.checkingData();
    this.getMovieById();
    this.getScheduleById();
    console.log(this.state);
  }

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
    console.log(this.state);
    const { dataMovie, dataSchedule, dateSchedule, timeSchedule, selectedSeat } = this.state;
    return (
      <>
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
                    {this.state.listSeat.map((item, index) => (
                      <div key={index}>
                        <Seat
                          seatAlphabhet={item}
                          selectedSeat={this.selectedSeat}
                          reserved={this.state.reservedSeat}
                          selected={this.state.selectedSeat}
                        />
                      </div>
                    ))}
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
                      <img src={cineone21} alt="logo" width="132px" />
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
                          {selectedSeat.length > 0 ? `${selectedSeat}` : "not selected"}
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
