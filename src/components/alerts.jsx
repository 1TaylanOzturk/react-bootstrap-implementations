import React, { useState } from "react";
import { Alert, Button } from "react-bootstrap";

function Alerts() {
  const [show, setShow] = useState(false);
  if (show) {
    return (
      <div>
        <Alert variant="danger" onClose={() => setShow(false)} dismissible>
          <Alert.Heading>Oooops, something went wrong</Alert.Heading>
          <p>
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum
            dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
            amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem
            ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor
            sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum
            dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
            amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem
            ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor
            sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
          </p>
        </Alert>
      </div>
    );
  }
  return (
    <Button variant="primary" onClick={() => setShow(true)}>
      Show Alert
    </Button>
  );
}

export default Alerts;
