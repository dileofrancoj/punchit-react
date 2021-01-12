import React from "react";
import "./App.css";

import { useState, useEffect } from "react";
const App = () => {
  // ciclos de vida de la aplicacion
  const [counter, setCountermas] = useState(0);
  // Efecto -> como toda accion externa al DOM (cambio en el estado, peticion http)

  useEffect(() => {
    console.log("Montaje :D"); // peticion http
  }, [counter]); // una vez

  return (
    <>
      <h1>APP</h1>
      <h2>Contador : {counter}</h2>
      <button type="button" onClick={handleClick}>
        Boton
      </button>
    </>
  );
};
export default App;
