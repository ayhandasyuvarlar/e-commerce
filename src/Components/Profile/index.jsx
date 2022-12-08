import { Box, Button, Flex, Image } from "@chakra-ui/react";
import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../Context/authContext";
import { Typography, Divider } from "antd";
import "./profile.css";
function Profile() {
  const { Title, Text } = Typography;
  const { user, logout, isLogding } = useAuth();
  const handlerClick = async () => {
    logout(() => {});
  };
  if (!isLogding) {
    return <Navigate to={"/sign"} replace />;
  }
  return (
    <Flex flexDirection={"column"}>
      <Box className="user-chapter">
        <Image src="https://tpc.googlesyndication.com/simgad/9262231998979794074?"></Image>
      </Box>
      <Box className="user-box">
        <Divider className="user-name" orientation="right">
          WELCOME AYHAN
        </Divider>
      </Box>
      <Box>
        <Button onClick={handlerClick}>Logout</Button>
      </Box>
    </Flex>
  );
}
export default Profile;
