"use client";
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';

interface Branch {
  name: string;
  address: string;
  phone: string;
  coordinates: { lat: number; lng: number };
}

interface ClientOnlyMapProps {
  branches: Branch[];
  center: [number, number];
  onMarkerClick: (branch: Branch) => void;
}

// Ensure LeafletJS icon images are properly loaded
function fixLeafletIconUrls() {
  delete (L.Icon.Default.prototype as any)._getIconUrl;
  
  L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
    iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
  });
}

// Define a custom component to ensure marker clicks work on iOS
function MarkerComponent({ branch, icon, onMarkerClick }: { 
  branch: Branch, 
  icon: L.Icon | L.Icon.Default, 
  onMarkerClick: (branch: Branch) => void 
}) {
  return (
    <Marker
      position={[branch.coordinates.lat, branch.coordinates.lng]}
      icon={icon}
      eventHandlers={{
        click: () => onMarkerClick(branch),
        mousedown: () => onMarkerClick(branch), // Add mousedown for iOS
      }}
    >
      <Popup>
        <div className="font-quicksand p-1 xs:p-1.5 sm:p-2 md:p-3">
          <p className="font-semibold text-[10px] xs:text-xs sm:text-sm md:text-base">
            {branch.name}
          </p>
          <p className="text-gray-600 text-[8px] xs:text-[10px] sm:text-xs md:text-sm mt-0.5 sm:mt-1">
            {branch.address}
          </p>
        </div>
      </Popup>
    </Marker>
  );
}

function ClientOnlyMap({ branches, center, onMarkerClick }: ClientOnlyMapProps) {
  const [isMounted, setIsMounted] = useState(false);
  const [icon, setIcon] = useState<L.Icon | null>(null);
  
  useEffect(() => {
    setIsMounted(true);
    fixLeafletIconUrls();
    
    // Create a custom icon that's balanced but still works on iOS
    const customIcon = new L.Icon({
      iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png',
      shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
      iconSize: [18, 30],     // smaller size for better appearance
      iconAnchor: [9, 30],    // point of the icon which will correspond to marker's location
      popupAnchor: [0, -30],  // point from which the popup should open relative to the iconAnchor
      shadowSize: [30, 30]
    });
    
    setIcon(customIcon);
  }, []);

  if (!isMounted) {
    return (
      <div className="h-full w-full bg-white/5 flex items-center justify-center">
        <div className="w-10 h-10 border-3 border-[#C7962D]/20 border-t-[#C7962D] rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="h-full w-full" suppressHydrationWarning>
      <MapContainer
        center={center}
        zoom={13}
        style={{ height: '100%', width: '100%', borderRadius: 'inherit' }}
        scrollWheelZoom={false}
        className="h-full w-full"
        zoomControl={false}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {branches.map((branch, index) => (
          <MarkerComponent
            key={index}
            branch={branch}
            icon={icon || new L.Icon.Default()}
            onMarkerClick={onMarkerClick}
          />
        ))}
      </MapContainer>
    </div>
  );
}

export default ClientOnlyMap; 