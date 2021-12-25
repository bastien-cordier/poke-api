import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import axios from "axios";
import PokemonCard from "../components/PokemonCard";

export default function PokemonsByType() {
  const { name } = useParams();
  const [pokeByType, setPokeByType] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://pokeapi.co/api/v2/type/${name}`)
      .then((res) => {
        return res.data.pokemon.slice(0, 50);
      })
      .then((pokemon) => {
        return Promise.all(pokemon.map((res) => axios.get(res.pokemon.url)));
      })
      .then((pokemon) => {
        setLoading(false);
        setPokeByType(pokemon.map((res) => res.data));
      });
  }, [name]);

  return (
    <Fragment>
      {loading ? (
        <div className="text-center my-5">
          <img src="assets/loader.png" alt="loading" className="loader" />
          <h5 className="my-3">Nous ne trouvons pas de Pokémons associés à ce type ...</h5>
        </div>
      ) : (
        <>
          <div className="title-page">
            <h2 className="text-center my-4">
              Liste des pokémons de type <span style={{ textTransform: "capitalize" }}>{name}</span>
            </h2>
          </div>

          <div className="pokemons text-center">
            {pokeByType.map((pokemonElement, i) => (
              <div key={i}>
                <PokemonCard pokemon={pokemonElement} />
              </div>
            ))}
          </div>
        </>
      )}
    </Fragment>
  );
}
