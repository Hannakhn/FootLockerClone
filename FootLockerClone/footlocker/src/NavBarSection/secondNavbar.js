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
  MDBBadge,
  MDBCard,
} from "mdb-react-ui-kit";
import CartMainPage from "../Cart/CartMainPage";
import CartContext from "../Cart/CartContext";
import { useContext } from "react";


export default function SecondNavbar() {
  const [showBasic, setShowBasic] = useState(false);

  const [topRightModal, setTopRightModal] = useState(false);

  const toggleShow = () => setTopRightModal(!topRightModal);

  const { items } = useContext(CartContext);

  

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
                <MDBNavbarLink href="/mens" className="secondNav">
                  MEN'S
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href="/womens" className="secondNav">
                  WOMEN'S
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href="kids" className="secondNav">
                  KIDS'
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href="/clothing" className="secondNav">
                  CLOTHING
                </MDBNavbarLink>
              </MDBNavbarItem>
            </MDBNavbarNav>

            <div>
              <MDBIcon
                fas
                icon="shopping-cart"
                className="topIcons"
                onClick={toggleShow}
                data-target="#cartModal"
                color="black"
              ></MDBIcon>
              <MDBBadge
                color="danger"
                light
                pill
                className="position-absolute translate-middle"
              >
                {items.length}
                <span class="visually-hidden"></span>
              </MDBBadge>
              <MDBModal
                animationDirection="right"
                show={topRightModal}
                tabIndex="-1"
                setShow={setTopRightModal}
              >
                <MDBModalDialog position="top-middle" side>
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
                          {items.map((item) => (
                            <div>
                              <MDBCard>
                              <h4>{JSON.stringify(item)}</h4>
                              </MDBCard>
                            </div>
                          ))}
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
            </div>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </header>
  );
}
