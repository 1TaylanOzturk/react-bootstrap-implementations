import React, { useState } from "react";
import { ProgressBar, Button } from "react-bootstrap";

function ChargeCalculator() {
  const [charge, setCharge] = useState(50);

  function handleCharge() {
    if (charge < 100) {
      setCharge(charge + 1);
    }
  }

  function handleSpendingCharge() {
    if (charge > 0) {
      setCharge(charge - 1);
    }
  }

  return (
    <div>
      <ProgressBar
        now={charge}
        label={"%" + charge.toString()}
        style={{ fontSize: 20, height: 40 }}
        animated
      ></ProgressBar>
      <Button onClick={handleSpendingCharge} variant="danger">
        Spend the Charge
      </Button>
      <Button onClick={handleCharge} variant="success">
        Charge
      </Button>
    </div>
  );
}

export default ChargeCalculator;
