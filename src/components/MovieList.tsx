import { FC } from 'react';
import { IMovieList } from '../utils/movies.interface';

const MovieList: FC<IMovieList> = ({ movieInfo, scrollHorizontal = false, handleItemClick }) => {

  return (
    <>
      {scrollHorizontal ? (
        <div className="flex">
          {movieInfo.map((film, index) => (
            <div
              className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 pl-0 pr-8 mb-4 cursor-pointer"
              key={index}
              onClick={() => handleItemClick(film)}
            >
              <div className="film-card p-0 text-center w-300">
                <img
                  src={
                    film.poster_path === null
                      ? 'https://placehold.co/100x150'
                      : `https://image.tmdb.org/t/p/w500/${film.poster_path}`
                  }
                  alt=""
                  className="mb-2 w-full h-full object-cover"
                />
                <span className="font-bold">{film.title}</span>
                <br />
                <span>{film.year}</span>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-wrap -mx-4" style={{ width: '-webkit-fill-available' }}>
          {movieInfo.map((film, index) => (
            <div
              className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-4 cursor-pointer"
              key={index}
              onClick={() => handleItemClick(film)}
            >
              <div className="film-card p-0 text-center">
                <img
                  src={
                    film.poster_path === null
                      ? 'https://placehold.co/100x150'
                      : `https://image.tmdb.org/t/p/w500/${film.poster_path}`
                  }
                  alt=""
                  className="mb-2 w-full h-full object-cover"
                />
                <span className="font-bold">{film.title}</span>
                <br />
                <span>{film.year}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export { MovieList };
