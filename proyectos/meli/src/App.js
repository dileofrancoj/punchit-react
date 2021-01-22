import { useState } from "react";
import Routes from "./Routes/";
function App() {
  const [search, setSearch] = useState(null);
  const handlerSearch = (product) => setSearch(product);
  return <Routes search={search} handlerSearch={handlerSearch} />;
}

export default App;
