export const REQUIRED_FIELD = "REQUIRED_FIELD";
// initialState -> solo de los mensajes de error
export const initialState = {
  name: "",
  size: "",
  description: "",
};

export function productReducer(state = initialState, action) {
  switch (action.type) {
    case REQUIRED_FIELD:
      return {
        ...state,
        [action.payload.name]: `The ${action.payload.name} is required`,
      };

    default:
      return state;
  }
}
