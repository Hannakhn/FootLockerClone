import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from './MainComponent';
import HomePage from './Pages/Homepage';
import MensShoeProducts from './Products/MensShoeProducts';
import MensShoeProductsTwo from './Products/MensShoeProductsTwo';
import KidsShoeProducts from './Products/KidsShoeProducts';
import WomensShoeProducts from './Products/WomensShoeProducts';
import ClothingProducts from './Products/ClothingProducts';
import CartMainPage from './Cart/CartMainPage';
import { CartProvider } from './Cart/CartContext';


function App() {
  return (
    <div className="App">
      <CartProvider>
        <Router>
          <Routes>
            <Route exact path="/home" element={<HomePage />} />
            <Route path="/mens" element={<MensShoeProductsTwo />} />
            <Route path="/womens" element={<WomensShoeProducts />} />
            <Route path="/kids" element={<KidsShoeProducts />} />
            <Route path="/clothing" element={<ClothingProducts />} />
            <Route path="/cart" element={<CartMainPage />} />
          </Routes>
        </Router>
      </CartProvider>
    </div>
  );
}

export default App;
