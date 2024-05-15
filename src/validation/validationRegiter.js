// Create a schema for user data validation
import * as Yup from 'yup';

const validationRegister = Yup.object().shape({
  email: yup
    .string()
    .email("Please enter a valid email address")
    .required("Email is required"),
  username: yup
    .string()
    .min(3, "Username must be at least 3 characters long")
    .max(20, "Username can be at most 20 characters long")
    .required("Username is required"),
  password: yup
    .string()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      "Password must contain at least one lowercase letter, one uppercase letter, one number, one special character, and be at least 8 characters long"
    )
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Password confirmation is required"),
  name: yup.object().shape({
    firstname: yup.string().required("First name is required"),
    lastname: yup.string().required("Last name is required"),
  }),
  address: yup.object().shape({
    city: yup.string().required("City is required"),
    street: yup.string().required("Street is required"),
    number: yup.number().required("Number is required"),
    zipcode: yup
      .string()
      .matches(/^\d{5}(?:[-\s]\d{4})?$/, "Please enter a valid zip code")
      .required("Zip code is required"),
    geolocation: yup.object().shape({
      lat: yup.string().required("Latitude is required"),
      long: yup.string().required("Longitude is required"),
    }),
  }),
  phone: yup.string().required("Phone number is required"),
});

export default validationRegister;
