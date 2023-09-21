import React, { useState } from "react";
import {
  Collapse,
  Button,
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
  Dropdown,
  NavbarText,
} from "reactstrap";

function DropdownPortion() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(!dropdownOpen);
  return (
    <div>
      <Nav expand="md" className="dropDownMenu">
        <Dropdown nav isOpen={dropdownOpen} toggle={toggle}>
          <DropdownToggle nav caret>
            Find a Store
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem>
              <Button>Find a Store</Button>
            </DropdownItem>
            <DropdownItem>Set Store Location</DropdownItem>
          </DropdownMenu>
        </Dropdown>
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
