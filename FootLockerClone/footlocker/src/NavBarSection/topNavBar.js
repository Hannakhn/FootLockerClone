import React, { Component } from 'react';
import { Modal, ModalBody, ModalHeader, Nav, NavItem, NavLink, NavbarBrand, Navbar } from "reactstrap";
import SearchBar from './SearchBar';
import DropdownPortion from './dropDownMenu';



function NavbarTop() {
  return (
    <>
      <Navbar className="my-2" color="dark" dark>
        <NavbarBrand href="/">
          <img className='footlockerImageLogo'
            alt="logo"
            src="img/logo.jpg"
            style={{
              height: 80,
              width: 230,
            }}
          />
      <SearchBar />
        </NavbarBrand>
<DropdownPortion />
      </Navbar>
    </>
  );
}

export default NavbarTop;


