import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./Slice/productsSlice";
import categoriesSlice from "./Slice/categoriesSlice";

export const store = configureStore({
  reducer: {
    products: productsSlice,
    category: categoriesSlice,
  },
});
