import { FC } from 'react';

interface ICastCard {
  id: string;
  profile_path: string;
  name: string;
  character: string;
}

interface ICastList {
  castInfo: ICastCard[];
}

const CastList: FC<ICastList> = ({ castInfo }) => {

  return (
        <div className="flex">
          {castInfo.map((film, index) => (
            <div
              className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 pl-0 pr-8 mb-0 cursor-pointer"
              key={index}
            >
              <div className="film-card p-0 text-center w-200">
                <img
                  src={
                    film.profile_path === null
                      ? 'https://placehold.co/200x300'
                      : `https://image.tmdb.org/t/p/w500/${film.profile_path}`
                  }
                  alt=""
                  className="mb-2 w-200 h-300 object-cover rounded-md"
                />
                <span className="font-bold">{film.name}</span> <br />
                <span className="font-mono">{film.character}</span>
              </div>
            </div>
          ))}
        </div>
  );
};

export { CastList };
