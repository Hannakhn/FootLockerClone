import logo from './logo.svg';
import './App.css';
import NavbarTop from './NavBarSection/topNavBar';
import PhotoSection from './Collage Second Portion/PhotoSection';
import SecondNavbar from './NavBarSection/secondNavbar';
import CardNavigation from './Cards Navigation Section/cardNavigation';
import Footer from './Footer/Footer';


function App() {
  return (
    <div className="App">
      <NavbarTop />
      <SecondNavbar />
      <PhotoSection />
        <CardNavigation />
        <Footer />
    </div>
  );
}

export default App;
