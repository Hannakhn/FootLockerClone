import React, { Component } from "react";
import {
  Nav,
  NavItem,
  NavLink,
  NavbarBrand,
  Navbar,
} from "reactstrap";

function SecondNavbar() {
  return (
    <div>
      <Nav expand="md" className="secondNav">
        <NavItem>
          <NavLink href="#">NEW ARRIVALS</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">MEN'S</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">KIDS'</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">CLOTHING</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">RELEASES</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">BRANDS</NavLink>
        </NavItem>
      </Nav>
    </div>
  );
}

export default SecondNavbar;