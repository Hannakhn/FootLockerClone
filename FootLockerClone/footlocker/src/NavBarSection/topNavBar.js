import React, { useState } from "react";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBCollapse,
} from "mdb-react-ui-kit";

export default function NavbarTop() {
  const [showBasic, setShowBasic] = useState(false);

  return (
    <header>
      <MDBNavbar expand="lg" className="entireNavbar">
        <MDBContainer fluid>
          <MDBNavbarBrand href="/home">
            <img
              src="img/logo.jpg"
              height="90"
              alt=""
              loading="lazy"
              href="/home"
            />
          </MDBNavbarBrand>
          <form className="d-flex input-group w-auto">
            <input
              type="search"
              className="form-control"
              placeholder="Search"
              aria-label="Search"
            />
            <MDBBtn color="dark">
              <MDBIcon fas icon="search" />
            </MDBBtn>
          </form>

          <MDBNavbarToggler
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setShowBasic(!showBasic)}
          >
            <MDBIcon icon="bars" fas />
          </MDBNavbarToggler>

          <MDBCollapse navbar show={showBasic}>
            <MDBNavbarNav className="navBarItems">
              <MDBNavbarItem >
                <MDBDropdown >
                  <MDBDropdownToggle 
                    tag="a"
                    className="nav-link center"
                    role="button"
                    active
                    aria-current="page"
                  >
                    Find a Store
                  </MDBDropdownToggle>
                  <MDBDropdownMenu>
                    <MDBBtn>Find a Store</MDBBtn>
                    <MDBDropdownItem link>Set Location</MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href="#" className="navBarItems">
                  Welcome, Sign In
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href="#" className="navBarItems">
                  Customer Service
                </MDBNavbarLink>
              </MDBNavbarItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </header>
  );
}
