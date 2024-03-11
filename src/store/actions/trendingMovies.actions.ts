import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  filmData: null,
};

const trendingMoviesSlice = createSlice({
  name: "trendingMovies",
  initialState,
  reducers: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    setFilmData: (state, action: PayloadAction<any>) => {
      state.filmData = action.payload;
    },
  },
});

export const { setFilmData: setTrendingFilmData } = trendingMoviesSlice.actions;

export default trendingMoviesSlice.reducer;
