import React, { createContext, useState } from "react";
// intefaz
export const AuthContext = createContext({
  auth: null,
  authenticate: () => {},
  logout: () => {},
});

const { Provider } = AuthContext;

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(null); // guardar el token
  const authenticate = (token) => {
    setAuth(token);
    // setearElStorage
  };
  const logout = () => {
    setAuth(null);
    // limpiar el storage
  };

  return <Provider value={{ auth, authenticate, logout }}>{children}</Provider>;
};
