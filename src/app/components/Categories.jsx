"use client";
import { useState, useEffect } from "react";
import {
  fetchCategory,
  fetchCategoryProducts,
} from "@/redux/Slice/categoriesSlice";
import { Divider } from "primereact/divider";
import { useDispatch, useSelector } from "react-redux";
import ProductsCard from "./ProductsCard";
import Skelton from "./Skelton";
import ErrorMessage from "./ErrorMessage";

const Categories = () => {
  const [selectedCategory, setSelectedCategory] = useState("electronics");
  const categoryState = useSelector((state) => state.category);
  const dispatch = useDispatch();

  const handleClick = (category) => {
    setSelectedCategory(category);
    dispatch(fetchCategoryProducts(category));
  };

  useEffect(() => {
    dispatch(fetchCategory());
    dispatch(fetchCategoryProducts(selectedCategory));
  }, [selectedCategory, dispatch]);

  return (
    <main className="my-7">
      <Divider align="left">
        <h1 className="px-3 text-5xl font-bold">Categories</h1>
      </Divider>
      <ul className="flex flex-row w-full mt-2 p-5 pl-0 justify-content-start gap-4">
        {categoryState.categories.map((category, idx) => (
          <li
            key={idx}
            className={`border-round-md text-xl p-2 px-6 cursor-pointer ${
              category === selectedCategory
                ? "bg-green-500 text-white"
                : "bg-blue-900 text-white"
            }`}
            onClick={() => handleClick(category)}
          >
            {category}
          </li>
        ))}
      </ul>
      <aside className="flex flex-row w-full flex-wrap gap-3 justify-content-start mt-5">
        {categoryState.loading && <Skelton itemCount={4} />}
        {categoryState.categoryProducts.map((item) => (
          <ProductsCard key={item.id} {...item}></ProductsCard>
        ))}
        {categoryState.error && <ErrorMessage message={allProducts.error} />}
      </aside>
    </main>
  );
};

export default Categories;
