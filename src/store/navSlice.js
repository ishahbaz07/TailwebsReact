import { createSlice } from "@reduxjs/toolkit";

const navSlice = createSlice({
  name: "nav",
  initialState: {
    openDropdown: null,
    mobileOpen: false,
    searchOpen: false,
    searchQuery: "",
  },
  reducers: {
    openDropdown(state, action) {
      state.openDropdown = action.payload;
    },
    closeDropdown(state) {
      state.openDropdown = null;
    },
    toggleMobile(state) {
      state.mobileOpen = !state.mobileOpen;
    },
    closeMobile(state) {
      state.mobileOpen = false;
    },
    toggleSearch(state) {
      state.searchOpen = !state.searchOpen;
      if (!state.searchOpen) state.searchQuery = "";
    },
    setSearchQuery(state, action) {
      state.searchQuery = action.payload;
    },
  },
});

export const {
  openDropdown,
  closeDropdown,
  toggleMobile,
  closeMobile,
  toggleSearch,
  setSearchQuery,
} = navSlice.actions;

export default navSlice.reducer;
