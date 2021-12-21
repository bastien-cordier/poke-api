import { Fragment } from "react";
import PokemonsList from "../components/PokemonsList";

const Pokemons = () => {
  return (
    <Fragment>
      <div className="App">
        <h2 className="title">
          <img src="assets/pokeball.png" alt="pokeball" />
          Poxédex de Bastien CORDIER
        </h2>
        <PokemonsList />
      </div>
    </Fragment>
  );
};

export default Pokemons;
