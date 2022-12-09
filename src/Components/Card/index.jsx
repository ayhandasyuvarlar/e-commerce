import { Box, Button, Image } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import { useBasket } from "../Context/BasketContext";
import { useAuth } from "../Context/authContext";

export default function Card({ item }) {
  const { addtoBasket, items } = useBasket();
  const { user, isLogding } = useAuth();
  const findBasketItem = items.find((basket_item) => basket_item._id === item._id);
  return (
    <Box
      overflow={"hidden"}
      p={"3"}
      borderRadius={"lg"}
      border={"1px"}
      color={"#D5DBDB "}
      alignItems={"center"}
      display={"flex"}
      flexDirection={"column"}
    >
      <Link to={`/${item._id}`}>
        <Image src={item.photos[0]} height={"250px"} />
      </Link>
      <Box p={"6"}>
        <Box
          display={"flex"}
          alignItems={"left"}
          justifyContent={"space-between"}
          width={"230px"}
        >
          <p className="date" style={{ color: "#343434" }}>
            {moment(item.createdAt).format("DD/MM/YYYY")}
          </p>
          <p className="price" style={{ color: "#343434" }}>
           {item.price} TL
          </p>
        </Box>
        <Box
          mt={"3"}
          fontWeight={"semibold"}
          as={"h4"}
          lineHeight={"tight"}
          color={"#343434"}
        >
          {item.title}
        </Box>
      </Box>
      {isLogding && user.role === "admin" ? (
        ""
      ) : (
        <Box width={"80%"}>
          <Button
            colorScheme="teal"
            variant="ghost"
            onClick={() => {
              addtoBasket(item, findBasketItem);
            }}
          >
            {findBasketItem ? "Remove Item" : "  Add to Basket "}
          </Button>
        </Box>
      )}
    </Box>
  );
}
