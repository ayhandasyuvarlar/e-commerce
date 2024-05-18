import * as Yup from "yup";

const validationLogin = Yup.object().shape({
  userName: Yup
    .string()
    .required("Username is required")
    .min(3, "Username must be at least 3 characters long")
    .max(30, "Username can be at most 30 characters long"),
  password: Yup
    .string()
    .min(3, "Password must be at least 8 characters long")
    .max(100, "Password can be at most 100 characters long")
    .required("Password is required"),
});

export default validationLogin;
