import React from "react";
import { Link } from "react-router-dom";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";
import "../css/NavigationBar.css";
import logo from "../images/logo.png";

class NavigationBar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="navigationBar">
        <Navbar>
          <NavbarBrand tag={Link} to="/">
            <div className="brandContent">
              <img src={logo} alt="logo" />
              Lauren Finley
            </div>
          </NavbarBrand>
          <Nav>
            <NavItem>
              <NavLink tag={Link} to="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/about">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/resume">Resume</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/projects">Projects</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag ={Link} to="contact">Contact</NavLink>
            </NavItem>
          </Nav>
        </Navbar>
      </div>
    );
  }
}

export default NavigationBar;
