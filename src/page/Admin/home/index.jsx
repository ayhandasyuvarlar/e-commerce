import {
  Box,
  Card,
  CardBody,
  CardFooter,
  Grid,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Divider } from "antd";
import React from "react";
import womanadmin from "../img/cute-business-woman-idea-thinking-present-pink-background-3d-rendering.jpg";
import order from "../img/06.jpg";
import product from "../img/3d-illustration-smartphone-with-delivery-scooter-boxes-paper-bags.jpg";
export default function Home() {
  return (
    <Box>
      <Divider orientation="right">Welcome Admin</Divider>
      <Grid templateColumns="repeat(3, 1fr)" gap={3}>
        <Card maxW="sm">
          <CardBody>
            <Box className="admin_Card_Img">
              <Image
                src={womanadmin}
                alt="Green double couch with wooden legs"
                borderRadius="lg"
              />
            </Box>
            <Stack mt="6" spacing="3">
              <Divider orientation="right">Total User</Divider>
              <Text className="text" display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>150</Text>
            </Stack>
          </CardBody>
        </Card>
        <Card maxW="sm">
          <CardBody>
            <Box className="admin_Card_Img">
              <Image
                src={product}
                alt="Green double couch with wooden legs"
                borderRadius="lg"
              />
            </Box>
            <Stack mt="6" spacing="3">
              <Divider orientation="right">Total Product</Divider>
              <Text  className="text" display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>10</Text>
            </Stack>
          </CardBody>
        </Card>
        <Card maxW="sm">
          <CardBody>
            <Box className="admin_Card_Img">
              <Image
                src={order}
                alt="Green double couch with wooden legs"
                borderRadius="lg"
              />
            </Box>
            <Stack mt="6" spacing="3">
              <Divider orientation="right">Total Order</Divider>
              <Text  className="text" display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>170</Text>
            </Stack>
          </CardBody>
        </Card>
      </Grid>
    </Box>
  );
}
