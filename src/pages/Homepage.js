import React from "react";
import PokemonsList from "../components/PokemonsList";

export default function Homepage() {
  return (
    <div>
      <div className="App">
        <h2 className="title">
          <img src="assets/pokeball.png" alt="pokeball" />
          Poxédex de Bastien CORDIER
        </h2>
        <PokemonsList />
      </div>
    </div>
  );
}
