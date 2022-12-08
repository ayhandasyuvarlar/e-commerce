import "./App.css";
import "./navbar.modules.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import styled from "styled-components";
import Sign from "./page/auth/sign";
import Sighup from "./page/auth/sighup";
import Products from "./page/Products";
import ProductDetail from "./Components/ProductDetail";
import Profile from "./Components/Profile";
import Basket from "./page/Cart/Basket";
import Admin from "./page/Admin";
import Home from "./page/Admin/home";
import Orders from "./page/Admin/Orders";
import AdminProducts from "./page/Admin/Products";
import AdminProductsDetail from "./page/Admin/ProductDetail";
import NewProduct from "./page/Admin/Products/NewProduct";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <View>
          <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/:product_id" element={<ProductDetail />} />
            <Route path="/sign" element={<Sign />} />
            <Route path="/sighup" element={<Sighup />} />
            <Route path="/profile" element={<Profile />} />
            <Route  element={<Admin />}>
            <Route index path="/admin" element={<Home />} />
						<Route path="/admin/orders" element={<Orders />} />
						<Route path="/admin/products" element={<AdminProducts/>} />
            <Route path="/admin/products/newProducts" element={<NewProduct/>} />
            <Route path="/admin/products/:product_id" element={<AdminProductsDetail/>} />
            </Route> 
            <Route path="/basket" element={<Basket />} />
          </Routes>
        </View>
      </BrowserRouter>
    </>
  );
}

export default App;
const View = styled.section`
  width: 1400px;
  margin: 40px auto;
  font-family: "Poppins", sans-serif;
`;
