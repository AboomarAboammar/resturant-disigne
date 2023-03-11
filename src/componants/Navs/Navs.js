import React from 'react'
import { Container, Nav, Navbar } from "react-bootstrap";
import "./Navs.css";
import logo from "./../../assets/logo.png"
const Navs = () => {
  return (
    <Navbar  expand="lg">
    <Container>
      <Navbar.Brand href="#home">
        <img className='w-200px h-200px' src={logo} alt='logo'/>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Abuot us</Nav.Link>
          <Nav.Link href="#home">Explore foods</Nav.Link>
          <Nav.Link href="#link">reviews</Nav.Link>
          <Nav.Link href="#home">FAQ</Nav.Link>
          
        </Nav>
        <Nav>
            <Nav.Link id='lastnav'>1234567891</Nav.Link>
            
          </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);
  };

  


export default Navs