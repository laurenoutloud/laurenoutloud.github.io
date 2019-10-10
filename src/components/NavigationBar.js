import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Navbar";

class NavigationBar extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
    return (
      <div className="navigationBar">
        <Navbar collapseOnSelect bg="dark" expand="lg" variant="dark">
          <Navbar.Brand>Lauren Finley</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse>
            <Nav>
              <NavLink style={{ color: 'hsla(0,0%,100%,.5)' }} to="/">Home</NavLink>
            </Nav>
            <Nav>
              <NavLink style={{ color: 'hsla(0,0%,100%,.5)' }} to="/about">About</NavLink>
            </Nav>
            <Nav>
              <NavLink style={{ color: 'hsla(0,0%,100%,.5)' }} to="/contact">Contact</NavLink>
            </Nav>
            <Nav>
              <NavLink style={{ color: 'hsla(0,0%,100%,.5)' }} to="/resume">Resume</NavLink>
            </Nav>
            <Nav>
              <NavLink style={{ color: 'hsla(0,0%,100%,.5)' }} to="/Projects">Projects</NavLink>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default NavigationBar;
