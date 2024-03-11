import React, { useState } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

interface ICoordinates {
    handleMarkerClick: (coordinates: [number, number]) => void;
}

const MapComponent: React.FC<ICoordinates> = ({handleMarkerClick}) => {
  const [markerPosition, setMarkerPosition] = useState<[number, number] | null>([-5.4693, -47.8827]);

  const containerStyle = {
    // width: '400px',
    height: '400px',
    width: '100%',
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleMarkerDrag = (event: any) => {
    const { lat, lng } = event.target.getLatLng();
    setMarkerPosition([lat, lng]);
    handleMarkerClick([lat, lng]);
    
  };

  return (
    <div style={containerStyle}>
      <MapContainer center={markerPosition || [-5.4693, -47.8827]} zoom={15} style={{ width: '100%', height: '100%' }}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {markerPosition && (
          <Marker position={markerPosition} draggable={true} eventHandlers={{ dragend: handleMarkerDrag }}>
            <Popup>Coordenadas: {JSON.stringify(markerPosition)}</Popup>
          </Marker>
        )}
      </MapContainer>
    </div>
  );
};

export { MapComponent };
