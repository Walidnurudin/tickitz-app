import React, { Component } from "react";
import "./index.css";
import axios from "../../../utils/axios";
import { noImage } from "../../../assets/img";
import { Footer, Navbar, JoinNow, Hero, MovieCard } from "../../../components";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      dataUser: {},
      data: [],
      page: 1,
      limit: 0,
      search: "",
      sort: "name ASC",
      pageInfo: {}
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
    this.getDataMovie();
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
    const { dataUser, data } = this.state;
    return (
      <>
        <Navbar
          imageProfile={
            dataUser.image ? `${process.env.REACT_APP_API}uploads/user/${dataUser.image}` : noImage
          }
        />

        <Hero />

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
              {data.map((item) => (
                <div className="now__showing--img" key={item.id}>
                  <img
                    src={
                      item.image
                        ? `${process.env.REACT_APP_API}uploads/movie/${item.image}`
                        : noImage
                    }
                    alt={item.name}
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
              {data.map((item) => (
                <MovieCard
                  key={item.id}
                  name={item.name}
                  image={item.image}
                  category={item.category}
                  handleDetail={() => this.handleDetail(item.id)}
                />
              ))}
            </div>
          </div>
        </div>

        {/* <!-- JOIN NOW --> */}
        <JoinNow />

        <Footer />
      </>
    );
  }
}

export default Home;
