import React from 'react';
import { Button } from "reactstrap";

function PhotoSection() {
  return (
    <div>
      <div>
        <img
          className="collagePhoto"
          alt="logo"
          src="img/FootLockerCollage.jpg"
        />
      </div>
      <div>
        ` <h1 className="homeButtonPhotoHeading">Everyone loves UGG</h1>`
      </div>
      <div>
        <Button className="homeButtonPhoto">Shop Ugg</Button>
      </div>
    </div>
  );
}

export default PhotoSection;