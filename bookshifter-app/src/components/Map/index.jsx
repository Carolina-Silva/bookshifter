import { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import '../../services/leaflet.css';
import L from 'leaflet';

// Ajuste do ícone padrão do Leaflet
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png'
});

const UpdateMap = ({ latitude, longitude }) => {
  const map = useMap();

  useEffect(() => {
    map.setView([latitude, longitude], 13);
  }, [latitude, longitude, map]);

  return null;
};

const Map = ({ latitude, longitude, name }) => {
  return (
    <MapContainer center={[latitude, longitude]} zoom={200} style={{ height: "500px", width: "100%" }}>
      <UpdateMap latitude={latitude} longitude={longitude} />
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={[latitude, longitude]}>
        <Popup>
          {name ? name : 'fatec'}
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
