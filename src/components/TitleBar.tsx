import { FC, MouseEvent } from 'react';
import { ITitleBar } from '../utils/movies.interface';

const TitleBar: FC<ITitleBar> = ({ title, icon, goBack }) => {
  const handleIconClick = (event: MouseEvent) => {
    event.preventDefault();
    if (goBack) {
      goBack();
    }
  };

  return (
    <div className="flex flex-wrap" style={{ width: '-webkit-fill-available' }}>
      <div className="w-full text-start ml-0 mt-4 mb-3 flex items-center font-medium">
        {icon && (
          <a href="/" className="mr-2 inline" onClick={handleIconClick}>
            {icon}
          </a>
        )}
        <span>{title}</span>
      </div>
    </div>
  );
};

export { TitleBar };
