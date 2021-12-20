import React, { useState, useEffect } from "react";
import PokemonCard from "./PokemonCard";
import axios from "axios";

export default function PokemonsList() {
  const [pokemons, setPokemon] = useState([]);
  const [loading, setLoading] = useState(false);

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
        <h2>Loading ...</h2>
      ) : (
        <div className="pokemons">
          {pokemons.map((pokemon, i) => (
            <div key={i}>
              <PokemonCard pokemon={pokemon} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
