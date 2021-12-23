import React, { useState, useEffect } from "react";
import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function CounterFunc() {
  const [count, setCount] = useState(0);

  const increaseCounter = () => {
    setCount(count + 1);
  };

  const decreaseCounter = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <Container className="text-center">
      <h2>Counter App</h2>
      <h3>{count}</h3>
      <Button variant="primary" onClick={decreaseCounter}>
        -
      </Button>
      <Button variant="secondary" className="mx-2" onClick={reset}>
        RESET
      </Button>
      <Button variant="primary" onClick={increaseCounter}>
        +
      </Button>

      <Link to="/basic-react">oke</Link>
    </Container>
  );
}
