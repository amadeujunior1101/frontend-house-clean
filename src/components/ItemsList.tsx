import { FC } from 'react';

interface IItem {
  name: string;
  year: number;
}

interface IItemList {
  items: IItem[];
}

const ItemList: FC<IItemList> = ({ items }) => {
  return (
    <div className="mx-auto flex items-center pt-3 pb-3 sm:px-2 md:px-2 lg:px-2 xl:px-0 max-w-1280">
      {items.map((item, index) => (
        <div key={index} className="w-96 p-4 bg-blue-400">
          <div>
            <span>{item.name}</span>
          </div>
          <div>
            <span>{item.year}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export { ItemList };
