import { useEffect, useReducer } from "react";
import { productsReducer, initialState } from "./../../reducers/products";
import { FETCHING, FETCH_SUCCESS } from "./../../reducers/actions/products";
import { BASE_URL } from "./../../constants/";
import axios from "axios";

import PropTypes from "prop-types";

const Products = ({ search }) => {
  const [state, dispatch] = useReducer(productsReducer, initialState);
  const getProducts = async () => {
    try {
      const { data: info } = await axios.get(
        `${BASE_URL}/sites/MLA/search?q=${search}&limit=8`
      );
      console.log(info.results);
      dispatch({ type: FETCH_SUCCESS, payload: { data: info.results } });
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    // peticion http
    getProducts();
  }, [search]);
  return (
    <>
      <h3>Productos a traer: {search}</h3>
    </>
  );
};

Products.propTypes = {
  search: PropTypes.string,
};
export default Products;
