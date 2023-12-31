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
import NavbarTop from "../NavBarSection/topNavBar";
import SecondNavbar from "../NavBarSection/secondNavbar";
import Footer from "../Footer/Footer";


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
          <MDBCard className="ShoesCards">
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
            <section>
          <NavbarTop />
          <SecondNavbar />
      <MDBContainer>
        <div>
          <h1 className="ShoesHeading">Kids Shoes</h1>
        </div>
        <MDBRow>{kidsShoesDirectory}</MDBRow>
      </MDBContainer>
      <Footer />
      </section>
    );
  }
}

export default KidsShoeProducts;
