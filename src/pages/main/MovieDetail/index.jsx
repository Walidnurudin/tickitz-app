import React, { Component } from "react";
import "./index.css";
import Footer from "../../../components/Footer";
import axios from "../../../utils/axios";
import Navbar from "../../../components/Navbar";
import { noImage, cineone21, ebvid, hiflix } from "../../../assets/img";
import Pagination from "react-paginate";

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
      dateSchedule: "",
      ticketInfo: [],
      page: 1,
      limit: 3,
      isError: false,
      isWarning: false
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
    this.getDataSchedule();
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

  getDataSchedule = (e) => {
    axios
      .get(
        `/schedule?page=${this.state.page}&limit=${this.state.limit}&searchLocation=${
          e ? e.target.value : ""
        }&searchMovieId=${this.state.movieId}`
      )
      .then((res) => {
        console.log(res.data);
        this.setState({
          schedule: res.data.data,
          ticketInfo: res.data.pagination
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
    const Now = new Date().toISOString().split("T")[0];
    if (Now > e.target.value) {
      this.setState({
        isError: true
      });
      setTimeout(() => {
        this.setState({
          isError: false
        });
      }, 3000);
    } else {
      this.setState(
        {
          dateSchedule: e.target.value
        },
        () => {
          // proses function get schedule
          // console.log(this.state.dateSchedule);
        }
      );
    }
  };

  handleTimeSchedule = (time, scheduleId) => {
    this.setState({
      scheduleId,
      timeSchedule: time
    });
  };

  handleBooking = (id) => {
    const { movieId, timeSchedule, dateSchedule } = this.state;
    if (!movieId || !timeSchedule || !dateSchedule) {
      this.setState({
        isWarning: true
      });
      setTimeout(() => {
        this.setState({
          isWarning: false
        });
      }, 3000);
    } else {
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
    }
  };

  handlePagination = (event) => {
    const selectedPage = event.selected + 1;
    this.setState(
      {
        page: selectedPage
      },
      () => {
        this.getDataSchedule();
      }
    );
  };

  render() {
    const { dataUser, data, schedule, scheduleId, timeSchedule, ticketInfo } = this.state;
    return (
      <>
        <Navbar
          imageProfile={
            dataUser.image ? `${process.env.REACT_APP_API}uploads/user/${dataUser.image}` : noImage
          }
        />
        {/* <!-- DETAIL MOVIE --> */}
        <header className="container">
          <div className="row detail__movie">
            <div className="col-12 col-md-4 text-center">
              <div className="detail__movie--img">
                <img
                  src={
                    data.image ? `${process.env.REACT_APP_API}uploads/movie/${data.image}` : noImage
                  }
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
              <input
                type="date"
                className="form-control mr-0 me-md-5 date__location__comp"
                onChange={this.handleChangeDate}
              />

              <select
                className="form-select date__location__comp"
                aria-label="Default select example"
                defaultValue=""
                onChange={this.getDataSchedule}
              >
                <option value="">All location</option>
                <option value="jakarta">Jakarta</option>
                <option value="bandung">Bandung</option>
                <option value="indramayu">Indramayu</option>
              </select>
            </div>

            {this.state.isError && (
              <div className="alert alert-danger">date cannot be accessed</div>
            )}

            {this.state.isWarning && (
              <div className="alert alert-warning">complete the input date & time</div>
            )}

            {schedule.length > 0 ? (
              <div className="row">
                {schedule.map((item) => (
                  <div className="col-12 col-md-4" key={item.id}>
                    <div className="ticket__seat">
                      <div className="row">
                        <div className="col d-flex justify-content-center align-items-center">
                          <img
                            src={
                              item.premiere === "cineone21"
                                ? cineone21
                                : item.premiere === "hiflix"
                                ? hiflix
                                : ebvid
                            }
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
                          <button
                            onClick={() => this.handleTimeSchedule(itemTime, item.id)}
                            key={index}
                            className={
                              item.id === scheduleId && itemTime === timeSchedule
                                ? "mulish-600 isActive__time fw-bold btn btn-primary"
                                : "mulish-600 text-secondary btn btn-outline-primary"
                            }
                            style={{ margin: "8px 12px", fontSize: "13px" }}
                          >
                            {itemTime}
                          </button>
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
                          disabled={item.id !== scheduleId}
                        >
                          Book now
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
                {/* <span className="line__detail">
                  <h2 className="text-primary mulish-600">view more</h2>
                </span> */}

                <Pagination
                  previousLabel={"Previous"}
                  nextLabel={"Next"}
                  breakLabel={"..."}
                  pageCount={ticketInfo.totalPage}
                  onPageChange={this.handlePagination}
                  containerClassName={"pagination"}
                  disabledClassName={"pagination__disabled"}
                  activeClassName={"pagination__active"}
                />
              </div>
            ) : (
              <div className="col-12 text-center text-secondary mulish-700">
                <h1>No schedule</h1>
              </div>
            )}
          </div>
        </section>

        <Footer />
      </>
    );
  }
}

export default MovieDetail;
