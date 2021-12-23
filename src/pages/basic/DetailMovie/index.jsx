import React, { Component } from "react";
import qs from "querystring";

class DetailMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieId: props.match.params.movieId
    };
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
