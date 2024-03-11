export interface IGenreMovieList {
  id: string;
  name: string;
  active: boolean;
}

export interface IGenreVideos {
  genreMovies: {
    filmData: IGenreMovieList[];
  };
}

export interface ITrendingVideos {
  trendingMovies: {
    filmData: IListVideos[];
  };
}

export interface IPopularVideos {
  popularMovies: {
    filmData: IListVideos[];
  };
}

export interface IListVideos {
  id: string;
  title: string;
  poster_path: string;
  year: string;
  genre_ids: string;
}

export interface IFilmCard {
  id: string;
  poster_path: string;
  title: string;
  year: string;
}

export interface IResultSearchVideos {
  id: string;
  title: string;
  poster_path: string;
  year: string;
}

interface ICast {
  id: string;
  name: string;
  profile_path: string;
  character: string;
}

interface IGenres {
  id: number;
  name: string;
}

export interface IMovie {
  id: string;
  poster_path: string;
  title: string;
  release_date: string;
  overview: string;
  runtime: number;
  genres: IGenres[];
  castInfo: ICast[];
}
interface IGenres {
  id: number;
  name: string;
}

interface IFilms {
  id: string;
  poster_path: string;
  title: string;
  release_date: string;
  overview: string;
  runtime: number;
  genres: IGenres[];
}

export interface IMovieInfo {
  film: IFilms;
}

export interface IMovieList {
  movieInfo: IFilmCard[];
  scrollHorizontal?: boolean;
  handleItemClick: (film: IFilmCard) => void;
}

export interface ITitleBar {
  title: string;
  icon?: JSX.Element;
  goBack?: () => void;
}

export interface IGenreMoviesState {
  genreMovies: {
    filmData: IGenreMovieList[];
  };
}

export interface IPopularMoviesState {
  filmData: IPopularVideos;
}

export interface ITrendingMoviesState {
  filmData: ITrendingVideos;
}
