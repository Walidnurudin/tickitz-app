import React, { Component } from "react";
import "./index.css";
import Footer from "../../../components/Footer";
import axios from "../../../utils/axios";
import Navbar from "../../../components/Navbar";
import { noImage } from "../../../assets/img";

class MovieDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataUser: {},
      movieId: this.props.match.params.id,
      data: [],
      schedule: [],
      scheduleId: "",
      timeSchedule: "",
      dateSchedule: new Date().toISOString().split("T")[0]
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
    this.getDataMovieById();
    this.getDataScheduleByMovieId();
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

  getDataScheduleByMovieId = () => {
    axios
      .get(`/schedule/movie-id/${this.state.movieId}`)
      .then((res) => {
        this.setState({
          schedule: res.data.data
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  getDataMovieById = () => {
    axios
      .get(`/movie/${this.state.movieId}`)
      .then((res) => {
        this.setState({
          data: res.data.data[0]
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  handleChangeDate = (e) => {
    // if (condition jika user memilih tanggal hari sebelumnya) {
    //   console.log("tanggal tidak bisa di akses");
    // }
    this.setState(
      {
        dateSchedule: e.target.value
      },
      () => {
        // proses function get schedule
      }
    );
  };

  handleTimeSchedule = (time) => {
    // console.log(time);
    alert("You Click Time " + time);
    this.setState({
      timeSchedule: time
    });
  };

  handleBooking = (id) => {
    this.setState(
      {
        scheduleId: id
      },
      () => {
        const { movieId, scheduleId, timeSchedule, dateSchedule } = this.state;
        console.log(movieId, scheduleId, timeSchedule, dateSchedule);
        this.props.history.push("/order", {
          movieId,
          scheduleId,
          timeSchedule,
          dateSchedule
        });
      }
    );
  };

  render() {
    const { dataUser, data, schedule } = this.state;
    return (
      <>
        <Navbar
          imageProfile={
            dataUser.image ? `http://localhost:3001/uploads/user/${dataUser.image}` : noImage
          }
        />
        {/* <!-- DETAIL MOVIE --> */}
        <header className="container">
          <div className="row detail__movie">
            <div className="col-12 col-md-4 text-center">
              <div className="detail__movie--img">
                <img
                  src={data.image ? `http://localhost:3001/uploads/movie/${data.image}` : noImage}
                  alt="spiderman"
                  width="237px"
                />
              </div>
            </div>

            <div className="col-12 col-md-8">
              <div className="row detail__header">
                <div className="col">
                  <h1 className="mulish-700 detail__header--title">{data.name}</h1>
                  <span className="mulish-400 text-secondary detail__header--category">
                    {data.category}
                  </span>
                </div>
              </div>

              <div className="row">
                <div className="col">
                  <div className="row" style={{ marginBottom: "16px" }}>
                    <div className="col">
                      <span className="mulish-400 text-secondary d-block">Release date</span>
                      <span className="mulish-400">{data.releaseDate}</span>
                    </div>
                    <div className="col">
                      <span className="mulish-400 text-secondary d-block">Directed by</span>
                      <span className="mulish-400">{data.director}</span>
                    </div>
                  </div>
                  <div className="row" style={{ marginBottom: "24px" }}>
                    <div className="col">
                      <span className="mulish-400 text-secondary d-block">Duration</span>
                      <span className="mulish-400">{data.duration}</span>
                    </div>
                    <div className="col">
                      <span className="mulish-400 text-secondary d-block">Casts</span>
                      <span className="mulish-400">{data.cast}</span>
                    </div>
                  </div>
                </div>

                <div className="detail__line"></div>

                <div className="row">
                  <div className="col">
                    <h3
                      className="mulish-600"
                      style={{ fontSize: "20px", margin: "16px 0px 4px 0px" }}
                    >
                      Synopsis
                    </h3>
                    <p
                      className="mulish-400 text-secondary"
                      style={{
                        fontSize: "16px",
                        letterSpacing: "0.75px",
                        lineHeight: "32px"
                      }}
                    >
                      {data.synopsis}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* <!-- SHOWTIMES TICKETS --> */}
        <section className="showtimes__tickets bg-light">
          <div className="container">
            <h1 className="text-center mulish-700" style={{ fontSize: "24px" }}>
              Showtimes and Tickets
            </h1>

            <div
              className="d-flex justify-content-center
            flex-column flex-md-row
            align-items-center
            date__location"
            >
              <input type="date" className="form-control mr-0 me-md-5 date__location__comp" />

              <select
                className="form-select date__location__comp"
                aria-label="Default select example"
                defaultValue="Location"
              >
                <option value="1">Jakarta</option>
                <option value="2">Bandung</option>
                <option value="3">Indramayu</option>
              </select>
            </div>

            <div className="row">
              {schedule.length > 0 ? (
                schedule.map((item) => (
                  <div className="col-12 col-md-4" key={item}>
                    <div className="ticket__seat">
                      <div className="row">
                        <div className="col d-flex justify-content-center align-items-center">
                          <img
                            src="assets/img/project/ebv.id 2.png"
                            alt="ebv.id"
                            width="106px"
                            height="40px"
                          />
                        </div>
                        <div className="col">
                          <span className="mulish-600" style={{ fontSize: "24px" }}>
                            {item.premiere}
                          </span>
                          <p className="mulish-400 text-secondary" style={{ marginTop: "4px" }}>
                            {item.location}
                          </p>
                        </div>
                      </div>

                      <hr />

                      <div className="d-flex flex-wrap">
                        {item.time.map((itemTime, index) => (
                          <span
                            onClick={() => this.handleTimeSchedule(itemTime)}
                            key={index}
                            className="mulish-600 text-secondary"
                            style={{ margin: "8px 12px", fontSize: "13px" }}
                          >
                            {itemTime}
                          </span>
                        ))}
                      </div>

                      <div className="d-flex justify-content-between" style={{ marginTop: "24px" }}>
                        <span className="mulish-400 text-secondary" style={{ fontSize: "16px" }}>
                          Price
                        </span>
                        <span className="mulish-600" style={{ fontSize: "16px" }}>
                          ${item.price}/seat
                        </span>
                      </div>

                      <div className="d-grid">
                        <button
                          onClick={() => this.handleBooking(item.id)}
                          className="btn btn-primary mulish-700 book__now--btn"
                          style={{ fontSize: "14px" }}
                        >
                          Book now
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-12 text-center text-secondary mulish-700">
                  <h1>No schedule</h1>
                </div>
              )}
            </div>

            <span className="line__detail">
              <h2 className="text-primary mulish-600">view more</h2>
            </span>
          </div>
        </section>

        <Footer />
      </>
    );
  }
}

export default MovieDetail;
