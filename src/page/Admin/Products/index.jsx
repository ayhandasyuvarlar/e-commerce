import { AlertIcon, Box, Flex, Spinner } from "@chakra-ui/react";
import { Alert, Popconfirm, Space, Table } from "antd";
import React, { useMemo } from "react";
import { useQuery, useMutation, useQueryClient } from "react-query";
import { Link } from "react-router-dom";
import { deletedOrder, fetchProductList } from "../../../api";

export default function AdminProducts() {
  const queryClient = useQueryClient();
  const columns = useMemo(() => {
    return [
      {
        title: "Title",
        dataIndex: "title",
        key: "title",
        render: (text) => <a>{text}</a>,
      },
      {
        title: "Price",
        dataIndex: "price",
        key: "price",
      },
      {
        title: "Created At",
        dataIndex: "createdAt",
        key: "createdAt",
      },
      {
        title: "Action",
        key: "action",
        render: (_, record) => (
          <Space size="middle">
            <Link to={`/admin/products/${record._id}`}>Edit</Link>
            <Popconfirm
              title="Are you sure"
              onConfirm={() => {
                deleteMutation.mutate(record._id, {
                  onSuccess: () => {
                    console.log("success");
                  },
                });
              }}
              onCancel={() => {
                alert("deleted no");
              }}
              okText={"yes"}
              cancelText={"no"}
              placement={"left"}
            >
              <a href="/#">Delete</a>
            </Popconfirm>
          </Space>
        ),
      },
    ];
  }, []);
  const { isLoading, isError, data, error } = useQuery(
    "admin :products",
    fetchProductList
  );
  const deleteMutation = useMutation(deletedOrder, {
    onSuccess: () => queryClient.invalidateQueries("admin:products"),
  });
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
  return (
    <Flex flexDirection={"column"}>
      <Box className="products_list"></Box>
      <Table dataSource={data} columns={columns} rowKey={"_id"}></Table>
    </Flex>
  );
}
