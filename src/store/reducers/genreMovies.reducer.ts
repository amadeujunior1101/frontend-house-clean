import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IGenreMoviesState {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  filmData: any;
}

const initialState: IGenreMoviesState = {
  filmData: null,
};

const genreMoviesSlice = createSlice({
  name: "genreMovies",
  initialState,
  reducers: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    setFilmData: (state, action: PayloadAction<any>) => {
      state.filmData = action.payload;
    },
  },
});

export const { setFilmData: setPopularFilmData } = genreMoviesSlice.actions;

export default genreMoviesSlice.reducer;
