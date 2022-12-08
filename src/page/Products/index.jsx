import { Grid } from "@chakra-ui/react";
import React from "react";
import Card from "../../Components/Card";
import { useQuery } from "react-query";
import { fetchProductList } from "../../api";
export default function Products() {
  const { isLoading, error, data } = useQuery("product", fetchProductList);

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;
  return (
    <div>
      <Grid templateColumns="repeat(4, 1fr)" gap={3}>
        {data.map((item, key) => (
          <Card key={key} item={item}></Card>
        ))}
      </Grid>
    </div>
  );
}
