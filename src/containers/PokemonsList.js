import { Fragment, useState, useEffect } from "react";

import axios from "axios";

import PokemonCard from "../components/PokemonCard";

export default function PokemonsList() {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchPokemon, setSearchPokemon] = useState("");

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://pokeapi.co/api/v2/pokemon/?limit=151")
      .then((res) => {
        return res.data.results;
      })
      .then((results) => {
        return Promise.all(results.map((res) => axios.get(res.url)));
      })
      .then((results) => {
        setLoading(false);
        setPokemons(results.map((res) => res.data));
      });
  }, []);

  return (
    <Fragment>
      <div className="App">
        <h2 className="title">
          <img src="assets/pokeball.png" alt="pokeball" />
          Poxédex de Bastien CORDIER
        </h2>
        <div>
          {loading ? (
            <div className="text-center my-5">
              <img src="assets/loader.png" alt="loading" className="loader" />
            </div>
          ) : (
            <div className="text-center">
              <input
                type="search"
                placeholder="Find your Pokemon ..."
                className="searchFilter mb-3"
                onChange={(e) => {
                  setSearchPokemon(e.target.value);
                }}
              />
              <div className="pokemons">
                {pokemons
                  .filter((pokemon) => {
                    if (searchPokemon === "") {
                      return pokemon;
                    } else if (pokemon.name.toLowerCase().includes(searchPokemon.toLowerCase())) {
                      return pokemon;
                    }
                  })
                  .map((pokemon, i) => (
                    <div key={i}>
                      <PokemonCard pokemon={pokemon} />
                    </div>
                  ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </Fragment>
  );
}
