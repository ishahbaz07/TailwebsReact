import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./productsSlice.js";
import navReducer from "./navSlice.js";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    nav: navReducer, //
  },
});
