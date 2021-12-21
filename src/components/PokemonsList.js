import React, { useState, useEffect } from "react";
import PokemonCard from "./PokemonCard";
import axios from "axios";

export default function PokemonsList() {
  const [pokemons, setPokemon] = useState([]);
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
        setPokemon(results.map((res) => res.data));
      });
  }, []);

  return (
    <div>
      {loading ? (
        <div className="text-center my-5">
          <img src="assets/loader.png" alt="loading" className="loader" />
        </div>
      ) : (
        <div className="text-center">
          <input
            type="text"
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
  );
}
