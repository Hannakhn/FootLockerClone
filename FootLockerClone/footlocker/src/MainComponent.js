import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";
import HomePage from "./Pages/Homepage";
import { App } from "react-bootstrap-icons";

class Main extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const products = this.props.product;
    return (
      <div>
        <Routes>
          <Route path="/home" element={HomePage} />
          <Route exact path="" />
          <Route exact path="" />
          <Route exact path="" />
          <Route exact path="">
          </Route>
        </Routes>
      </div>
    );
  }
}

export default Main;
