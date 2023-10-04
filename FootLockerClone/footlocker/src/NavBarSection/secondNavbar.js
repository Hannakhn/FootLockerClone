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
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from "mdb-react-ui-kit";

export default function SecondNavbar() {
  const [showBasic, setShowBasic] = useState(false);

  const [topRightModal, setTopRightModal] = useState(false);

  const toggleShow = () => setTopRightModal(!topRightModal);

  return (
    <header>
      <MDBNavbar expand="lg" light>
        <MDBContainer fluid className="secondNavbar">
          <MDBNavbarBrand href="#"></MDBNavbarBrand>
          <br></br>
          <br></br>

          <MDBNavbarToggler
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setShowBasic(!showBasic)}
          >
            <MDBIcon icon="bars" fas />
          </MDBNavbarToggler>

          <MDBCollapse navbar show={showBasic}>
            <MDBNavbarNav className="secondNav">
              <MDBNavbarItem>
                <MDBNavbarLink href="#">MEN'S</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href="#">WOMEN'S</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href="#">KIDS'</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href="#">CLOTHING</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href="#">RELEASES</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href="#">BRANDS</MDBNavbarLink>
              </MDBNavbarItem>
            </MDBNavbarNav>
            <MDBIcon
              fas
              icon="heart"
              className="topIcons"
              onClick={toggleShow}
            />
            <MDBModal
              animationDirection="right"
              show={topRightModal}
              tabIndex="-1"
              setShow={setTopRightModal}
            >
              <MDBModalDialog position="top-right" side>
                <MDBModalContent>
                  <MDBModalHeader className="bg-dark text-white">
                    <MDBModalTitle>Favorited Items</MDBModalTitle>
                    <MDBBtn
                      color="none"
                      className="btn-close btn-close-white"
                      onClick={toggleShow}
                    ></MDBBtn>
                  </MDBModalHeader>
                  <MDBModalBody>
                    <div className="row">
                      <div className="col-3 text-center">
                        <i className="fas fa-shopping-cart fa-4x text-dark"></i>
                      </div>

                      <div className="col-9">
                        <p>
                          Do you need more time to make a purchase decision?
                        </p>
                        <p>
                          No pressure, your product will be waiting for you in
                          the cart.
                        </p>
                      </div>
                    </div>
                  </MDBModalBody>
                  <MDBModalFooter>
                    <MDBBtn outline color="dark" onClick={toggleShow}>
                      Close
                    </MDBBtn>
                  </MDBModalFooter>
                </MDBModalContent>
              </MDBModalDialog>  
            </MDBModal>

            <MDBIcon fas icon="shopping-cart" className="topIcons" onClick={toggleShow} />
            <MDBModal
              animationDirection="right"
              show={topRightModal}
              tabIndex="-1"
              setShow={setTopRightModal}
            >
              <MDBModalDialog position="top-right" side>
                <MDBModalContent>
                  <MDBModalHeader className="bg-dark text-white">
                    <MDBModalTitle>Cart Items</MDBModalTitle>
                    <MDBBtn
                      color="none"
                      className="btn-close btn-close-white"
                      onClick={toggleShow}
                    ></MDBBtn>
                  </MDBModalHeader>
                  <MDBModalBody>
                    <div className="row">
                      <div className="col-3 text-center">
                        <i className="fas fa-shopping-cart fa-4x text-dark"></i>
                      </div>

                      <div className="col-9">
                        <p>
                          Do you need more time to make a purchase decision?
                        </p>
                        <p>
                          No pressure, your product will be waiting for you in
                          the cart.
                        </p>
                      </div>
                    </div>
                  </MDBModalBody>
                  <MDBModalFooter>
                    <MDBBtn color="dark">Go to the cart</MDBBtn>
                    <MDBBtn outline color="dark" onClick={toggleShow}>
                      Close
                    </MDBBtn>
                  </MDBModalFooter>
                </MDBModalContent>
              </MDBModalDialog>
            </MDBModal>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </header>
  );
}
