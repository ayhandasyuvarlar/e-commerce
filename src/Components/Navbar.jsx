import { Button, ButtonGroup } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useAuth } from "./Context/authContext";
import { useBasket } from "./Context/BasketContext";
export default function Navbar() {
  const { isLogding, user } = useAuth();
  const { items } = useBasket();
  return (
    <Wrapper>
      <ItemContext className="left">
        <Item className="logo">
          <Link to={"/"}>e-Commerce</Link>
        </Item>
        <Item>
          <Link to={"/"}>Products</Link>
        </Item>
      </ItemContext>
      <ItemContext className="right">
        <Item>
          {isLogding === false ? (
            <ButtonGroup>
              <Link to={"/sign"}>
                <Button colorScheme={"blue"}> Login</Button>
              </Link>
              <Link to={"/sighup"}>
                <Button colorScheme={"blue"}> Register</Button>
              </Link>
            </ButtonGroup>
          ) : (
            <ButtonGroup>
              <Link to={"/profile"}>
                <Button colorScheme={"blue"}>Profile</Button>
              </Link>
              {user.role === "admin" ? (
                <Link to={"/admin"}>
                  <Button colorScheme={"blue"}>Admin</Button>
                </Link>
              ) : (
                <Link to={"/basket"}>
                  <Button colorScheme={"blue"}>Basket {items.length}</Button>
                </Link>
              )}
            </ButtonGroup>
          )}
        </Item>
      </ItemContext>
    </Wrapper>
  );
}

const Wrapper = styled.nav`
  border-bottom: 1px solid #e2e8f0;
  margin: 0px auto;
  max-width: 1540px;
  padding: 1em;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  line-height: 2px;
`;

const ItemContext = styled.div`
  width: 300px;
  display: flex;
  height: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Item = styled.div`
  width: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
