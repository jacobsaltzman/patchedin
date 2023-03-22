import React from "react";
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';



function Navigation(){

  return(
<Navbar bg="light" expand="lg" collapseOnSelect>
  <Navbar.Brand as={Link} to="/">
    add image tag here
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto">
      <Nav.Link as={Link} to="/" className="text-dark mr-3">Home</Nav.Link>
      <Nav.Link as={Link} to="/about" className="text-dark mr-3">About</Nav.Link>
      <NavDropdown title="Projects" id="basic-nav-dropdown" className="text-dark mr-3">
        <NavDropdown.Item as={Link} to="/projects/me">My Projects</NavDropdown.Item>
        <NavDropdown.Item as={Link} to="/contributions">My Contributions</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item as={Link} to="/projects">All Projects</NavDropdown.Item>
      </NavDropdown>
      <Nav className="ml-auto">
        <Nav.Link as={Link} to="/signup" className="btn btn-primary">Sign up</Nav.Link>
        <Nav.Link as={Link} to="/login" className="btn btn-outline-primary">Log in</Nav.Link>
      </Nav>
    </Nav>
  </Navbar.Collapse>
</Navbar>
  )
}

export default Navigation;