import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import axios from "axios";

import PokeCardByID from "../components/PokeCardByID";

const AboutPokemon = () => {
  const { name } = useParams();
  const [pokemon, setPokemon] = useState("");

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`).then((res) => {
      setPokemon(res.data);
    });
  });

  if (!pokemon)
    return (
      <div className="text-center my-5">
        <img src="assets/loader.png" alt="loading" className="loader" />
        <h5 className="my-3">Nous ne trouvons pas votre Pokémon ...</h5>
      </div>
    );

  return (
    <div>
      <PokeCardByID pokemon={pokemon} />
    </div>
  );
};
export default AboutPokemon;
