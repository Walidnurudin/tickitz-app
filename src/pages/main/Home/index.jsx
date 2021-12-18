import React, { Component } from "react";
import "./index.css";
import axios from "../../../utils/axios";
import { noImage } from "../../../assets/img";
import { Footer, Navbar, JoinNow, Hero, MovieCard } from "../../../components";
import { getUser } from "../../../stores/actions/user";
import { connect } from "react-redux";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      page: 1,
      limit: 0,
      search: "",
      sort: "name ASC",
      pageInfo: {},

      // BY MONTH
      getDataMonth: [],
      dataMonth: [
        { label: "September", value: 9 },
        { label: "Ocktober", value: 10 },
        { label: "November", value: 11 },
        { label: "December", value: 12 },
        { label: "January", value: 1 },
        { label: "February", value: 2 },
        { label: "March", value: 3 },
        { label: "April", value: 4 },
        { label: "May", value: 5 },
        { label: "June", value: 6 },
        { label: "July", value: 7 },
        { label: "August", value: 8 }
      ],
      month: { label: "September", value: 9 }
    };
  }

  componentDidMount() {
    this.getDataMovie();
  }

  getDataMovie = () => {
    axios
      .get(
        `/movie?page=${this.state.page}&limit=${this.state.limit}&search=${this.state.search}&month=&sort=${this.state.sort}`
      )
      .then((res) => {
        this.setState({
          data: res.data.data,
          pageInfo: res.data.pagination
        });
      })
      .catch((err) => console.log(err));
  };

  handleMonth = (data) => {
    this.setState({
      month: data
    });

    axios
      .get(`/movie?page=&limit=&search=&month=${data.value}&sort=name ASC`)
      .then((res) => {
        this.setState({
          getDataMonth: res.data.data
        });
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  handleDetail = (id) => {
    this.props.history.push(`/movie-detail/${id}`);
  };

  render() {
    const { data, getDataMonth, dataMonth, month } = this.state;
    return (
      <>
        <Navbar imageProfile={this.props.user.data.image} />

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
                        ? `${process.env.REACT_APP_LOCAL}uploads/movie/${item.image}`
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
              {dataMonth.map((item) => (
                <button
                  className={`btn ${
                    month.value === item.value ? "btn-primary" : "btn-outline-primary"
                  }  mulish-700`}
                  key={item.value}
                  onClick={() => this.handleMonth(item)}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="up__coming--movie">
              {getDataMonth.length > 0 ? (
                <>
                  {getDataMonth.map((item) => (
                    <MovieCard
                      key={item.id}
                      name={item.name}
                      image={item.image}
                      category={item.category}
                      handleDetail={() => this.handleDetail(item.id)}
                    />
                  ))}
                </>
              ) : (
                <>
                  <p className="text-center mulish-700">
                    Movie upcoming by month {month.label} not found!
                  </p>
                </>
              )}
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

const mapStateToProps = (state) => ({
  user: state.user
});

const mapDispatchToProps = {
  getUser
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
