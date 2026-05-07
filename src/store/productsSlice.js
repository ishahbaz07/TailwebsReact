import { createSlice } from "@reduxjs/toolkit";
import { initialState as productData } from "../data/products.js";

const productsSlice = createSlice({
  name: "products",
  initialState: {
    ...productData,
    activeCategory: "What's New",
    navFilter: "",
    searchTerm: "",
    isLoading: false,
  },
  reducers: {
    setActiveCategory: (state, action) => {
      state.activeCategory = action.payload;
      state.searchTerm = "";
      state.isLoading = true;
    },
    setNavFilter: (state, action) => {
      state.navFilter = action.payload;
    },
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
      state.isLoading = true;
    },
    setLoaded: (state) => {
      state.isLoading = false;
    },
  },
});

export const { setActiveCategory, setNavFilter, setSearchTerm, setLoaded } =
  productsSlice.actions;

export default productsSlice.reducer;
