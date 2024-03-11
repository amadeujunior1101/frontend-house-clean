import { useEffect, useState } from 'react';
import { ButtonComponent } from "../components/Button";
import { apiClient } from '../service';
import {Table} from '../components/Table';
import {ModalComponent} from '../components/Modal';
import { SearchBar } from '../components/SearchBar';
import { VerticalAssistantModal } from '../components/VerticalAssistantModal';

interface ClientData {
  id: number;
  name: string;
  email: string;
  phone: string;
  coordinate_x: string;
  coordinate_y: string;
}

interface ClientDistance{
  name: string;
  latitude: string;
  longitude: string;
}

interface User {
  name: string;
  pos: number
}

const HomeScreen = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalAssistant, setModalAssistant] = useState(false);
  const [tableData, setTableData] = useState<ClientData[]>([]);
  const [selectedIds, setSelectedIds] = useState<number[]>([]);
  const [bestRoute, setBestRoute] = useState<User[]>([]);

  const handleOpenModal = (): void => {
    setModalOpen(true);
  };

  const handleCloseModal = (): void => {
    setModalOpen(false);
  };

useEffect(() => {
  getClients({filter: undefined})
  // eslint-disable-next-line react-hooks/exhaustive-deps
}, []);
interface ClientSearchParams {
  filter?: string;
}

const getClients = async (searchParams: ClientSearchParams) => {
  try {
    const response = await apiClient.get('/clients', {
      params: searchParams,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    setTableData(response.data)

  } catch (error) {
    console.error("Erro ao buscar dados:", error);
  }
};

const getRoute = async (clients: ClientDistance[]) => {
  try {
    const response = await apiClient.post('/clients/distance', 
    [{name: "", latitude: 0, longitude: 0}, ...clients], 
    {
        headers: {
          'Content-Type': 'application/json',
        },
    });

    setBestRoute(response.data)

  } catch (error) {
    console.error("Erro ao calcular a rota:", error);
  }
};

const handleSearch = (searchTerm: string) => {
  if(searchTerm){
    getClients({filter: searchTerm})
  }
};

const cleaned =() => {
  getClients({filter: undefined})
}

const tableSelectedIds =(ids: number[]) => {
  setSelectedIds(ids)
}

const handleOpenAssistantModal = (): void => {
  setModalAssistant(true);
  const filteredData = tableData.filter(item => selectedIds.includes(item.id));

  const newArray = filteredData.map(({ name, coordinate_x, coordinate_y }) => ({ name, latitude: coordinate_x, longitude: coordinate_y }));

  getRoute(newArray)
};

const handleCloseAssistantModal= (): void => {
  setModalAssistant(false);
};

  return (
    <div className="w-full">
      <div className="mx-auto flex items-center pt-3 pb-3 sm:px-2 md:px-2 lg:px-2 xl:px-0 max-w-1280 padding_mobile justify-end">
        <ButtonComponent title='Novo cliente' onClick={handleOpenModal} />
        <ButtonComponent title='Visualizar rota' onClick={handleOpenAssistantModal} bg='bg-red-500' hover='bg-red-900'/>
      </div>
      <div className="mx-auto flex items-center pt-3 pb-3 sm:px-2 md:px-2 lg:px-2 xl:px-0 max-w-1280 padding_mobile">
      <SearchBar onSearch={handleSearch} onClean={cleaned}/>
      </div>   
      <ModalComponent isOpen={modalOpen} onClose={handleCloseModal} />
      <VerticalAssistantModal isOpen={modalAssistant} onClose={handleCloseAssistantModal} data={bestRoute}/>
      <div className="mx-auto flex items-center pt-3 pb-3 sm:px-2 md:px-2 lg:px-2 xl:px-0 max-w-1280 padding_mobile">
        <Table data={tableData} tableSelectedIds={tableSelectedIds}/>
      </div>   
    </div>
  );
};

export { HomeScreen };
