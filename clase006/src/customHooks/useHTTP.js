import { useState } from "react";
import axios from "axios"; // PETICIONES HTTP, CANCELAR UNA SOLICITUD
const BASE_URL = "http://localhost:8000";
/* Hook personalizado para enviar un post a la API */
export const usePost = () => {
  const [response, setResponse] = useState(null);
  const [fetching, setFetching] = useState(false);
  // url, obj
  const postData = async (endpoint, object) => {
    // {}

    try {
      setFetching(true); // ruedita cargando
      const responseData = await axios.post(`${BASE_URL}/${endpoint}`, object);
      setResponse(responseData);
      setFetching(false);
    } catch (e) {
      console.error(e);
    }
  };
  return [postData, response, fetching];
};

export const useGet = () => {
  const [response, setResponse] = useState(null);
  const [fetching, setFetching] = useState(false);
  const getData = async (endpoint) => {
    const getData = await axios.get(`${BASE_URL}/${endpoint}`);
    setResponse(getData);
    setFetching(false);
  };
};
