import React, { useState } from "react";
import { Form, Button, Modal } from "react-bootstrap";

function LoginForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showModal, setShowModal] = useState(true);
  const [emailInputValue, setEmailInputValue] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setIsSubmitted(true);
  }

  function handleClosingModal() {
    setShowModal(false);
  }

  function handleEmailInputValue(event) {
    setEmailInputValue(event.target.value);
  }

  if (isSubmitted) {
    return (
      <div>
        <Modal show={showModal} onHide={handleClosingModal} centered>
          <Modal.Header closeButton>
            <Modal.Title>Succesful !</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>
              We sent a message to {emailInputValue}. Confirm it and after that
              you may enter to the site !
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="dark" onClick={handleClosingModal}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClosingModal}>
              Okay
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="form-username">
          <Form.Label>Username</Form.Label>
          <Form.Control placeholder="Enter Your username" />
        </Form.Group>

        <Form.Group controlId="form-email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email"
            onChange={handleEmailInputValue}
            required
          />
        </Form.Group>

        <Form.Group controlId="form-password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter your password"
            required
          />
        </Form.Group>

        <Form.Group controlId="form-checkbox">
          <Form.Check type="checkbox" label="I read the contract" required />
        </Form.Group>

        <Button type="submit">Register</Button>

        <Form.Text className="text-muted">
          We won't share your informations with strangers
        </Form.Text>
      </Form>
    </div>
  );
}

export default LoginForm;
