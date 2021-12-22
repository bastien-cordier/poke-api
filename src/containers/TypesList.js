import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import axios from "axios";

export default function TypesList() {
  const [types, setTypes] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://pokeapi.co/api/v2/type")
      .then((res) => {
        return res.data.results;
      })
      .then((results) => {
        return Promise.all(results.map((res) => axios.get(res.url)));
      })
      .then((results) => {
        setLoading(false);
        setTypes(results.map((res) => res.data));
      });
  }, []);

  return (
    <Fragment>
      <div className="typesPage">
        <h2 className="title-page">Cliquez sur le type de Pokémon que vous voulez</h2>
        {loading ? (
          <div className="text-center my-5">
            <img src="assets/loader.png" alt="loading" className="loader" />
          </div>
        ) : (
          <div className="btnTypes">
            {types.map((type, i) => (
              <div key={i}>
                <Link to={type.name}>
                  <button className="btnLink mx-3 my-3">{type.name}</button>
                </Link>
              </div>
            ))}
          </div>
        )}
        <br />
        <div className="separator mx-5"></div>
        <div className="bandeau">
          <img src="assets/bandeau.png" alt="BandeauPokemon" />
        </div>
      </div>
    </Fragment>
  );
}
