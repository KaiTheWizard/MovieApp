import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tvdata: null,
};
const TvSlice = createSlice({
  name: "tvdata",
  initialState,
  reducers: {
    gettvdata: (state,action) => {
      state.tvdata = action.payload;
      console.log(action.payload)
      console.log(state.tvdata);
    },
  },
});

export const {gettvdata}= TvSlice.actions;
export default TvSlice.reducer;
 