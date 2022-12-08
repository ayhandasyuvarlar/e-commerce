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
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { fetchProductDetails, updateProduct } from "../../../api";
import { Formik } from "formik";
import validationSchema from "./validation";
export default function AdminProductsDetail() {
  const { product_id } = useParams();
  const [messageApi, contextHolder] = message.useMessage();
  const { isLoading, error, data } = useQuery(
    ["admin :productdetails", product_id],
    () => fetchProductDetails(product_id)
  );

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;
  const handleSubmit = async (values, bag) => {
    messageApi.open({
      type: 'loading',
      content: 'Action in progress..',
      duration: 0,
    });
    setTimeout(messageApi.destroy, 100);
    try{
      await updateProduct(values  , product_id)
      messageApi.open({
        type: 'success',
        content: 'This is a success product edit',
      });
    }catch(e){
      messageApi.open({
        type: 'error',
        content: 'This is an error message',
      });
    }
  };
  return (
    <Flex
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Divider orientation="right">Prodcut Edit</Divider>
      <Formik
        initialValues={{
          title: data.title,
          description: data.description,
          price: data.price,
          photos: data.photos,
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
