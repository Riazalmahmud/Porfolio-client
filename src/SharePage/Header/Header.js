import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from "../../image/logo.png"

import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import "./Header.css"
const Header = () => {
    return (
 <div>
 <Navbar expand="lg" className='header-bg'>
  <Container >
    <Navbar.Brand href="#home" > <img src={logo} alt="brandLogo" className='img-fluid brand-logo' /> </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
       
          <Nav.Link as={Link} to="/Home">
            Home
        </Nav.Link>
          <Nav.Link as={Link} to="/About">
            About
        </Nav.Link>
          <Nav.Link as={Link} to="/Blog">
            Blog
        </Nav.Link>
          <Nav.Link as={Link} to="/Contact">
            Contact
        </Nav.Link>
       
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default Header;