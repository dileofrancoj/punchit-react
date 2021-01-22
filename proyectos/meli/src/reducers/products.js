import { FETCHING, FETCH_SUCCESS } from "./actions/products";

export const initialState = {
  fetching: true,
  products: [],
};

/*
    action : {
        type : '',
        payload : {
            data : productos,
        }
    }
*/
export function productsReducer(state = initialState, action) {
  switch (action.type) {
    case FETCHING:
      return {
        ...initialState,
        fetching: true,
      };
    case FETCH_SUCCESS:
      return {
        fetching: false,
        products: action.payload.data,
      };
    default:
      return state;
  }
}
