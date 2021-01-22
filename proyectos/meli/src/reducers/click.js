import { PLUS, MINUS } from "./actions/click";
export const initialState = 0;
// Funcion pura
export function clickReducer(state = initialState, action) {
  switch (action.type) {
    case PLUS:
      return state + 1;
    case MINUS:
      return state - 1;
    default:
      return state;
  }
}
