import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import './map.style.css';
import L from 'leaflet';
import customIconImg from './location-icon.svg';

const Map = () => {
  const mapCenter = [48.8340, 2.4510];
  const mapZoom = 13;

  const customIcon = new L.Icon({
    iconUrl: customIconImg,
    iconSize: [32, 32], 
    iconAnchor: [16, 32], 
    popupAnchor: [0, -32], 
  });

  const festivalLocations = [
    { id: 1, title: 'Scène principale', coordinates: [48.8325, 2.4492] },
    { id: 2, title: 'Scène A', coordinates: [48.8340, 2.4510] },
    { id: 3, title: 'Scène B', coordinates: [48.8310, 2.4525] },
    { id: 4, title: 'Scène C', coordinates: [48.8305, 2.4485] },
    { id: 5, title: 'Scène D', coordinates: [48.8345, 2.4470] },
  ];

  return (
    <MapContainer center={mapCenter} zoom={mapZoom} scrollWheelZoom={false}>
      <TileLayer
        attribution='© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
     {festivalLocations.map((location, index) => (
      <Marker key={index} position={location.coordinates} icon={customIcon}>
        <Popup>{location.title}</Popup>
      </Marker>
    ))}
    </MapContainer>
  );
};

export default Map;
