import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from './MainComponent';
import HomePage from './Pages/Homepage';
import MensShoeProducts from './Products/MensShoeProducts';
import KidsShoeProducts from './Products/KidsShoeProducts';
import WomensShoeProducts from './Products/WomensShoeProducts';


function App() {
  return (
<div>
  <WomensShoeProducts />
</div>
  );
}

export default App;
