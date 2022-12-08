import {
  Alert,
  AlertIcon,
  Box,
  Flex,
  Image,
  Spinner,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { Divider } from "antd";
import React from "react";
import { useQuery } from "react-query";
import { fetchOrders } from "../../../api";
import orders from "../img/tr_vi_2.jpg";
export default function Orders() {
  const { isLoading, isError, data, error } = useQuery(
    "admin : orders",
    fetchOrders
  );
  if (isLoading) {
    return (
      <Flex justifyContent={"center"} alignItems={"center"} height={"100vh"}>
        <Spinner
          thickness="4px"
          speed="0.6ms"
          emptyColor="gray.200"
          size={"xl"}
          color={"red"}
        ></Spinner>
      </Flex>
    );
  }
  if (isError) {
    return (
      <Alert status="error">
        <AlertIcon></AlertIcon>
        {error.message}
      </Alert>
    );
  }
  console.log(data);
  return (
    <Flex justifyContent={"column"} flexDirection={"column"}>
      <Box className="order-head"></Box>
      <Divider orientation="right">Orders</Divider>
      <Table>
        <Thead>
          <Tr>
            <Th>User</Th>
            <Th>Address</Th>
            <Th>Items</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data.length > 0 &&
            data.map(
              (item) =>
                item.items.length > 0 && (
                  <Tr key={item._id}>
                    <Td>{item.user.email}</Td>
                    <Td>{item.adress}</Td>
                    <Td itemScope>{item.items.length}</Td>
                  </Tr>
                )
            )}
        </Tbody>
      </Table>
    </Flex>
  );
}
