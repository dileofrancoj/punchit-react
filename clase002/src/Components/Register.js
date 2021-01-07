import { useState } from "react";

const Register = () => {
  // caso 1. solo guardo el nombre del usuario
  // caso 2. guardo el nombre y el correo del usuario
  /*
  const input = useState(""); // return [state,setState]
  const name = input[0];
  const setName = input[1];
  El setter es una función que cambia el valor del estado
  */
  const initialState = {
    name: "",
    mail: "",
  };

  const handleInput = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleReset = () => {
    setUser(initialState);
  };

  const [user, setUser] = useState(initialState); // condicion inicial

  return (
    <>
      <h3>Registro</h3>
      <input
        type="text"
        name="name"
        placeholder="nombre"
        onChange={handleInput}
        value={user.name}
      />
      <input
        type="text"
        name="mail"
        placeholder="correo@example.com"
        onChange={handleInput}
        value={user.mail}
      />
      <h4>
        {user.name} {user.mail}
      </h4>
      <button type="button" onClick={handleReset}>
        Limpiar
      </button>
    </>
  );
};

export default Register;
