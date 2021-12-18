import React, { Component, Fragment } from "react";

import Pokemons from "./containers/Pokemons";

import "./App.scss";

class App extends Component {
  render() {
    return (
      <Fragment>
        <div className="App">
          <h1>Hello</h1>
          <Pokemons />
        </div>
      </Fragment>
    );
  }
}

export default App;
