import React from "react";
import { Link } from "react-router-dom";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink, NavbarToggler, Collapse } from "reactstrap";
import "../css/NavigationBar.css";
import logo from "../images/logo.png";

class NavigationBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({isOpen: !this.state.isOpen}); 
  }

  render() {
    return (
      <div className="navigationBar">
        <Navbar expand="md" className="navbar-dark">
          <NavbarBrand tag={Link} to="/">
            <div className="brandContent">
              <img src={logo} alt="logo" />
              Lauren Finley
            </div>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle}/>
          <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" onClick={!this.state.isOpen ? "" : this.toggle} navbar>
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
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default NavigationBar;
