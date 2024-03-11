import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  filmData: null,
};

const popularMoviesSlice = createSlice({
  name: "popularMovies",
  initialState,
  reducers: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    setFilmData: (state, action: PayloadAction<any>) => {
      state.filmData = action.payload;
    },
  },
});

export const { setFilmData: setPopularFilmData } = popularMoviesSlice.actions;

export default popularMoviesSlice.reducer;
