import React, { useState, useEffect } from 'react';
import { formatPhoneNumber } from '../utils/formatPhoneNumber';
import { TableData } from '../utils/interfaces';

interface TableProps {
  data: TableData[];
  tableSelectedIds: (ids: number[]) => void;
}

const Table: React.FC<TableProps> = ({ data, tableSelectedIds }) => {
  const [selectedIds, setSelectedIds] = useState<number[]>([]);

  useEffect(() => {
    tableSelectedIds(selectedIds);
  }, [selectedIds, tableSelectedIds]);

  const handleCheckboxChange = (id: number) => {
    setSelectedIds((prevSelectedIds) => {
      const newSelectedIds = prevSelectedIds.includes(id)
        ? prevSelectedIds.filter((selectedId) => selectedId !== id)
        : [...prevSelectedIds, id];

      return newSelectedIds;
    });
  };

  const handleSelectAllChange = () => {
    const allIds = data.map((item) => item.id);
    setSelectedIds((prevSelectedIds) =>
      prevSelectedIds.length === data.length ? [] : allIds
    );
  };

  return (
    <div className='w-full'>
      <table className="w-full bg-white shadow-lg border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border-b p-4 border-gray-300 text-left w-1/12">
              <input
                type="checkbox"
                checked={selectedIds.length === data.length}
                onChange={handleSelectAllChange}
              />
            </th>
            <th className="border-b p-4 border-gray-300 text-left w-1/12">ID</th>
            <th className="border-b p-4 border-gray-300 text-left w-3/12">Name</th>
            <th className="border-b p-4 border-gray-300 text-left w-3/12">Email</th>
            <th className="border-b p-4 border-gray-300 text-left w-2/12">Telefone</th>
          </tr>
        </thead>
      </table>
      <div className="w-full" style={{ maxHeight: '600px', overflowY: 'auto' }}>
        <table className="w-full bg-white shadow-lg border border-gray-300">
          <tbody>
            {data.map((item) => (
              <tr key={item.id} className="hover:bg-gray-100">
                <td className="border-b p-4 border-gray-300 text-left w-1/12">
                  <input
                    type="checkbox"
                    checked={selectedIds.includes(item.id)}
                    onChange={() => handleCheckboxChange(item.id)}
                  />
                </td>
                <td className="border-b p-4 border-gray-300 text-left w-1/12">{item.id}</td>
                <td className="border-b p-4 border-gray-300 text-left w-3/12">{item.name}</td>
                <td className="border-b p-4 border-gray-300 text-left w-3/12">{item.email}</td>
                <td className="border-b p-4 border-gray-300 text-left w-2/12">{formatPhoneNumber(item.phone)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export { Table }
