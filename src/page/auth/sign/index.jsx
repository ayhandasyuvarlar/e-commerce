import {
  AlertIcon,
  Box,
  Flex,
  FormControl,
  Alert,
  Input,
  Button,
} from "@chakra-ui/react";
import React from "react";
import "../sighup/signup.css";
import { Typography, Divider } from "antd";
import { useFormik } from "formik";
import signValidations from "./validationSing";
import { fetchLogin } from "../../../api";
import { useAuth } from "../../../Components/Context/authContext";
import { useState } from "react";
export default function Sign() {
  const { Title, Text } = Typography;
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);
  const { login } = useAuth();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: signValidations,
    onSubmit: async (values, bag) => {
      setIsLoading(true);
      try {
        const registerResponse = await fetchLogin(values);
        login(registerResponse);
        setIsLoading(false);
        setSuccessMessage(true);
        setTimeout(() => {
          setSuccessMessage(false);
          window.location.href = "http://localhost:3000";
        }, 1000);
      } catch (error) {
        bag.setErrors({ general: error.response.data.message });
      }
    },
  });
  return (
    <>
      <Flex
        width={"full"}
        alignItems={"center"}
        justifyContent={"center"}
        lineHeight={"1"}
        className={"form-page"}
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
              Sign In
            </Title>
          </Box>
          <form className="form-context" onSubmit={formik.handleSubmit}>
            {formik.errors.general && (
              <Alert status="error">
                <AlertIcon />
                {formik.errors.general}
              </Alert>
            )}
            {successMessage && (
              <Alert status="success">
                <AlertIcon />
                'This connect success database '
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
            <Button mt={10} colorScheme={"purple"} type={"submit"}>
              {isLoading === false ? "Log In" : "Loading..."}
            </Button>
          </form>
        </Box>
      </Flex>
    </>
  );
}
