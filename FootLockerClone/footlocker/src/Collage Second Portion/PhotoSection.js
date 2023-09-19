import React from 'react';
import { Button } from "reactstrap";

function PhotoSection() {
  return (
    <div>
          <img
            className="collagePhoto"
            alt="logo"
            src="img/FootLockerCollage.jpg"
            />
            <h1 className='homeButtonPhotoHeading'>Everyone loves UGG</h1>
            <Button className="homeButtonPhoto">Shop Ugg</Button>
    </div>
  )
}

export default PhotoSection;