import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
  name: "config",
  initialState: {
    lan: "en",
  },
  reducers: {
    changeLanguage: (state, action) => {
      state.lan = action.payload;
    },
  },
});

export default configSlice.reducer;

export const { changeLanguage } = configSlice.actions;
