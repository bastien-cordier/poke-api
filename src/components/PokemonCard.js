import React from "react";
import { Badge, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const PokemonCard = ({ pokemon }) => {
  // const [pokemons, setPokemons] = useState([]);

  // useEffect(() => {
  //   localStorage.setItem("favorites", JSON.stringify({ pokemons }));
  // }, [pokemons]);

  // const addFavorites = () => {
  //   var a = [pokemon];
  //   a = JSON.parse(localStorage.getItem("favorites")) || [];
  //   a.push(pokemon);
  //   localStorage.setItem("favorites", JSON.stringify(a));
  // };

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
              {pokemon.types.map((types, i) => {
                return (
                  <div key={i} className="mx-1">
                    <Badge bg="primary">{types.type.name}</Badge>
                  </div>
                );
              })}
            </div>
            <div className="my-3">
              {/* <button onClick={addFavorites} className="actionButton mx-2">
              <i className="fas fa-heart link my-2 mx-2" />
            </button> */}
            </div>
          </Card.Body>
        </Card>
      </Link>
    </div>
  );
};

export default PokemonCard;
