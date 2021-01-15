// componente lógica ( peticion http + map )
// React first
import { useState, useEffect } from "react";
import { useFetch } from "./../../customHooks/useFetch";
import { Row } from "react-bootstrap";
/* Spinner */
import Loading from "./../Loading";
/* Componente de presentacion */
import Character from "./Character";
import Paginate from "./../Paginate";
const BASE_ENDPOINT = "character";

/* Custom hook */
const Characters = ({ search }) => {
  const [url, setUrl] = useState(BASE_ENDPOINT);

  useEffect(() => {
    // BASE_URL/character?name=search
    const newUrl = !search ? BASE_ENDPOINT : `${BASE_ENDPOINT}?name=${search}`;
    setUrl(newUrl);
  }, [search]);

  const [data, fetching] = useFetch(url); //Hook personalizado
  // filtro con el back --> la api retorna 20 caracters y en total son 670
  const { info, results: characters } = data;

  const handlePages = (newUrl) => {
    setUrl(`${BASE_ENDPOINT}?${newUrl}`);
  };

  return (
    <>
      <Row>
        {fetching ? (
          <Loading />
        ) : (
          characters.map((character) => (
            <Character key={character.id} {...character} />
          ))
        )}
      </Row>

      <Paginate {...info} handlePages={handlePages} />
    </>
  );
};

export default Characters;
