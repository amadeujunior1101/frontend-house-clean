import React, { FC } from 'react';
import { converterMinutesInHours } from '../utils/convertMinutesInHours';
import { getYear } from '../utils/getYear';
import { IMovieInfo } from '../utils/movies.interface';

const MovieDetails: FC<IMovieInfo> = ({film}) => {

  return (
    <div className="flex flex-wrap w-screen" style={{ background: '#053264'}}>
      <div className="w-full lg:w-1/4 pt-0">
        <div className="p-0">
        <img src={
          film.poster_path === null
            ? 'https://placehold.co/100x150'
            : `https://image.tmdb.org/t/p/w500/${film.poster_path}`
          }
          alt=""
          className="mb-2 w-full h-auto object-cover rounded-md" />
        </div>
      </div> 
      <div className="w-full lg:w-3/4 p-4">
        <div className="p-4 mb-2" style={{lineHeight: 2.5}}>
          <span className="text-4xl font-bold text-white">
            {film.title}
          </span>
          <span className="text-lg flex flex-wrap items-center text-white">
            <span>{getYear(film.release_date)}</span>
            <span className="mx-2">&#8226;</span> 
            <span className="text-lg flex flex-wrap text-white">
              {film.genres.map((genre, index) => (
                <React.Fragment key={genre.id}>
                  <span>{genre.name}</span>
                  {index !== film.genres.length - 1 && <span className="mx-1">,</span>}
                </React.Fragment>
              ))}
            </span>
            <span className="mx-2">&#8226;</span>
            <span>{converterMinutesInHours(film.runtime)}</span>
            <span className="mx-2">&#8226;</span>
            <span>Classificação</span>
          </span>
          <span className="text-lg font-bold text-white">
            ***
          </span>
        </div>
        <div className="p-4 mb-4">
          <span className="text-lg font-bold text-white">Sinopse</span>
          <p className='text-white pt-3'>{film.overview}</p>
        </div>
      </div>
      
    </div>
  );
};

export { MovieDetails };
