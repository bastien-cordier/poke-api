import React, { Component, Fragment } from "react";
import axios from "axios";

export default class PokemonsList extends Component {
  state = {
    pokemons: [],
  };

  async componentDidMount() {
    const res = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=151");
    this.setState({ pokemons: res.data["results"] });
  }

  render() {
    return (
      <Fragment>
        {this.state.pokemons ? (
          <div className="pokemons">
            {this.state.pokemons.map((pokemon) => (
              <>
                <h4>{pokemon.name}</h4>
                <img src={pokemon.sprites} alt="hello" />
              </>
            ))}
          </div>
        ) : (
          <h2>Load</h2>
        )}
      </Fragment>
    );
  }
}
