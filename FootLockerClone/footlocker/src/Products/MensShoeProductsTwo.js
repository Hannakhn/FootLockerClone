import React, { Component, useContext } from "react";
import {
  MDBRow,
  MDBCol,
  MDBCard,
  MDBContainer,
  MDBCardText,
  MDBCardImage,
  MDBCardTitle,
  MDBBtn,
} from "mdb-react-ui-kit";
import { MENSSHOES } from "../Product section Objects/mensShoes";
import { bottom } from "@popperjs/core";
import NavbarTop from "../NavBarSection/topNavBar";
import SecondNavbar from "../NavBarSection/secondNavbar";
import CartContext from "../Cart/CartContext";


function MensShoeProductsTwo(id,name,image,price) {

    const {addToCart} = useContext(CartContext);

    const items = MENSSHOES.map((items) => {
        return(
                    <MDBCol md={3} style={{ padding: "10px", paddingBottom:"50px" , paddingTop:"10px"}}>
          <MDBCard className="ShoesCards">
            <div key={items.id}>
              <MDBCardImage src={items.image}/>
              <MDBCardTitle tag="h5">{items.name}</MDBCardTitle>
              <MDBCardText>{items.description}</MDBCardText>
              <MDBCardText>{items.price}</MDBCardText>
              <MDBBtn color="secondary" onClick={() => addToCart(name,price)}>Add</MDBBtn>
            </div>
          </MDBCard>
        </MDBCol>
        )
    })

    
  return (
    <div>
      <NavbarTop />
      <SecondNavbar />
      <MDBContainer>
        <div>
          <h1 className="ShoesHeading">Men's Shoes</h1>
        </div>
        <MDBRow>{items}</MDBRow>
      </MDBContainer>
    </div>
  );
}

export default MensShoeProductsTwo;