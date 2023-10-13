import React from "react";
import { MDBRow, MDBCol, MDBContainer } from "mdb-react-ui-kit";

export default function BottomPhotoLinks() {

  
  return (
    <MDBContainer className="BottomPhotos">
      <MDBRow className="row-cols-lg-4">
        <MDBCol className="row-cols-md-1 mb-4">
          <img src="img/MensPhoto.jpg" className="img-fluid rounded " alt="" />
        </MDBCol>
        <MDBCol className="row-cols-md-1 mb-4">
          <img src="img/WomensPhoto.jpg" className="img-fluid rounded" alt="" />
        </MDBCol>
        <MDBCol className="row-cols-md-1 mb-4">
          <img src="img/KidsPhoto.jpg" className="img-fluid rounded" alt="" />
        </MDBCol>
        <MDBCol className="row-cols-md-1 mb-4">
          <img
            src="img/ClothingPhoto.jpg"
            className="img-fluid rounded"
            alt=""
          />
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}
