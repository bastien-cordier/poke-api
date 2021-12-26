import React from "react";

import { Link } from "react-router-dom";
import { Badge, Card, Container, Col, Row } from "react-bootstrap";

const PokeCardByID = ({ pokemon }) => {
  return (
    <div className="cardByID">
      <Card>
        <Container className="fichePokemon">
          <Row>
            <Col>
              <img src={pokemon.sprites.other.home.front_default} alt={pokemon.name} />
            </Col>
            <Col className="pokemonDetails">
              <h2>{pokemon.name}</h2>
              <p>
                Height : {pokemon.height} dm
                <br />
                Weight : {pokemon.weight} kg
              </p>
              <div className="skills">
                Types :
                {pokemon.types.map((types, i) => {
                  return (
                    <div key={i} className="mx-1">
                      <Link to={`/types/${types.type.name}`}>
                        <Badge bg="danger">{types.type.name}</Badge>
                      </Link>
                    </div>
                  );
                })}
              </div>
              <div className="skills">
                Abilities :
                {pokemon.abilities.map((abilities, i) => {
                  return (
                    <div key={i} className="mx-1">
                      <Badge bg="danger">{abilities.ability.name}</Badge>
                    </div>
                  );
                })}
              </div>
              <br />
              Stats :<br />
              <div className="stats">
                {pokemon.stats.map((stats, i) => {
                  return (
                    <div key={i} className="mx-1">
                      <Badge bg="danger">
                        {stats.stat.name} : {stats.base_stat}
                      </Badge>
                    </div>
                  );
                })}
              </div>
            </Col>
          </Row>
        </Container>
      </Card>
    </div>
  );
};

export default PokeCardByID;
