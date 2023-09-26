// typingSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  text: "",
  index: 0,
  reverse: false,
  typing: true,
};

const typingSlice = createSlice({
  name: "typing",
  initialState,
  reducers: {
    updateText: (state, action) => {
      state.text = action.payload;
    },
    updateIndex: (state, action) => {
      state.index = action.payload;
    },
    setReverse: (state, action) => {
      state.reverse = action.payload;
    },
    setTyping: (state, action) => {
      state.typing = action.payload;
    },
  },
});

export const { updateText, updateIndex, setReverse, setTyping } =
  typingSlice.actions;
export default typingSlice.reducer;
