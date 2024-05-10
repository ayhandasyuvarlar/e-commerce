"use client";
import { fetchAllProducts } from "@/redux/Slice/productsSlice";
import { Divider } from "primereact/divider";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductsCard from "./ProductsCard";
import ErrorMessage from "./ErrorMessage";

const Products = () => {
  const allProducts = useSelector((state) => state.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [dispatch]);

  return (
    <main className="my-7">
      <Divider align="left">
        <h1 className="px-3 text-5xl font-bold">Products</h1>
      </Divider>
      {allProducts.error && <ErrorMessage message={allProducts.error} />}
      <aside className="flex flex-row w-full flex-wrap gap-3 justify-content-start mt-5 ">
        {allProducts.allProducts.length
          ? allProducts.allProducts.map((item) => (
              <ProductsCard key={item.id} {...item}></ProductsCard>
            ))
          : null}
      </aside>
    </main>
  );
};

export default Products;
