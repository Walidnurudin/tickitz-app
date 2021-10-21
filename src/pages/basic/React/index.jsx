import React, { Component } from "react";
import Navbar from "../../../components/Navbar";
import { Button, Modal } from "react-bootstrap";
import CardMovie from "../../../components/Card";

class BasicReact extends Component {
  constructor() {
    super();
    this.state = {
      name: "Walid nurudin",
      data: [],
      search: "",
      show: false
    };
  }

  componentDidMount() {
    this.setState({
      data: [
        {
          movieName: "Spiderman"
        },
        {
          movieName: "Batman"
        }
      ]
    });
  }

  handelClick = () => {
    console.log("Click");
  };

  changeText = (e) => {
    console.log(e.target.value);
    console.log(e);

    this.setState({
      search: e.target.value
    });
  };

  handleSearch = (event) => {
    if (event.key === "Enter") {
      console.log("User press enter");
      this.setState({
        search: event.target.value
      });
    }
  };

  handleShow = () => {
    this.setState({
      show: true
    });
  };

  handleClose = () => {
    this.setState({
      show: false
    });
  };

  handleUpdateMovie = (data) => {
    console.log("UPDATE MOVIE", data);
  };

  render() {
    return (
      <>
        <h1>Basic React Page !</h1>
        <Navbar name="Walid" />
        <h1>{this.state.name}</h1>
        {this.state.data.map((item, index) => (
          <div key={index}>
            <h2>{item.movieName}</h2>
          </div>
        ))}

        <button onClick={this.handelClick}>Click</button>

        <input
          type="text"
          placeholder="search ..."
          name="search"
          onChange={(e) => this.changeText(e)}
        />

        <input type="text" placeholder="search ..." name="search" onKeyPress={this.handleSearch} />

        <hr />

        {/* CONDITIONAL */}
        {/* short logic */}
        {this.state.search && <h5>Your keyword search is {this.state.search}</h5>}

        {/* ternary */}
        {this.state.data.length > 0 ? (
          this.state.data.map((item, index) => (
            <div key={index}>
              <h2>{item.movieName}</h2>
            </div>
          ))
        ) : (
          <h5>Data not Found</h5>
        )}

        {/* STYLE IN REACT */}

        {/* BOOTSTRAP */}
        <button className="btn btn-primary">Primary</button>
        <Button variant="primary">Primary</Button>

        <Button variant="primary" onClick={this.handleShow}>
          Launch demo modal
        </Button>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you re reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={this.handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>

        <hr />

        {/* COMPONENT COMUNICATION */}
        <CardMovie handleUpdate={this.handleUpdateMovie} />
      </>
    );
  }
}

export default BasicReact;
