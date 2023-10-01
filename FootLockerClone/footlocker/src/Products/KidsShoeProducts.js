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
import { KIDSSHOES } from "../Product section Objects/kidsShoes";


class KidsShoeProducts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      kidsShoes: KIDSSHOES,
    };
  }

  render(kidsShoes) {
    const kidsShoesDirectory = this.state.kidsShoes.map((shoes) => {
      return (
        <MDBCol
          md={3}
          style={{ padding: "10px", paddingBottom: "60px", paddingTop: "10px" }}
        >
          <MDBCard className="KidsShoesCards">
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
          <h1 className="kidsShoesHeading">Kids Shoes</h1>
        </div>
        <MDBRow>{kidsShoesDirectory}</MDBRow>
      </MDBContainer>
    );
  }
}

export default KidsShoeProducts;
