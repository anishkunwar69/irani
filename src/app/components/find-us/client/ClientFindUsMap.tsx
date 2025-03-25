"use client";
import dynamic from 'next/dynamic';
import { BranchType } from '../types';
import { memo } from 'react';
import type { LatLngExpression } from "leaflet";

interface ClientFindUsMapProps {
  branches: BranchType[];
  center: LatLngExpression;
  onMarkerClick: (branch: BranchType) => void;
}

const ClientOnlyMap = dynamic(() => import('../../ClientOnlyMap').then(mod => {
  const WrappedMap = (props: any) => {
    const { branches, center, onMarkerClick, ...rest } = props;
    return <mod.default 
      branches={branches} 
      center={center} 
      onMarkerClick={onMarkerClick} 
      {...rest} 
    />;
  };
  return { default: WrappedMap };
}), { 
  ssr: false,
  loading: () => (
    <div className="h-full w-full bg-white/5 flex items-center justify-center">
      <div className="w-10 h-10 border-3 border-[#C7962D]/20 border-t-[#C7962D] rounded-full animate-spin"></div>
    </div>
  ) 
});

function ClientFindUsMap({ branches, center, onMarkerClick }: ClientFindUsMapProps) {
  return (
    <div className="h-full w-full">
      <ClientOnlyMap 
        branches={branches} 
        center={center} 
        onMarkerClick={onMarkerClick} 
      />
    </div>
  );
}

export default memo(ClientFindUsMap); 