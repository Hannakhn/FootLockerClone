import React from "react";
import { MDBRow, MDBCol, MDBContainer } from "mdb-react-ui-kit";

export default function BottomPhotoLinks() {

  
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol lg="3" md="12" className="mb-4">
          <img src="img/MensPhoto.jpg" className="img-fluid rounded" alt=""/>
        </MDBCol>
        <MDBCol lg="3" md="12" className="mb-4">
          <a>
            <img
              src="img/WomensPhoto.jpg"
              className="img-fluid rounded"
              alt=""
            />
          </a>
        </MDBCol>
        <MDBCol lg="3" md="12" className="mb-4">
          <img src="img/KidsPhoto.jpg" className="img-fluid rounded" alt="" />
        </MDBCol>
        <MDBCol lg="3" md="12" className="mb-4">
          <img
            src="img/ClothingPhoto.jpg"
            className="img-fluid rounded"
            alt=""
          />
        </MDBCol>
        <MDBCol lg="3" md="12" className="mb-4">
          <img
            src="img/AccessoriesPhoto.jpg"
            className="img-fluid rounded"
            alt=""
          />
        </MDBCol>
        <MDBCol lg="3" md="12" className="mb-4">
          <img src="img/SalePhoto.jpg" className="img-fluid rounded" alt="" />
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}
