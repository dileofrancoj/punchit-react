// componente lógica ( peticion http + map )
import { useFetch } from "./../../customHooks/useFetch";
import { Row } from "react-bootstrap";
/* Spinner */
import Loading from "./../Loading";
/* Componente de presentacion */
import Character from "./Character";

/* Custom hook */
const Characters = () => {
  const [data, fetching, error] = useFetch("character");
  const { info, results: characters } = data;
  return (
    <Row>
      {fetching ? (
        <Loading />
      ) : (
        characters.map((character) => (
          <Character key={character.id} {...character} />
        ))
      )}
    </Row>
  );
};

export default Characters;
