import React from "react";

import Break from "./components/Break";
import TopSellers from "./components/TopSellers";
import Categories from "./components/Categories";
import Products from "./components/Products";
import Skelton from "./components/Skelton";

export default function Home() {
  return (
    <main>
      <Break />
      <TopSellers></TopSellers>
      <Categories></Categories>
      <Products></Products>
    </main>
  );
}
