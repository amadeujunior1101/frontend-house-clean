import { Link } from 'react-router-dom';

const TopBar = () => {
  return (
    <div className="mx-auto flex items-center justify-between pt-5 pb-5 sm:px-2 md:px-2 lg:px-2 xl:px-0 max-w-1280 padding_mobile">
      <Link to="/" className="text-white font-bold">House Clean</Link>
    </div>
  );
}

export { TopBar };
