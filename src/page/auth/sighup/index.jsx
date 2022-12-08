import React from "react";
import {
  Flex,
  Box,
  FormControl,
  Input,
  Button,
  AlertIcon,
  Alert,
} from "@chakra-ui/react";
import { Typography, Divider } from "antd";
import { useFormik } from "formik";
import signupValidations from "./validations.js";
import "./signup.css";
import { fetchRegister } from "../../../api.jsx";
import { useAuth } from "../../../Components/Context/authContext.jsx";
export default function Sighup() {
  const {login} = useAuth()
  const { Title, Text } = Typography;
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: signupValidations,
    onSubmit: async (values, bag) => {
      try {
        const registerResponse = await fetchRegister({
          email: values.email,
          password: values.password,
        });
        login(registerResponse)
      } catch (error) {
        bag.setErrors({ general: error.response.data.message });
      }
    },
  });
  return (
    <>
      <Flex
        className="form-page"
        align={"center"}
        width={"full"}
        justifyContent={"center"}
      >
        <Box
          className="form-container"
          pt={"10"}
          border={"1px"}
          width={"500px"}
          p={10}
        >
          <Box>
            <Title className="form-title" level={2}>
              Signup
            </Title>
          </Box>
          <Box my={5} textAlign="left">
            <form className="form-context" onSubmit={formik.handleSubmit}>
              {formik.errors.general && (
                <Alert status="error">
                  <AlertIcon />
                  {formik.errors.general}
                </Alert>
              )}
              <FormControl>
                <Divider className="form-label" orientation="left">
                  Email
                </Divider>
                <Input
                  name="email"
                  type={"email"}
                  variant="outline"
                  placeholder="example@email.com"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                  isInvalid={formik.touched.email && formik.errors.email}
                ></Input>
                {formik.errors.email && (
                  <Text type="danger" className="error">
                    {formik.errors.email}
                  </Text>
                )}
              </FormControl>
              <FormControl>
                <Divider className="form-label" orientation="left">
                  Password
                </Divider>
                <Input
                  name="password"
                  type={"password"}
                  variant="outline"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                  isInvalid={formik.touched.password && formik.errors.password}
                ></Input>
                {formik.errors.password && (
                  <Text type="danger" className="error">
                    {formik.errors.password}
                  </Text>
                )}
              </FormControl>
              <FormControl>
                <Divider className="form-label" orientation="left">
                  Confirm Password
                </Divider>
                <Input
                  name="confirmPassword"
                  type={"password"}
                  variant="outline"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.confirmPassword}
                  isInvalid={
                    formik.touched.confirmPassword &&
                    formik.errors.confirmPassword
                  }
                ></Input>
                {formik.errors.confirmPassword && (
                  <Text type="danger" className="error">
                    {formik.errors.confirmPassword}
                  </Text>
                )}
              </FormControl>
              <Button mt={10} colorScheme={"purple"} type={"submit"}>
                Sign Up
              </Button>
            </form>
          </Box>
        </Box>
      </Flex>
    </>
  );
}
