import React from "react";
import { Link } from "react-router-dom";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink, NavbarToggler, Collapse } from "reactstrap";
import "../css/NavigationBar.css";
import logo from "../images/logo.png";
import logo2 from "../images/logo2.png";

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
          <div>
          <NavbarBrand tag={Link} to="/">
            <div className="brandContent">
              <img src={logo2} alt="logo" />
              Lauren Finley
            </div> 
          </NavbarBrand>
          <p>
            "The only thing that stands between a person and what they want in
            life is the will to try and the faith to believe it is possible."
            -Rich DeVos
          </p>
          </div>
          <NavbarToggler onClick={this.toggle}/>
          <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" onClick={!this.state.isOpen ? "" : this.toggle} navbar>
            <NavItem>
              <NavLink tag={Link} to="/about">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/projects">Projects</NavLink>
            </NavItem>
            
            
          </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default NavigationBar;