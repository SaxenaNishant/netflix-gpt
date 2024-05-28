import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    tmdbResults: null,
    movieResults: null,
  },
  reducers: {
    toggleGptSearchView: (state, action) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addGptMovieResult: (state, action) => {
      const { tmdbResults, movieResults } = action.payload;
      state.tmdbResults = tmdbResults;
      state.movieResults = movieResults;
    },
  },
});

export default gptSlice.reducer;

export const { toggleGptSearchView, addGptMovieResult } = gptSlice.actions;
