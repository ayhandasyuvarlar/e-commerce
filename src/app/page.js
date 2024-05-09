import React from "react";

import Break from "./components/Break";
import TopSellers from "./components/TopSellers";
import Categories from "./components/Categories";

export default function Home() {
  return (
    <main>
      <Break />
      <TopSellers></TopSellers>
      <Categories></Categories>
    </main>
  );
}
