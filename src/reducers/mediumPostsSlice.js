// mediumPostsSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchMediumPosts = createAsyncThunk(
  "mediumPosts/fetch",
  async () => {
    const response = await fetch(
      "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@hekimcanaktas",
    );
    const data = await response.json();
    return data.items;
  },
);

const mediumPostsSlice = createSlice({
  name: "mediumPosts",
  initialState: {
    posts: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMediumPosts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMediumPosts.fulfilled, (state, action) => {
        state.posts = action.payload;
        state.loading = false;
      })
      .addCase(fetchMediumPosts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default mediumPostsSlice.reducer;
