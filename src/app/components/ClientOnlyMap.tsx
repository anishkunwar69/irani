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

function ClientOnlyMap({ branches, center, onMarkerClick }: ClientOnlyMapProps) {
  const [isMounted, setIsMounted] = useState(false);
  const [icon, setIcon] = useState<L.DivIcon | null>(null);
  
  useEffect(() => {
    setIsMounted(true);
    fixLeafletIconUrls();
    
    // Create custom marker icon
    const customIcon = L.divIcon({
      className: "custom-marker",
      html: `<div class="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 bg-red-600 rounded-full flex items-center justify-center shadow-lg transform -translate-x-1/2 -translate-y-1/2">
             <div class="w-2 h-2 xs:w-2.5 xs:h-2.5 sm:w-3 sm:h-3 bg-white rounded-full"></div>
           </div>`,
      iconSize: [20, 20],
      iconAnchor: [10, 10],
      popupAnchor: [0, -10],
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
          <Marker
            key={index}
            position={[branch.coordinates.lat, branch.coordinates.lng]}
            icon={icon || new L.Icon.Default()}
            eventHandlers={{
              click: () => onMarkerClick(branch),
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
        ))}
      </MapContainer>
    </div>
  );
}

export default ClientOnlyMap; 