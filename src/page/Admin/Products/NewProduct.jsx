import {
  Box,
  Button,
  Flex,
  FormControl,
  Input,
  keyframes,
  Textarea,
} from "@chakra-ui/react";
import { Divider, message } from "antd";
import React from "react";

import { postProduct } from "../../../api";
import { Formik } from "formik";
import validationSchema from "../ProductDetail/validation";
import { useMutation, useQueryClient } from "react-query";
export default function NewProduct() {
  const queryClient = useQueryClient();
  const newProductMutation = useMutation(postProduct, {
    onSuccess: () => queryClient.invalidateQueries("admin:products"),
  });
  const [messageApi, contextHolder] = message.useMessage();

  const handleSubmit = async (values, bag) => {
    messageApi.open({
      type: "loading",
      content: "Action in progress..",
      duration: 0,
    });
    values.photos = JSON.stringify(values.photos)
    setTimeout(messageApi.destroy, 100);
    newProductMutation.mutate(values, {
      onSuccess: () => {
        messageApi.open({
          type: "success",
          content: "This is a success product edit",
        });
      },
      onError: () => {
        messageApi.open({
          type: "error",
          content: "This is an error message",
        });
      },
    });
  };
  return (
    <Flex
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Divider orientation="right">New Product</Divider>
      <Formik
        initialValues={{
          title: "",
          description: "",
          price: "",
          photos: [],
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({
          handleSubmit,
          errors,
          touched,
          handleChange,
          handleBlur,
          values,
          isSubmitting,
        }) => (
          <>
            {contextHolder}
            <Box
              width={"35%"}
              border={"1px"}
              borderColor={"blackAlpha.600"}
              borderRadius={"lg"}
              p={5}
            >
              <Box my={5} textAlign="left">
                <form onSubmit={handleSubmit}>
                  <FormControl>
                    <Divider orientation="right">Title</Divider>
                    <Input
                      type={"text"}
                      name={"title"}
                      value={values.title || ""}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      disabled={isSubmitting}
                    />
                    {errors.title && errors.title}
                  </FormControl>
                  <FormControl>
                    <Divider orientation="right">Description</Divider>
                    <Textarea
                      type={"text"}
                      name={"description"}
                      value={values.description || ""}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      disabled={isSubmitting}
                    />
                    {errors.description && errors.description}
                  </FormControl>
                  <FormControl>
                    <Divider orientation="right">Price</Divider>
                    <Input
                      type={"text"}
                      name={"price"}
                      value={values.price || ""}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      disabled={isSubmitting}
                    />
                    {errors.price && errors.price}
                  </FormControl>
                  <FormControl>
                    <Divider orientation="right">Photo</Divider>
                    <Input
                      type={"text"}
                      name={"photos"}
                      value={values.photos || ""}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      disabled={isSubmitting}
                    />
                  </FormControl>
                  <Button mt={5} type={"submit"} isLoading={isSubmitting}>
                    Submit
                  </Button>
                </form>
              </Box>
            </Box>
          </>
        )}
      </Formik>
    </Flex>
  );
}
