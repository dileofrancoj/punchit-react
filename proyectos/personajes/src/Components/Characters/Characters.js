import { useEffect, useState } from "react";
// componente lógica ( peticion http + map )
import { Row } from "react-bootstrap";
import Character from "./Character";
const BASE_URL = "https://rickandmortyapi.com/api";
const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [fetching, setFetching] = useState(true);
  const [error, setError] = useState(false);
  const getCharacters = async (endpoint) => {
    try {
      const result = await fetch(`${BASE_URL}/${endpoint}`);
      const data = await result.json();
      setCharacters(data.results); // array de personajes
      setFetching(false);
    } catch (e) {
      // configuro estado si hubo error
      setError(true);
      setFetching(false);
      setCharacters([]);
    }
  };

  useEffect(() => {
    getCharacters("character");
  }, []);
  return (
    <Row>
      {fetching ? (
        <h3>Cargando...</h3>
      ) : (
        characters.map((character) => (
          <Character key={character.id} {...character} />
        ))
      )}
    </Row>
  );
};

export default Characters;
