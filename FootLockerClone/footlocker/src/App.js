import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from './MainComponent';
import HomePage from './Pages/Homepage';
import MensShoeProducts from './Products/MensShoeProducts';
import KidsShoeProducts from './Products/KidsShoeProducts';
import WomensShoeProducts from './Products/WomensShoeProducts';
import ClothingProducts from './Products/ClothingProducts';
import CartMainPage from './Cart/CartMainPage';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/home" element={<HomePage />} />
          <Route path="/mens" element={<MensShoeProducts />} />
          <Route path="/womens" element={<WomensShoeProducts />} />
          <Route path="/kids" element={<KidsShoeProducts />} />
          <Route path="/clothing" element={<ClothingProducts />} />
          <Route path="/cart" element={<CartMainPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
