import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import axios from "axios";
import { Button, Modal } from "react-bootstrap";

import PokeCardByID from "../components/PokeCardByID";

const AboutPokemon = () => {
  const { name } = useParams();
  const [pokemon, setPokemon] = useState("");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`).then((res) => {
      setPokemon(res.data);
    });
  }, []);

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
      <div className="btn-card text-center">
        <Link to="/">
          <button className="btn-home mx-2">
            <i className="fas fa-home mx-2" />
            Retour à la page d'accueil
          </button>
        </Link>
        <button className="btn-like mx-2" onClick={handleShow}>
          <i className="fas fa-heart mx-2" />
          Soutenez-nous !
        </button>

        <Modal show={show} backdrop="static" keyboard={false} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Soutenez-nous !</Modal.Title>
          </Modal.Header>
          <Modal.Body>N'hésitez pas à nous remercier par mail 😁</Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={handleClose}>
              Retourner à la fiche de <span style={{ textTransform: "capitalize" }}>{pokemon.name}</span>
            </Button>
            <a href="mailto:b.cordier@ecole-ipssi.net">
              <Button variant="success" onClick={handleClose}>
                Envoyer un e-mail
              </Button>
            </a>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};
export default AboutPokemon;
