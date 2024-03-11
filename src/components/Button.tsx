import React from 'react';

interface ButtonProps {
  onClick: () => void;
  title: string;
  bg?: string;
  hover?: string;
}

const ButtonComponent: React.FC<ButtonProps> = ({ onClick, title, bg='bg-blue-500', hover='bg-blue-900' }) => {
  return (
    <button
      onClick={onClick}
      className={`${bg} hover:${hover} text-white font-bold ml-3 py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
    >
      {title}
    </button>
  );
};

export { ButtonComponent }
