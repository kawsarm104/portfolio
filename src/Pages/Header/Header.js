import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import {NavLink} from "react-router-dom"
const Header = () => {
  return (
    <Navbar
      sticky="top"
      bg=""
      expand="lg"
      className=""
      style={{ backgroundColor: "#c3d8e9" }}
    >
      <Container>
        <Navbar.Brand href="/">Md. Kawsar Hossain</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} to="/home">Home</Nav.Link>

            <Nav.Link as={NavLink} to="/aboutme">About Me</Nav.Link>
            <Nav.Link as={NavLink} to="/education">Education</Nav.Link>
            <Nav.Link as={NavLink} to="/portfolio">Portfolio</Nav.Link>

            <Nav.Link as={NavLink} to="/contact">Contact Me</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
