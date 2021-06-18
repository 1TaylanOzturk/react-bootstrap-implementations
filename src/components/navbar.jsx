import React from "react";
import { Navbar, Nav, NavDropdown, Button } from "react-bootstrap";
import "../styles/navbar.css";

function NavigationBar() {
  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg" id="navbar">
        <Navbar.Brand href="#home">Brand Name</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link1">Link</Nav.Link>
            <Nav.Link href="#link2">Link</Nav.Link>
            <NavDropdown title="Dropdown">
              <NavDropdown.Item>Item</NavDropdown.Item>
              <NavDropdown.Item>Item</NavDropdown.Item>
              <NavDropdown.Item>Item</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>Item</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Button variant="primary" style={{ fontWeight: "bold" }}>
            Login
          </Button>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default NavigationBar;
