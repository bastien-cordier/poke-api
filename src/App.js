import React, { Component, Fragment } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./components/Header";

import PokemonsList from "./containers/PokemonsList";
import AboutPokemon from "./containers/AboutPokemon";

class App extends Component {
  render() {
    return (
      <Fragment>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route exact path="/" element={<PokemonsList />} />
            <Route exact path="/:name" element={<AboutPokemon />} />
          </Routes>
        </BrowserRouter>
      </Fragment>
    );
  }
}

export default App;
