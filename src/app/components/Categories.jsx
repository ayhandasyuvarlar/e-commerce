"use client";

import {
  fetchCategory,
  fetchCategoryProducts,
} from "@/redux/Slice/categoriesSlice";
import { Divider } from "primereact/divider";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Categories = () => {
  let selectCategory;
  const handleClick = (category) => {
    selectCategory = category;
    dispatch(fetchCategoryProducts(selectCategory));
  };
  const category = useSelector((state) => state.category);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategory());
    dispatch(fetchCategoryProducts(selectCategory));
    console.log(JSON.stringify(category));
  }, [selectCategory]);

  return (
    <main className="my-7">
      <Divider align="left">
        <h1 className="px-3 text-5xl font-bold">Categories</h1>
      </Divider>
      <ul className="flex flex-row w-full mt-2 p-5 pl-0 justify-content-start gap-4  ">
        {category.categories.length
          ? category.categories.map((category, idx) => {
              return (
                <li
                  className="border-1 border-round-xl bg-blue-900 text-white font-bold p-2 px-6 cursor-pointer"
                  key={idx}
                  onClick={() => handleClick(category)}
                >
                  {category}
                </li>
              );
            })
          : null}
      </ul>
      <div> 
       {JSON.stringify(category.categoryProducts)} 
      </div>
    </main>
  );
};

export default Categories;
