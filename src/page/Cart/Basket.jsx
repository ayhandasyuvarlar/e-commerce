import React from "react";
import { Link, Navigate } from "react-router-dom";
import { useAuth } from "../../Components/Context/authContext";
import { useBasket } from "../../Components/Context/BasketContext";
import "./basket.css";
import {
  Alert,
  AlertIcon,
  Box,
  Button,
  Flex,
  Image,
  Grid,
  useDisclosure,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  FormControl,
  FormLabel,
  ModalFooter,
  Modal,
} from "@chakra-ui/react";
import moment from "moment";
import { Divider } from "antd";
import TextArea from "antd/es/input/TextArea";
import { useState } from "react";
import { postOrder } from "../../api";
export default function Basket() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const [address, setAddress] = useState("");
  const { isLogding } = useAuth();
  const { items, removeItem, clearBasket } = useBasket();
  const handleClick = async () => {
    const itemIdx = items.map((item) => item._id);
    const input = {
      address,
      items: JSON.stringify(itemIdx),
    };
    const result = await postOrder(input);
    onClose();
    clearBasket();
  };
  if (!isLogding) {
    return <Navigate to={"/sign"} replace />;
  }
  return (
    <Flex
      flexDirection={"column"}
      width={"full"}
      alignItems={"center"}
      justifyContent={"center"}
      height={"auto"}
    >
      {items.length < 1 && (
        <Alert status="error">
          <AlertIcon></AlertIcon>
          You have not any items in your basket.
        </Alert>
      )}
      {items.length > 0 && (
        <>
          <Divider className="basket_page_title" orientation="right">
            You Cart
          </Divider>
          <Grid templateColumns="repeat(4, 1fr)" gap={3}>
            {items.map((items, key) => (
              <Box
                key={key}
                overflow={"hidden"}
                width={"370px"}
                p={"3"}
                borderRadius={"lg"}
                border={"1px"}
                color={"#D5DBDB "}
                alignItems={"center"}
                display={"flex"}
                flexDirection={"column"}
              >
                <Link to={`/${items._id}`}>
                  <Image src={items.photos[0]} height={"250px"} />
                </Link>
                <Box p={"6"}>
                  <Box
                    display={"flex"}
                    alignItems={"left"}
                    justifyContent={"space-between"}
                    width={"230px"}
                  >
                    <p className="date" style={{ color: "#343434" }}>
                      {moment(items.createdAt).format("DD/MM/YYYY")}
                    </p>
                    <p className="price" style={{ color: "#343434" }}>
                      19.258.23 TL
                    </p>
                  </Box>
                  <Box
                    mt={"3"}
                    fontWeight={"semibold"}
                    as={"h4"}
                    lineHeight={"tight"}
                    color={"#343434"}
                  >
                    {items.title}
                  </Box>
                </Box>
                <Box width={"80%"}>
                  <Button
                    colorScheme="red"
                    onClick={() => {
                      removeItem(items._id);
                    }}
                  >
                    Remove Item
                  </Button>
                </Box>
              </Box>
            ))}
          </Grid>
          <Modal
            initialFocusRef={initialRef}
            finalFocusRef={finalRef}
            isOpen={isOpen}
            onClose={onClose}
          >
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Order</ModalHeader>
              <ModalCloseButton />
              <ModalBody pb={6}>
                <FormControl>
                  <FormLabel>Address</FormLabel>
                  <TextArea
                    value={address}
                    onChange={(e) => {
                      setAddress(e.target.value);
                    }}
                    ref={initialRef}
                    placeholder="Address"
                  />
                </FormControl>
              </ModalBody>

              <ModalFooter>
                <Button colorScheme="blue" mr={3} onClick={handleClick}>
                  Order new
                </Button>
                <Button onClick={onClose}>Cancel</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </>
      )}
      <Box
        width={"100%"}
        background={"AppWorkspace"}
        position={"fixed"}
        bottom={"0px"}
        height={"70px"}
      >
        <Divider style={{ marginTop: "-20px" }} orientation="right">
          Create Order
        </Divider>
        <Flex
          width={"100%"}
          alignItems={"center"}
          justifyContent={"space-around"}
        >
          It's almost time for you to finish shopping
          <Button colorScheme={"linkedin"} onClick={onOpen}>
            Create Order
          </Button>
        </Flex>
      </Box>
    </Flex>
  );
}
