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
        <Navbar expand="lg" variant="dark" sticky="top">
          <Navbar.Brand>
            <div className="brandContent">
              <img src={logo} alt="logo" />
              Lauren Finley
            </div>
          </Navbar.Brand>
          <Nav>
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
              <NavLink style={{ color: "hsla(0,0%,100%,.5)" }} to="/resume">
                Resume
              </NavLink>
            </Nav>
            <Nav>
              <NavLink style={{ color: "hsla(0,0%,100%,.5)" }} to="/Projects">
                Projects
              </NavLink>
            </Nav>
            <Nav>
              <NavLink style={{ color: "hsla(0,0%,100%,.5)" }} to="/contact">
                Contact
              </NavLink>
            </Nav>
          </Nav>
        </Navbar>
      </div>
    );
  }
}

export default NavigationBar;
