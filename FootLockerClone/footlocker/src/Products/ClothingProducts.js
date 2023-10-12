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
import { CLOTHING } from "../Product section Objects/clothing";
import NavbarTop from "../NavBarSection/topNavBar";
import SecondNavbar from "../NavBarSection/secondNavbar";
import Footer from "../Footer/Footer";

class ClothingProducts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clothes: CLOTHING,
    };
  }

  render(clothes) {
    const clothingDirectory = this.state.clothes.map((clothes) => {
      return (
        <MDBCol
          md={3}
          style={{ padding: "10px", paddingBottom: "60px", paddingTop: "10px" }}
        >
          <MDBCard className="ClothingCards">
            <div key={clothes.id}>
              <MDBCardImage src={clothes.image} />
              <MDBCardTitle tag="h5">{clothes.name}</MDBCardTitle>
              <MDBCardText>{clothes.description}</MDBCardText>
              <MDBCardText>{clothes.price}</MDBCardText>
              <MDBBtn color="secondary">Add</MDBBtn>
            </div>
          </MDBCard>
        </MDBCol>
      );
    });

    return (
      <section>
        <NavbarTop />
        <SecondNavbar />
        <MDBContainer>
          <div>
            <h1 className="ClothingHeading">Clothing</h1>
          </div>
          <MDBRow>{clothingDirectory}</MDBRow>
        </MDBContainer>
        <Footer />
      </section>
    );
  }
}

export default ClothingProducts;
