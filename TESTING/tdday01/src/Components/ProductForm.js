import { useReducer, useState } from "react";
import {
  productReducer,
  initialState,
  REQUIRED_FIELD,
} from "./../reducers/productReducer";
export const ProductForm = () => {
  const [state, dispatch] = useReducer(productReducer, initialState);

  const validateField = ({ name, value }) => {
    if (!value) {
      dispatch({ type: REQUIRED_FIELD, payload: { name } });
    }
  };
  const validateForm = ({ name, size, description }) => {
    validateField({ name: "name", value: name });
    validateField({ name: "size", value: size });
    validateField({ name: "description", value: description });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, size, description } = e.target.elements; // referencia del input
    validateForm({
      name: name.value,
      size: size.value,
      description: description.value,
    });
  };
  const handleBlur = (e) => {
    const { name, value } = e.target;
    validateField({ name, value });
  };

  return (
    <>
      <h2>Create product</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nombre *</label>
          <input
            type="text"
            aria-label="name"
            name="name"
            id="name"
            placeholder="Nombre del producto"
            onBlur={handleBlur}
          />
          <span>{state.name}</span>
        </div>
        <div>
          <label htmlFor="size">Size *</label>
          <input
            type="text"
            aria-label="size"
            name="size"
            id="size"
            placeholder="Tamño"
            onBlur={handleBlur}
          />
          {state.size}
        </div>
        <div>
          <label htmlFor="description">Descripcion *</label>
          <textarea
            name="description"
            id="description"
            name="description"
            aria-label="description"
          />
          {state.description}
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default ProductForm;
