import React from "react";
import { Badge, Button, Card } from "react-bootstrap";

const PokemonCard = ({ pokemon }) => {
  return (
    <Card className="my-3" style={{ width: "18rem" }}>
      <Card.Img variant="top" src={pokemon.sprites.other.home.front_default} />
      <Card.Body>
        <Card.Title>{pokemon.name}</Card.Title>
        <Card.Text>
          <b>Height :</b> {pokemon.height}
          <br />
          <b>Weight :</b> {pokemon.weight}
        </Card.Text>
        <Card.Text>Abilities :</Card.Text>
        <div className="abilities">
          {pokemon.types.map((abilities, idx) => {
            return (
              <div key={idx} className="mx-1">
                <Badge bg="primary">{abilities.type.name}</Badge>
              </div>
            );
          })}
        </div>
      </Card.Body>
    </Card>
  );
};

export default PokemonCard;
