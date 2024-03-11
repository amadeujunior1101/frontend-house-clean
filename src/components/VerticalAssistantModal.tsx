import React, { useEffect } from 'react';
import { VerticalAssistant } from './VerticalAssistant';

interface User {
    name: string;
    pos: number
}


interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: User[]
}

const VerticalAssistantModal: React.FC<ModalProps> = ({ isOpen, onClose, data }) => {

  const handleKeyPress = (e: KeyboardEvent): void => {
    if (e.key === 'Escape') {
      onClose();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleKeyPress);
    }
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, onClose]);

  return (
    <div className={`fixed inset-0 flex items-center justify-center ${isOpen ? 'visible' : 'invisible'}`}>
      <div className="fixed inset-0 bg-black opacity-50"></div>
      <div className="bg-white rounded-md p-6 z-50 w-[400px]">
        <h2 className="text-2xl font-bold mb-4">Rota de visitas</h2>
        <div className="w-full" style={{ maxHeight: '400px', overflowY: 'auto' }}>
            <VerticalAssistant data={data}/>
        </div>
        <div className="flex justify-end">
          <button className="mr-2 bg-gray-300 text-gray-700 px-4 py-2 rounded-md" onClick={onClose}>
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
};

export { VerticalAssistantModal };
