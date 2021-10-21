import React, { Component } from "react";
import qs from "querystring";

class DetailMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieId: props.match.params.movieId
    };
  }
  componentDidMount() {
    // [1]
    // const urlParams = qs.parse(this.props.location.search);
    // [2]
    // console.log(this.props.location.state);
    // [3]
    console.log(this.props.match.params.movieId);
  }

  render() {
    return (
      <>
        <h1>DetailMovie page</h1>
      </>
    );
  }
}

export default DetailMovie;
