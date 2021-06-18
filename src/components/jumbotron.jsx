import React from "react";
import { Jumbotron, Button } from "react-bootstrap";
import "../styles/jumbotron.css";

function JumboTron() {
  return (
    <div className="jumbotron-container">
      <Jumbotron className="jumbotron">
        <h1>Title</h1>
        <p>
          Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum
          dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
          amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem
          ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor
          sit amet.
        </p>
        <Button className="jumbotron-btn" variant="primary">
          Read More
        </Button>
      </Jumbotron>
    </div>
  );
}

export default JumboTron;
