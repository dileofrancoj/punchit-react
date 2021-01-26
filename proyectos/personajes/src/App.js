import { useState, useCallback } from "react";
import Characters from "./Components/Characters";
import { Container } from "react-bootstrap";
// useRef
import Search from "./Components/Search";
function App() {
  const [search, setSearch] = useState(null);

  const handlerSearch = useCallback(
    (value) => {
      setSearch(value);
    },
    [setSearch]
  );
  return (
    <Container>
      <Search handlerSearch={handlerSearch} />
      <Characters search={search} />
    </Container>
  );
}

export default App;
