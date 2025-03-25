"use client";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

interface Location {
  name: string;
  address: string;
  phone: string;
  coordinates: { lat: number; lng: number };
}

function MarkerComponent({ location, icon }: { 
  location: Location, 
  icon: L.Icon | L.Icon.Default
}) {
  return (
    <Marker
      position={[location.coordinates.lat, location.coordinates.lng]}
      icon={icon}
      eventHandlers={{
        mousedown: () => {}, 
      }}
    >
      <Popup>
        <div className="font-quicksand p-2 sm:p-3">
          <p className="font-semibold text-sm sm:text-base">
            {location.name}
          </p>
          <p className="text-gray-600 text-xs sm:text-sm mt-0.5 sm:mt-1">
            {location.address}
          </p>
          <p className="text-gray-600 text-xs sm:text-sm mt-0.5 sm:mt-1">
            {location.phone}
          </p>
        </div>
      </Popup>
    </Marker>
  );
}

interface MapComponentProps {
  center: [number, number];
  zoom: number;
  style: React.CSSProperties;
  scrollWheelZoom: boolean;
  className: string;
}

export default function MapComponent({
  center,
  zoom,
  style,
  scrollWheelZoom,
  className,
}: MapComponentProps) {
  const [location, setLocation] = useState({
    name: "Badda's Chiya",
    address: "Ghattekulo Marga, Kathmandu 44600, Nepal",
    phone: "+977-01-4567890",
    coordinates: { lat: center[0], lng: center[1] },
  });

  const [icon, setIcon] = useState<L.Icon | null>(null);

  useEffect(() => {
    const customIcon = new L.Icon({
      iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png',
      shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
      iconSize: [18, 30],
      iconAnchor: [9, 30],
      popupAnchor: [0, -30],
      shadowSize: [30, 30]
    });
    
    setIcon(customIcon);
  }, []);

  if (!icon) {
    return (
      <div className={`${className} bg-white/5 flex items-center justify-center`}>
        <p className="text-white/70">Loading map...</p>
      </div>
    );
  }

  return (
    <MapContainer
      center={center}
      zoom={zoom}
      style={style}
      scrollWheelZoom={scrollWheelZoom}
      className={className}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <MarkerComponent
        location={location}
        icon={icon}
      />
    </MapContainer>
  );
} 