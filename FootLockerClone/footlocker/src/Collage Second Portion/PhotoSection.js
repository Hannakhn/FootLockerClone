import React from 'react';
import { Button, Container } from "reactstrap";

function PhotoSection() {
  return (
    <Container fluid className='collagePhotoContainer'>
      <div>
        <img className="collagePhoto" alt="" src="img/FootLockerCollage.jpg" />
      </div>
      <div>
        <h1 className="homeButtonPhotoHeading">Everyone loves UGG</h1>`
      </div>
      <div>
        <Button className="homeButtonPhoto">Shop Ugg</Button>
      </div>
    </Container>
  );
}

export default PhotoSection;