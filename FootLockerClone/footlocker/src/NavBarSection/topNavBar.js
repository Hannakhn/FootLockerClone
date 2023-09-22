import React, { Component } from "react";
import {
  Modal,
  ModalBody,
  ModalHeader,
  Nav,
  NavItem,
  NavLink,
  NavbarBrand,
  Navbar,
} from "reactstrap";
import Divider from "@mui/material/Divider";
import SearchBar from "./SearchBar";
import DropdownPortion from "./dropDownMenu";


function NavbarTop() {
  return (
    <div>
      <DropdownPortion />
        <Navbar className="my-2" expand="md">

          <NavbarBrand href="/">
            <img
              className="footlockerImageLogo"
              alt="logo"
              src="img/logo.jpg"
              style={{
                height: 80,
                width: 230,
              }}
            />
            <SearchBar />
          </NavbarBrand>

        </Navbar>
    </div>
  );
}

export default NavbarTop;
