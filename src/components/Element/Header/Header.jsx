import React from 'react'
import { Button } from 'react-bootstrap';
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { CustomButton } from '../Button/Button';


export const Header = () => {
  return (
    <Navbar expand="lg" className="pt-3">
      <Container className="nav-layout layout">
        <Navbar.Brand href="#home">
          <img src="/navbar/Logo.svg" alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="gap-nav text-white">
            <Nav.Link href="#home" className="NavLink">
              Product
            </Nav.Link>
            <Nav.Link href="#link" className="NavLink">
              Blog
            </Nav.Link>
            <Nav.Link href="#link" className="NavLink">
              Support
            </Nav.Link>
            <Nav.Link href="#link" className="NavLink">
              Log In
            </Nav.Link>

            <CustomButton className="navbar-btn">Get Acces</CustomButton>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
