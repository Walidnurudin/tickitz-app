import React, { Component } from "react";
import "./index.css";
import axios from "../../../utils/axios";
import { hero, spiderman } from "../../../assets/img";
import Footer from "../../../components/Footer";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      page: 1,
      limit: 3,
      search: "",
      sort: "name ASC",
      pageInfo: {}
    };
  }

  componentDidMount() {
    this.getDataMovie();
  }

  getDataMovie = () => {
    axios
      .get(
        `/movie?page=${this.state.page}&limit=${this.state.limit}&search=${this.state.search}&sort=${this.state.sort}`
      )
      .then((res) => {
        this.setState({
          data: res.data.data,
          pageInfo: res.data.pagination
        });
      })
      .catch((err) => console.log(err));
  };

  handleDetail = (id) => {
    this.props.history.push(`/movie-detail/${id}`);
  };

  render() {
    return (
      <>
        {/* <!-- HERO --> */}
        <section className="container">
          <div className="row hero__home">
            <div className="col-12 col-md-6 d-flex flex-column justify-content-center">
              <h6 className="mulish-400 text-secondary">Nearest Cinema, Newest Movie,</h6>
              <h1 className="mulish-700 text-primary">Find out now!</h1>
            </div>
            <div className="col-12 col-md-6 d-flex justify-content-center mt-5 mt-md-0">
              <img src={hero} alt="hero image" width="370px" />
            </div>
          </div>
        </section>

        {/* <!-- NOW SHOWING --> */}
        <div className="now__showing bg-light">
          <div className="container">
            <div className="d-flex justify-content-between now__showing--header">
              <span className="text-primary mulish-700 now__showing--satu">Now Showing</span>
              <span className="text-primary mulish-700 now__showing--dua align-self-center">
                view all
              </span>
            </div>

            <div className="now__showing--movie">
              {this.state.data.map((item) => (
                <div className="now__showing--img" key={item.id}>
                  <img
                    src={
                      item.image
                        ? `http://localhost:3001/uploads/movie/${item.image}`
                        : "https://www.a1hosting.net/wp-content/themes/arkahost/assets/images/default.jpg"
                    }
                    alt="spiderman"
                    width="160px"
                  />
                  <div>
                    <p
                      className="mulish-700"
                      style={{ margin: "24px 0px 10px 0px", fontSize: "18px" }}
                    >
                      {item.name}
                    </p>
                    <span className="text-secondary" style={{ fontSize: "12px" }}>
                      {item.category}
                    </span>

                    <button
                      className="btn btn-outline-primary mulish-400"
                      style={{ margin: "45px 0px 16px 0px", fontSize: "14px" }}
                    >
                      Details
                    </button>
                    <button className="btn btn-primary mulish-400" style={{ fontSize: "14px" }}>
                      Book now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* <!-- UP COMING --> */}
        <div className="up__coming">
          <div className="container">
            <div className="d-flex justify-content-between up__showing--header">
              <span className="mulish-700 up__coming--satu">Upcoming Movies</span>
              <span className="text-primary mulish-700 up__coming--dua align-self-center">
                view all
              </span>
            </div>

            <div className="up__coming--month">
              <button className="btn btn-primary mulish-700">September</button>
              <button className="btn btn-outline-primary mulish-700">October</button>
              <button className="btn btn-outline-primary mulish-700">November</button>
              <button className="btn btn-outline-primary mulish-700">December</button>
              <button className="btn btn-outline-primary mulish-700">January</button>
              <button className="btn btn-outline-primary mulish-700">February</button>
              <button className="btn btn-outline-primary mulish-700">March</button>
              <button className="btn btn-outline-primary mulish-700">April</button>
              <button className="btn btn-outline-primary mulish-700">May</button>
              <button className="btn btn-outline-primary mulish-700">June</button>
              <button className="btn btn-outline-primary mulish-700">July</button>
              <button className="btn btn-outline-primary mulish-700">August</button>
            </div>

            <div className="up__coming--movie">
              {this.state.data.map((item) => (
                <div className="up__coming--img" key={item.id}>
                  <img
                    src={
                      item.image
                        ? `http://localhost:3001/uploads/movie/${item.image}`
                        : "https://www.a1hosting.net/wp-content/themes/arkahost/assets/images/default.jpg"
                    }
                    alt="spiderman"
                    width="160px"
                  />
                  <div>
                    <span
                      className="mulish-700"
                      style={{ margin: "24px 0px 10px 0px", fontSize: "18px" }}
                    >
                      {item.name}
                    </span>
                    <span
                      className="text-secondary"
                      style={{ fontSize: "12px", marginBottom: "40px" }}
                    >
                      {item.category}
                    </span>

                    <button
                      className="btn btn-outline-primary mulish-400"
                      onClick={() => this.handleDetail(item.id)}
                    >
                      Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* <!-- JOIN NOW --> */}
        <div className="container">
          <div className="join__now">
            <div className="join__now--title">
              <span className="mulish-400 join__now--satu">Be the vanguard of the</span>
              <span className="mulish-700 text-primary join__now--dua">Moviegoers</span>
            </div>

            <div className="join__now--form">
              <input
                type="email"
                placeholder="Type your email"
                className="join__now--input mulish-600"
              />
              <button className="btn btn-primary join__now--btn mt-3 m-md-0">join now</button>
            </div>

            <div className="join__now--desc">
              <span className="mulish-400 text-secondary">
                By joining you as a Tickitz member,
                <br />
                we will always send you the latest updates via email .
              </span>
            </div>
          </div>
        </div>

        <Footer />
      </>
    );
  }
}

export default Home;
