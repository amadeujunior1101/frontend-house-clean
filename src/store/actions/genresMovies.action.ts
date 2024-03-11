import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IGenreMoviesState {
  filmData: null;
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

export const { setFilmData: setGenreFilmData } = genreMoviesSlice.actions;

export default genreMoviesSlice.reducer;
