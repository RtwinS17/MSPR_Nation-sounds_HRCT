import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import './map.style.css';
import locationIcon from './location-icon.svg';
import toiletIcon from './toilets-icon.svg';
import restaurationIcon from './restaurant-icon.svg';
import userIcon from './user-icon.svg';
import medicalIcon from './medical-icon.svg';

const Map = () => {
  const mapCenter = [48.83040876690479, 2.441774125391102];
  const mapZoom = 16;

  const iconMappings = {
    scene: new L.Icon({
      iconUrl: locationIcon,
      iconSize: [32, 32],
      iconAnchor: [16, 32],
      popupAnchor: [0, -32],
    }),
    restauration: new L.Icon({
      iconUrl: restaurationIcon,
      iconSize: [32, 32],
      iconAnchor: [16, 32],
      popupAnchor: [0, -32],
    }),
    toilets: new L.Icon({
      iconUrl: toiletIcon,
      iconSize: [32, 32],
      iconAnchor: [16, 32],
      popupAnchor: [0, -32],
    }),
    user: new L.Icon({
      iconUrl: userIcon,
      iconSize: [32, 32],
      iconAnchor: [16, 32],
      popupAnchor: [0, -32],
    }),
    medical: new L.Icon({
      iconUrl: medicalIcon,
      iconSize: [32, 32],
      iconAnchor: [16, 32],
      popupAnchor: [0, -32],
    }),
  };

  // const LocationMarker = () => {
  //   const [position, setPosition] = useState(null);
  //   const map = useMap();
  
  //   useEffect(() => {
  //     map.locate().on('locationfound', function (e) {
  //       setPosition(e.latlng);
  //       map.flyTo(e.latlng, map.getZoom());
  //     });
  //   }, [map]);
  
  //   return position === null ? null : (
  //     <Marker position={position} icon={iconMappings.user}>
  //       <Popup>Vous êtes ici</Popup>
  //     </Marker>
  //   );
  // };  

  const festivalLocations = [
    {
      id: 1,
      title: 'Scène principale',
      coordinates: [48.831448433324354, 2.4423541971134033],
      type: 'scene',
    },
    { id: 2, title: 'Scène A', coordinates: [48.82994045936849, 2.4401758873799015], type: 'scene' },
    { id: 3, title: 'Scène B', coordinates: [48.828849351493574, 2.4426331468446243], type: 'scene' },
    {
      id: 4,
      title: 'Buvette - Restauration',
      coordinates: [48.8308128007656, 2.4407985159200556],
      type: 'restauration',
    },
    {
      id: 5,
      title: 'Buvette - Restauration',
      coordinates: [48.83132798831075, 2.443906611959251],
      type: 'restauration',
    },
    {
      id: 5,
      title: 'Toilettes',
      coordinates: [48.83017588289182, 2.443949825802048],
      type: 'toilets',
    },
    {
      id: 6,
      title: 'Toilettes',
      coordinates: [48.8288103903128, 2.440708787592244],
      type: 'toilets',
    },
    {
      id: 6,
      title: 'Premiers secours',
      coordinates: [48.829983862746445, 2.4419079717298717],
      type: 'medical',
    }
  ];

  return (
    <MapContainer
      className="shadow-md m-2"
      center={mapCenter}
      zoom={mapZoom}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {festivalLocations.map((location, index) => (
        <Marker
          key={index}
          position={location.coordinates}
          icon={iconMappings[location.type]}
        >
          <Popup>
            <div className="text-center">{location.title}</div>
          </Popup>
        </Marker>
      ))}
      {/* <LocationMarker /> */}
    </MapContainer>
  );
};

export default Map;
