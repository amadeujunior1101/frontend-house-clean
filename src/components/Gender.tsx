import { FC, MouseEvent } from "react";

interface IGender {
  title: string;
  handleClick: (event: MouseEvent<HTMLButtonElement>, buttonValue: string) => void;
  selected: boolean;
}

const Gender: FC<IGender> = ({ title, handleClick, selected }) => {
    return (
      <div className='mr-4'>
        <button 
          className={`bg-blue-500 rounded-full p-2 px-4 cursor-pointer w-40 ${selected ? 'bg-blue-900' : ''}`}
          onClick={(event) => handleClick(event, `Valor do Botão ${title}`)}
          style={{ overflowY: 'auto' }}
        >
          <span className={`text-white ${selected ? 'font-bold' : ''}`}>{title}</span>
        </button>
      </div>
    );
  };
  
  export { Gender };
  