import React, { Component, Fragment } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Pokemons from "./containers/Pokemons";

class App extends Component {
  render() {
    return (
      <Fragment>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route exact path="/" element={<Pokemons />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </Fragment>
    );
  }
}

export default App;
