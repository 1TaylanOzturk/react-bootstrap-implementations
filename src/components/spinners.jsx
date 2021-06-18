import React, { useState } from "react";
import { Spinner, Button } from "react-bootstrap";

function Spinners() {
  const [showSpinner, setShowSpinner] = useState(false);

  function clickHandler() {
    setShowSpinner(true);
  }

  if (!showSpinner) {
    return (
      <div>
        <Button variant="primary" onClick={clickHandler}>
          Click Me
        </Button>
      </div>
    );
  }
  return (
    <div>
      <Button variant="info" disabled>
        <Spinner animation="border" as="span" size="md" />
      </Button>
    </div>
  );
}

export default Spinners;
