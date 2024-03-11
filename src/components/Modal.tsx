import React, { useState, ChangeEvent, useEffect } from 'react';
import { MapComponent } from './Map';
import { apiClient } from '../service';
import { convertToCartesian } from '../utils/convertToCartesian';
import { addedMaskPhoneNumber } from '../utils/addedMaskPhoneNumber';
import { FormData, IErrors } from '../utils/interfaces';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  load: () => void;
}

const ModalComponent: React.FC<ModalProps> = ({ isOpen, onClose, load }) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
  });

  const [modalCoordinates, setModalCoordinates] = useState<[number, number] | null>(null);
  const [convertedCoordinates, setConvertedCoordinates] = useState<[number, number]>();
  const [errors, setErrors] = useState<IErrors[]>([]);

  const handleMarkerClick = (coordinates: [number, number]) => {
    setModalCoordinates(coordinates);
    const converted = convertToCartesian(coordinates[0], coordinates[1]);
    setConvertedCoordinates([converted.x, converted.y]);
  };

  const cleanFields =()=>{
    setFormData({
        name: '',
        email: '',
        phone: '',
      });
    setErrors([])
  }

  const createClient = async (formData: FormData) => {
 
    try {
      await apiClient.post('/clients', {
            name: formData.name,
            email: formData.email,
            phone: formData.phone.replace(/\D/g, ''),
            coordinate_x: convertedCoordinates?.[0],
            coordinate_y: convertedCoordinates?.[1],
        },
        {
            headers: {
            'Content-Type': 'application/json',
        },
    });

    cleanFields();
    load();
    onClose();
  
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      if (error.response?.data) {
        setErrors(error.response.data);
      } else {
        console.error('Erro ao buscar dados:', error);
      }
    }
  };
  
  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    const formattedValue = name === 'phone' ? addedMaskPhoneNumber(value) : value;

    setFormData((prevData) => ({ ...prevData, [name]: formattedValue }));
  };

  const handleSubmit = (): void => {
    createClient(formData)
  };

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
      <div className="bg-white rounded-md p-6 z-50 w-[600px]">
        <h2 className="text-2xl font-bold mb-4">Novo cliente</h2>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-600">
            Nome
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 p-2 w-full border-2 border-gray-300 rounded-md"
          />
          {errors.find((error) => error.property === 'name') && (
            <label htmlFor="name" className="block text-sm font-medium text-red-600">
              {errors.find((error) => error.property === 'name')?.constraints.isNotEmpty}
            </label>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-600">
            E-mail
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 p-2 w-full border-2 border-gray-300 rounded-md"
          />
         {errors.find((error) => error.property === 'email') && (
              <label htmlFor="email" className="block text-sm font-medium text-red-600">
                {errors.find((error) => error.property === 'email')?.constraints.isEmail}
              </label>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="phone" className="block text-sm font-medium text-gray-600">
            Telefone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="mt-1 p-2 w-full border-2 border-gray-300 rounded-md"
          />
          {errors.find((error) => error.property === 'phone') && (
            <>
              <label htmlFor="phone" className="block text-sm font-medium text-red-600">
                {errors.find((error) => error.property === 'phone')?.constraints.isNotEmpty}
              </label>
              <label htmlFor="phone" className="block text-sm font-medium text-red-600">
                {errors.find((error) => error.property === 'phone')?.constraints.matches}
              </label>
            </>
          )}
        </div>
            <div>
            <h3>Coordenadas do Ponto Marcado:</h3>
            <p>Latitude: {modalCoordinates?.[0]}</p>
            {errors.find((error) => error.property === 'coordinate_x') && (
              <label htmlFor="coordinate_x" className="block text-sm font-medium text-red-600">
                {errors.find((error) => error.property === 'coordinate_x')?.constraints.isNotEmpty}
              </label>
            )}
            <p>Longitude: {modalCoordinates?.[1]}</p>
            {errors.find((error) => error.property === 'coordinate_y') && (
              <label htmlFor="coordinate_y" className="block text-sm font-medium text-red-600">
                {errors.find((error) => error.property === 'coordinate_y')?.constraints.isNotEmpty}
              </label>
            )}
            </div>
        <div className="mb-4">
            <MapComponent handleMarkerClick={handleMarkerClick}/>
        </div>
        <div className="flex justify-end">
          <button className="mr-2 bg-gray-300 text-gray-700 px-4 py-2 rounded-md" onClick={onClose}>
            Cancelar
          </button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md" onClick={handleSubmit}>
            Enviar
          </button>
        </div>
      </div>
    </div>
  );
};

export { ModalComponent };
