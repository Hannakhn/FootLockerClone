import React, { Component } from "react";
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
import { WOMENSSHOES } from "../Product section Objects/womensShoes";

class WomensShoeProducts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      womensShoes: WOMENSSHOES,
    };
  }

  render(womensShoes) {
    const womensShoesDirectory = this.state.womensShoes.map((shoes) => {
      return (
        <MDBCol
          md={3}
          style={{ padding: "10px", paddingBottom: "50px", paddingTop: "10px" }}
        >
          <MDBCard className="WomensShoesCards">
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
          <h1 className="womensShoesHeading">Women's Shoes</h1>
        </div>
        <MDBRow>{womensShoesDirectory}</MDBRow>
      </MDBContainer>
    );
  }
}

export default WomensShoeProducts;
