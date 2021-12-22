import React, { Component, Fragment } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./components/Header";

import PokemonsList from "./containers/PokemonsList";
import AboutPokemon from "./containers/AboutPokemon";
import TypesList from "./containers/TypesList";
import PokemonsByType from "./containers/PokemonsByType";

class App extends Component {
  render() {
    return (
      <Fragment>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route exact path="/" element={<PokemonsList />} />
            <Route exact path="/:name" element={<AboutPokemon />} />
            <Route exact path="/types" element={<TypesList />} />
            <Route exact path="/types/:name" element={<PokemonsByType />} />
          </Routes>
        </BrowserRouter>
      </Fragment>
    );
  }
}

export default App;
