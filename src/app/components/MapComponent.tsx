"use client";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

// Define props interface
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
  // Create a state for the location
  const [location, setLocation] = useState({
    name: "Badda's Chiya",
    address: "Ghattekulo Marga, Kathmandu 44600, Nepal",
    phone: "+977-01-4567890",
    coordinates: { lat: center[0], lng: center[1] },
  });

  // Create icon in useEffect to ensure it only runs on client
  const [icon, setIcon] = useState<L.DivIcon | null>(null);

  useEffect(() => {
    // Create the icon only on the client side
    const mapIcon = L.divIcon({
      className: "custom-marker",
      html: `<div class="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center shadow-lg transform -translate-x-1/2 -translate-y-1/2">
               <div class="w-3 h-3 bg-white rounded-full"></div>
             </div>`,
      iconSize: [24, 24],
      iconAnchor: [12, 12],
      popupAnchor: [0, -12],
    });
    
    setIcon(mapIcon);
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
      <Marker
        position={[location.coordinates.lat, location.coordinates.lng]}
        icon={icon}
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
    </MapContainer>
  );
} 