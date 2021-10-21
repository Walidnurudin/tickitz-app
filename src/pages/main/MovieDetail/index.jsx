import React, { Component } from "react";
import "./index.css";
import Footer from "../../../components/Footer";
import axios from "../../../utils/axios";

class MovieDetail extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    this.getDataMovieById();
  }

  getDataMovieById = () => {
    axios
      .get(`/movie/${this.props.match.params.id}`)
      .then((res) => {
        console.log(res);
        this.setState({
          data: res.data.data[0]
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    const { data } = this.state;
    return (
      <>
        {/* <!-- DETAIL MOVIE --> */}
        <header className="container">
          <div className="row detail__movie">
            <div className="col-12 col-md-4 text-center">
              <div className="detail__movie--img">
                <img
                  src={
                    data.image
                      ? `http://localhost:3001/uploads/movie/${data.image}`
                      : "https://www.a1hosting.net/wp-content/themes/arkahost/assets/images/default.jpg"
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
              <input type="date" className="form-control mr-0 me-md-5 date__location__comp" />

              <select
                className="form-select date__location__comp"
                aria-label="Default select example"
              >
                <option selected>Location</option>
                <option value="1">Jakarta</option>
                <option value="2">Bandung</option>
                <option value="3">Indramayu</option>
              </select>
            </div>

            {/* <div className="row">
              <div className="col-12 col-md-4"> */}
            {/* <div className="ticket__seat">
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
                        ebv.id
                      </span>
                      <p className="mulish-400 text-secondary" style={{ marginTop: "4px" }}>
                        Whatever street No.12, South Purwokerto
                      </p>
                    </div>
                  </div>

                  <hr />

                  <div>
                    <span
                      className="mulish-600 text-secondary"
                      style={{ margin: "8px 16px", fontSize: "13px" }}
                    >
                      08:30am
                    </span>
                    <span className="mulish-600" style={{ margin: "8px 16px", fontSize: "13px" }}>
                      10:00am
                    </span>
                    <span
                      className="mulish-600 text-secondary"
                      style={{ margin: "8px 16px", fontSize: "13px" }}
                    >
                      12:00am
                    </span>
                    <span
                      className="mulish-600 text-secondary"
                      style={{ margin: "8px 16px", fontSize: "13px" }}
                    >
                      02:00pm
                    </span>
                    <span
                      className="mulish-600 text-secondary"
                      style={{ margin: "8px 16px", fontSize: "13px" }}
                    >
                      04:00pm
                    </span>
                    <span className="mulish-600" style={{ margin: "8px 16px", fontSize: "13px" }}>
                      18:30pm
                    </span>
                    <span className="mulish-600" style={{ margin: "8px 16px", fontSize: "13px" }}>
                      20:30pm
                    </span>
                    <span
                      className="mulish-600 text-secondary"
                      style={{ margin: "8px 16px", fontSize: "13px" }}
                    >
                      22:30pm
                    </span>
                  </div>

                  <div className="d-flex justify-content-between" style={{ marginTop: "24px" }}>
                    <span className="mulish-400 text-secondary" style={{ fontSize: "16px" }}>
                      Price
                    </span>
                    <span className="mulish-600" style={{ fontSize: "16px" }}>
                      $10.00/seat
                    </span>
                  </div>

                  <div className="d-grid">
                    <button
                      className="btn btn-primary mulish-700 book__now--btn"
                      style={{ fontSize: "14px" }}
                    >
                      Book now
                    </button>
                  </div>
                </div>
              </div>
            </div> */}

            <span className="line">
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
