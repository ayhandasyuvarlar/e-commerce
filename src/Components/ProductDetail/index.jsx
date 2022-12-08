import { Box, Text, Image, ButtonGroup, Button } from "@chakra-ui/react";
import { Typography, Divider } from "antd";
import { StarOutlined } from "@ant-design/icons";
import "./productdetails.modules.css";
import { Space } from "antd";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { fetchProductDetails } from "../../api";
import { useBasket } from "../Context/BasketContext";
import { useAuth } from "../Context/authContext";
export default function ProductDetail() {
  const { product_id } = useParams();
  const { Title } = Typography;
  const { addtoBasket, items } = useBasket();
  const { user, isLogding } = useAuth();
  const findBasketItem = items.find((item) => item._id === product_id);
  const { isLoading, error, data } = useQuery(
    ["productdetails", product_id],
    () => fetchProductDetails(product_id)
  );

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;
  return (
    <div className="product-details-page">
      <Box className="greet">
        <Image src="https://tpc.googlesyndication.com/simgad/15073585533129065785?" />
      </Box>
      <Box className={"product_details"} width={"100%"}>
        <Box
          className="product-img"
          width="50%"
          display={"flex"}
          justifyContent={"center"}
        >
          <Image src={data.photos[0]}/>
        </Box>
        <Box className="product_details_right" p={5}>
          <Divider className="divider" orientation="right">
            Product Detail
          </Divider>
          <Title className="product_title" level={3}>
            {data.description}
          </Title>
          <Box className="product_ratings_and_name">
            <Title level={4} className="product_name">
              {data.title}
            </Title>
            <Box className="ratings">
              <Space>
                {Array(5)
                  .fill(0)
                  .map((item) => (
                    <StarOutlined className="ratings_icon" />
                  ))}
              </Space>
            </Box>
          </Box>
          <Box className="product_price">
            <Text fontSize={"4x-l"}>{data.price || "19.258.52"} TL</Text>
          </Box>
          {isLogding && user.role === "admin" ? (
            ""
          ) : (
            <Box mt={40}>
              <ButtonGroup>
                <Button
                  colorScheme={findBasketItem ? "linkedin" : "facebook"}
                  onClick={() => {
                    addtoBasket(data, findBasketItem);
                  }}
                >
                  {findBasketItem ? "Remove Item" : "Add to basket"}
                </Button>
              </ButtonGroup>
            </Box>
          )}
        </Box>
      </Box>
    </div>
  );
}
