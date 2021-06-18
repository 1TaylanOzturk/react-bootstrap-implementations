import React, { Component } from "react";
import { Toast } from "react-bootstrap";
import "../styles/toast.css";

class MyToastComponent extends Component {
  constructor() {
    super();
    this.state = { minute: 0 };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 60000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({ minute: this.state.minute + 1 });
  }

  render() {
    this.minInfo = "";
    if (this.state.minute === 0) {
      this.minInfo = "Just Now";
    } else if (this.state.minute === 1) {
      this.minInfo = this.state.minute + " min ago";
    } else {
      this.minInfo = this.state.minute + " mins ago";
    }
    return (
      <>
        <Toast className="toast">
          <Toast.Header>
            <img src="" className="rounded mr-2" alt="[IMG]" />
            <strong className="mr-auto">R-Bootstrap</strong>
            <small>{this.minInfo}</small>
          </Toast.Header>
          <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
        </Toast>
      </>
    );
  }
}

export default MyToastComponent;
