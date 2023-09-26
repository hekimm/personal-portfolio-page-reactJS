import { createSlice } from "@reduxjs/toolkit";

export const themeToggleSlice = createSlice({
  name: "themeToggle",
  initialState: {
    isDisabled: false,
  },
  reducers: {
    disableToggle: (state) => {
      state.isDisabled = true;
    },
    enableToggle: (state) => {
      state.isDisabled = false;
    },
  },
});

export const { disableToggle, enableToggle } = themeToggleSlice.actions;
export default themeToggleSlice.reducer;
