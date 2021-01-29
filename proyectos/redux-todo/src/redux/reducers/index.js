// combinar todos los reducers y generar un único output
import { combineReducers } from "redux";
import todo from "./todo";

export default combineReducers({
  todo,
  // mas reducers
});
