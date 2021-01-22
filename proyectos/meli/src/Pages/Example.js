import { useReducer } from "react";
import { clickReducer, initialState } from "./../reducers/click";
import { PLUS, MINUS } from "./../reducers/actions/click";
const Example = () => {
  // FETCHING, FETCHING_SUCCESS, FETCHING_ERROR

  const [counter, dispatch] = useReducer(clickReducer, initialState);

  const handlerPlus = () => dispatch({ type: PLUS });
  const handlerMinus = () => dispatch({ type: MINUS });
  return (
    <>
      <h3>Contador : {counter}</h3>
      <button type="button" onClick={handlerPlus}>
        +
      </button>
      <button type="button" onClick={handlerMinus}>
        -
      </button>
    </>
  );
};

export default Example;
