import React, { Component } from "react";
import { MDBRow, MDBCol, MDBCard, MDBContainer, MDBCardText, MDBCardImage, MDBCardTitle, MDBBtn } from "mdb-react-ui-kit";
import { MENSSHOES } from "../Product section Objects/mensShoes";
import { bottom } from "@popperjs/core";


class MensShoeProducts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mensShoes: MENSSHOES,
    };
  }

  render(mensShoes) {
    const mensShoesDirectory = this.state.mensShoes.map((shoes) => {
      return (
        <MDBCol md={3} style={{ padding: "10px", paddingBottom:"50px" , paddingTop:"10px"}}>
          <MDBCard className="MensShoesCards">
            <div key={shoes.id}>
              <MDBCardImage src={shoes.image} />
              <MDBCardTitle tag="h5">{shoes.name}</MDBCardTitle>
              <MDBCardText>{shoes.description}</MDBCardText>
              <MDBCardText>{shoes.price}</MDBCardText>
              <MDBBtn color="secondary">Add</MDBBtn>
            </div>
          </MDBCard>
        </MDBCol>
      );
    });

    return (
      <MDBContainer>
          <div>
            <h1 className="mensShoesHeading">Men's Shoes</h1>
          </div>
          <MDBRow>{mensShoesDirectory}</MDBRow>
      </MDBContainer>
    );
  }
}

export default MensShoeProducts;
