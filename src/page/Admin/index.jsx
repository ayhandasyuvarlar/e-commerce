import { Box, Button } from "@chakra-ui/react";
import React from "react";
import { Navigate, Link, Outlet } from "react-router-dom";
import { useAuth } from "../../Components/Context/authContext";
import './admin.css'
export default function Admin() {
  const { user, isLogding } = useAuth();
  setTimeout(() => {
    user?.role !== "admin" && <Navigate to={"/"} replace={true} />;
  }, 1000);
  return (
    isLogding && (
      <div className="admin_container">
        <nav className="admin_navbar">
          <Link to={"/admin"}>Home</Link>
          <Link to={"/admin/orders"}>Orders</Link>
          <Link to={"/admin/products"}>Products</Link>
          <Link to={"/admin/products/newProducts"}>New Product</Link>
        </nav>
        <Box mt={0}>
          <Outlet />
        </Box>
      </div>
    )
  );
}
