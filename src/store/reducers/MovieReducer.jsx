import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  moviedata: [],
};
const movieSlice = createSlice({
  name: "moviedata",
  initialState,
  reducers: {
    getmoviedata: (state,action) => {
      state.moviedata = action.payload;
    },
  },
});

export const {getmoviedata}= movieSlice.actions;
export default movieSlice.reducer;
 