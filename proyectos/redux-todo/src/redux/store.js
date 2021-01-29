import { createStore, applyMiddleware } from "redux"; // sincronico
// middleware -> funcion que se interpone entre una ruta y funcion
import rootReducers from "./reducers/"; // todos los reducers :D
const store = createStore(rootReducers, applyMiddleware());
export default store;
