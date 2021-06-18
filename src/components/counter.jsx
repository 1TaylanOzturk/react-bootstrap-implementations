import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import "../styles/counter.css";

function Counter() {
  const [count, setCount] = useState(0);

  function handleIncreasing() {
    setCount(count + 1);
  }

  function handleDecreasing() {
    setCount(count - 1);
  }

  function handleRestarting() {
    setCount(0);
  }

  return (
    <div>
      <Card>
        <Card.Body className="counter-component-card-body">{count}</Card.Body>
        <Card.Footer>
          <Button onClick={handleIncreasing} variant="success" block>
            Increase
          </Button>
          <Button onClick={handleDecreasing} variant="warning" block>
            Decrease
          </Button>
          <Button onClick={handleRestarting} variant="danger" block>
            Restart
          </Button>
        </Card.Footer>
      </Card>
    </div>
  );
}

export default Counter;
