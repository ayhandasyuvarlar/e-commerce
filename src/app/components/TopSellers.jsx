"use client";
import { fetchTopSellers } from "@/redux/Slice/productsSlice";
import { Divider } from "primereact/divider";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Skelton from "./Skelton";
import ProductsCard from "./ProductsCard";

const TopSellers = () => {
  const topSellersProducts = useSelector((state) => state.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTopSellers());
  }, [dispatch]);

  return (
    <main className="flex flex-column w-full mt-8 mb-8">
      <Divider align="left">
        <h1 className="px-3 text-5xl font-bold">Top Sellers</h1>
      </Divider>
      {topSellersProducts.loading && <Skelton itemCount={4} />}
      <aside className="flex flex-row w-full flex-wrap gap-3 justify-content-center mt-5 ">
        {topSellersProducts.topSellers.length
          ? topSellersProducts.topSellers.map((item) => (
              <ProductsCard key={item.id} {...item}></ProductsCard>
            ))
          : null}
      </aside>
    </main>
  );
};

export default TopSellers;
