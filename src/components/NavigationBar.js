import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Navbar";
import "../css/NavigationBar.css";
import logo from "../images/logo.png";

class NavigationBar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="navigationBar">
        <Navbar collapseOnSelect={true} expand="lg" variant="dark">
          <Navbar.Brand>
            <div className="test">
            <img src={logo} alt="logo"/>
            <div className="name">Lauren Finley</div>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="justify-content-end">
            <Nav>
              <NavLink style={{ color: "hsla(0,0%,100%,.5)" }} to="/">
                Home
              </NavLink>
            </Nav>
            <Nav>
              <NavLink style={{ color: "hsla(0,0%,100%,.5)" }} to="/about">
                About
              </NavLink>
            </Nav>
            <Nav>
              <NavLink style={{ color: "hsla(0,0%,100%,.5)" }} to="/contact">
                Contact
              </NavLink>
            </Nav>
            <Nav>
              <NavLink style={{ color: "hsla(0,0%,100%,.5)" }} to="/resume">
                Resume
              </NavLink>
            </Nav>
            <Nav>
              <NavLink style={{ color: "hsla(0,0%,100%,.5)" }} to="/Projects">
                Projects
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default NavigationBar;
