import { configureStore } from "@reduxjs/toolkit";
import genreMoviesReducer from "./reducers/genreMovies.reducer";
import popularMoviesReducer from "./reducers/popularMovies.reducer";
import trendingMoviesReducer from "./reducers/trendingMovies.reducer";

const store = configureStore({
  reducer: {
    trendingMovies: trendingMoviesReducer,
    popularMovies: popularMoviesReducer,
    genreMovies: genreMoviesReducer,
  },
});

export default store;
