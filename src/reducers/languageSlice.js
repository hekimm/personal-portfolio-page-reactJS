import { createSlice } from "@reduxjs/toolkit";
import { setTyping, updateText, updateIndex, setReverse } from "./typingSlice";

const savedLanguage = localStorage.getItem("language") || "tr";

const initialState = {
  value: savedLanguage,
};

export const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    setLanguage: (state, action) => {
      state.value = action.payload;
      localStorage.setItem("language", action.payload);
    },
  },
  extraReducers: {
    [setLanguage]: (state, action) => {
      setTyping(true);
      updateText("");
      updateIndex(0);
      setReverse(false);
    },
  },
});

export const { setLanguage } = languageSlice.actions;

export const selectLanguage = (state) => state.language.value;

export default languageSlice.reducer;
