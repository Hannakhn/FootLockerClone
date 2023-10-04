import React, { Component } from 'react';
import NavbarTop from "../NavBarSection/topNavBar";
import PhotoSection from "../Collage Second Portion/PhotoSection";
import SecondNavbar from "../NavBarSection/secondNavbar";
import Footer from "../Footer/Footer";
import BottomPhotoLinks from "../Cards Navigation Section/bottomPhotoLinks";
import SecondPhotoSection from "../Collage Second Portion/homepageSecondSection";

class HomePage extends Component {
  render() {
    return (
      <section>
     <NavbarTop />
      <SecondNavbar />
      <PhotoSection />
        <BottomPhotoLinks />
<SecondPhotoSection />
        <Footer />
      </section>
    );
  }
}

export default HomePage;