import * as yup from "yup";

export const schema = yup.object().shape({
  email: yup.string().email().required("Este campo es obligatorio"),
  password: yup
    .string()
    .required("Este campo es obligatorio")
    .min(3, "al menos 3 caracteres")
    .max(10, "Como máximo 10 caracteres"),
});
