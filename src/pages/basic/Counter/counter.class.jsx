import React, { Component } from "react";
import { Button, Container } from "react-bootstrap";
import { connect } from "react-redux";
import { increaseCounter, decreaseCounter, reset } from "../../../stores/actions/counter";

class CounterClass extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }

  // increaseCounter = () => {
  //   this.setState({
  //     count: this.state.count + 1
  //   });
  // };

  // decreaseCounter = () => {
  //   this.setState({
  //     count: this.state.count - 1
  //   });
  // };

  // reset = () => {
  //   this.setState({
  //     count: 0
  //   });
  // };

  render() {
    const { count } = this.props.counter;
    return (
      <Container className="text-center">
        <h2>Counter App</h2>
        <h3>{count}</h3>
        <Button variant="primary" onClick={this.props.decreaseCounter}>
          -
        </Button>
        <Button variant="secondary" className="mx-2" onClick={this.props.reset}>
          RESET
        </Button>
        <Button variant="primary" onClick={this.props.increaseCounter}>
          +
        </Button>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  counter: state.counter
});

const mapDispatchToProps = {
  increaseCounter,
  decreaseCounter,
  reset
};

export default connect(mapStateToProps, mapDispatchToProps)(CounterClass);
