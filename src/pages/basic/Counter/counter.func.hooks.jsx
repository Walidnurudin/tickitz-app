import React, { useState, useEffect } from "react";
import { Container, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { increaseCounter, decreaseCounter, reset } from "../../../stores/actions/counter";

function CounterFuncHooks() {
  // const [count, setCount] = useState(0);

  // const increaseCounter = () => {
  //   setCount(count + 1);
  // };

  // const decreaseCounter = () => {
  //   setCount(count - 1);
  // };

  // const reset = () => {
  //   setCount(0);
  // };

  // mapStateToProps
  const constState = useSelector((state) => state.counter);

  // mapDispatchToProps
  const dispatch = useDispatch();

  return (
    <Container className="text-center">
      <h2>Counter App</h2>
      <h3>{constState.count}</h3>
      <Button variant="primary" onClick={() => dispatch(decreaseCounter())}>
        -
      </Button>
      <Button variant="secondary" className="mx-2" onClick={() => dispatch(reset())}>
        RESET
      </Button>
      <Button variant="primary" onClick={() => dispatch(increaseCounter())}>
        +
      </Button>
    </Container>
  );
}

export default CounterFuncHooks;
