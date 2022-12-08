import * as yup from "yup";

const signValidations = yup.object({
  email: yup
    .string()
    .nullable()
    .email("Please enter a valid email address")
    .required("required"),
  password: yup.string().min(3, "At least 3 characters").required("required"),
});

export default signValidations;
