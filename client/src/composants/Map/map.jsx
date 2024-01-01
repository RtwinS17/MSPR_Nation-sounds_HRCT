import React, { useState, useEffect, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet-routing-machine';
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';
import './map.style.css';
import customIconImg from './location-icon.svg';

let routingControl = null; 

const Map = () => {
  const mapCenter = [48.834, 2.451];
  const mapZoom = 13;
  const mapRef = useRef(null); 

  const customIcon = new L.Icon({
    iconUrl: customIconImg,
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
  });

  const LocationMarker = () => {
    const [position, setPosition] = useState(null);

    const map = useMap();

    useEffect(() => {
      map.locate().on('locationfound', function (e) {
        setPosition(e.latlng);
        map.flyTo(e.latlng, map.getZoom());
      });
    }, [map]);

    return position === null ? null : (
      <Marker position={position} icon={customIcon}>
        <Popup>Vous êtes ici</Popup>
      </Marker>
    );
  };

  const handleNavigation = (destinationCoordinates) => {
    const map = mapRef.current;
    const currentPosition = map.getCenter();

    if (routingControl != null) {
      map.removeControl(routingControl);
    }

    routingControl = L.Routing.control({
      waypoints: [
        L.latLng(currentPosition.lat, currentPosition.lng),
        L.latLng(destinationCoordinates[0], destinationCoordinates[1]),
      ],
    }).addTo(map);
  };

  const festivalLocations = [
    { id: 1, title: 'Scène principale', coordinates: [48.8325, 2.4492] },
    { id: 2, title: 'Scène A', coordinates: [48.834, 2.451] },
    { id: 3, title: 'Scène B', coordinates: [48.831, 2.4525] },
    { id: 4, title: 'Buvette - Restauration', coordinates: [48.8305, 2.4485] },
    { id: 5, title: 'Toilettes', coordinates: [48.8345, 2.447] },
  ];

  return (
    <MapContainer
      ref={mapRef} 
      className='shadow-md m-2'
      center={mapCenter}
      zoom={mapZoom}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {festivalLocations.map((location, index) => (
        <Marker key={index} position={location.coordinates} icon={customIcon}>
          <Popup>
            <div className="text-center">
              {location.title}
              <br />
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => handleNavigation(location.coordinates)}
              >
                Y aller
              </button>
            </div>
          </Popup>
        </Marker>
      ))}
      <LocationMarker />
    </MapContainer>
  );
};

export default Map;
