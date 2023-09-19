import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";

function DropdownPortion() {
  return (
    <div>
      <Nav fixed="top" expand="md" style={{ Color: "white" }} className="inactive">
        <NavItem >
          <NavLink active href="#">
            Find a Store
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Welcome, Sign In</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Customer Service</NavLink>
        </NavItem>
      </Nav>
    </div>
  );
}

export default DropdownPortion;
