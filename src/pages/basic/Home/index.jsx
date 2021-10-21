import React, { Component } from "react";
import Navbar from "../../../components/Navbar";
import Card from "../../../components/Card";
import axios from "../../../utils/axios.js";
import Pagination from "react-paginate";

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
        // console.log(res);
        this.setState({
          data: res.data.data,
          pageInfo: res.data.pagination
        });
      })
      .catch((err) => console.log(err));
  };

  handlePagination = (e) => {
    const selectedPage = e.selected + 1;
    this.setState(
      {
        page: selectedPage
      },
      () => {
        this.getDataMovie();
      }
    );
  };

  handleDetail = (data) => {
    // [1] = bisa digunakan biasanya untuk url params
    // this.props.history.push(`/basic-detail?movieId=${data}`);

    // [2] = bisa digunkan jika data tidak mau ditampilkan diurl
    // this.props.history.push("/basic-detail", { movieId: data });

    // [3] = bisa digunakan untuk detail produk/data
    this.props.history.push(`/basic-detail/${data}`);
  };

  render() {
    const { data, pageInfo } = this.state;
    return (
      <div className="container text-center">
        <h1>Home page</h1>
        <Navbar />
        <hr />

        <div className="row">
          {data.map((item) => (
            <div className="col-md-4" key={item.id}>
              <Card data={item} handleDetail={this.handleDetail} />
            </div>
          ))}
        </div>
        <Pagination
          previousLabel={"Previous"}
          nextLabel={"Next"}
          breakLabel={"..."}
          pageCount={pageInfo.totalPage}
          onPageChange={this.handlePagination}
          containerClassName={"pagination"}
          disabledClassName={"pagination__disabled"}
          activeClassName={"pagination__active"}
        />
      </div>
    );
  }
}

export default Home;
