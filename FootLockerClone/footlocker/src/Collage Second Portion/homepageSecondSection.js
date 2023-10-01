import React from "react";
import { Button, Container } from "reactstrap";

function SecondPhotoSection() {
  return (
    <Container fluid className="collagePhotoContainer">
      <div>
        <img className="secondcollagePhoto" alt="" src="img/timberlandAnniversary.jpg" />
      </div>
      <div>
        <h1 className="homeButtonPhotoHeading">This Is Your Canvas</h1>`
      </div>
      <div>
        <Button className="homeButtonPhoto">Shop Timberlands</Button>
      </div>
    </Container>
  );
}

export default SecondPhotoSection;
