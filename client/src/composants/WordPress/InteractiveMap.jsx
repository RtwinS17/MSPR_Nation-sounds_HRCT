import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const InteractiveMap = () => {
  // Position de départ pour la carte
  const centerPosition = [45.4215, -75.6972];

  // Remplacez cela par vos propres données récupérées de l'API WordPress
  const markerPosition = [45.4215, -75.6972];
  const markerTitle = "Titre de l'emplacement";
  const markerAddress = "Adresse de l'emplacement";

  return (
    <MapContainer center={centerPosition} zoom={15} scrollWheelZoom={true} style={{ height: '480px', width: '100%' }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={markerPosition}>
        <Popup>
          <strong>{markerTitle}</strong><br />
          {markerAddress}
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default InteractiveMap;
