import React, { Component } from "react";
import {
  Nav,
  Navbar,
  NavbarToggler,
  Collapse,
  NavItem,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Input,
  Label,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { NavLink, Link } from "react-router-dom";

class HomeNavbarComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isNavOpen: false,
      isModalOpen: false,
    };
    this.toggleNav = this.toggleNav.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen,
    });
  }

  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  }

  handleLogin(event) {
    alert(`Username: ${this.username.value} Password: ${this.password.value} Remember: 
        ${this.remember.checked}`);
    this.toggleModal();
    this.preventDefault();
  }

  render() {
    return (
      <React.Fragment>
        <Navbar dark sticky="top pull-right" expand="md">
          <div className="container">
            <NavbarToggler onClick={this.toggleNav} />
            <Collapse isOpen={this.state.isNavOpen} navbar>
              <Nav navbar>
                <NavItem>
                  <NavLink className="nav-link" to="/">
                    Find a Store
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="">
                    Welcome, Sign In
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/">
                    Customer Service
                  </NavLink>
                </NavItem>
                <NavItem>
                  <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav>Start Here!</DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem tag={Link} to={`/calendar`}>
                        Calender
                      </DropdownItem>
                      <DropdownItem tag={Link} to={`/stickynotes`}>
                        Sticky Notes
                      </DropdownItem>
                      <DropdownItem tag={Link} to={`/todolist`}>
                        To-Do List
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </NavItem>
              </Nav>
              <span className="navbar-text ml-auto">
                <Button outline onClick={this.toggleModal}>
                  Sign In
                </Button>
              </span>
            </Collapse>
          </div>
        </Navbar>
       
      </React.Fragment>
    );
  }
}

export default HomeNavbarComponent;
