export interface BranchType {
  name: string;
  address: string;
  phone: string;
  hours: string;
  mapUrl: string;
  coordinates: {
    lat: number;
    lng: number;
  };
} 