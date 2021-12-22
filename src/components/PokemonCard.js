import React from "react";
import { Badge, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const PokemonCard = ({ pokemon }) => {
  return (
    <div className="cardsHomepage">
      <Link to={`/${pokemon.name}`}>
        <Card className="my-3" style={{ width: "18rem" }} pokemon={pokemon}>
          <Card.Img variant="top" src={pokemon.sprites.other.home.front_default} />
          <Card.Body>
            <Card.Title>{pokemon.name}</Card.Title>
            <Card.Text>
              <b>Height :</b> {pokemon.height} dm
              <br />
              <b>Weight :</b> {pokemon.weight} kg
            </Card.Text>
            <Card.Text>Types :</Card.Text>
            <div className="type">
              {pokemon.types.map((types, idx) => {
                return (
                  <div key={idx} className="mx-1">
                    <Badge bg="primary">{types.type.name}</Badge>
                  </div>
                );
              })}
            </div>
          </Card.Body>
        </Card>
      </Link>
    </div>
  );
};

export default PokemonCard;
