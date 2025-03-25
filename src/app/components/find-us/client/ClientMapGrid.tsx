"use client";
import { motion } from "framer-motion";
import { useCallback, useState } from "react";
import ClientBranchDetails from "./ClientBranchDetails";
import ClientFindUsMap from "./ClientFindUsMap";
import { BranchType } from "../types";
import { memo } from "react";
interface ClientMapGridProps {
  branches: BranchType[];
  initialBranch: BranchType;
}

function ClientMapGrid({ branches, initialBranch }: ClientMapGridProps) {
  const [selectedBranch, setSelectedBranch] = useState<BranchType>(initialBranch);
  const center: [number, number] = [27.6873411, 85.3259783];

  const onMarkerClick = useCallback((branch: BranchType) => {
    setSelectedBranch(branch);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="grid grid-cols-1 min-[1171px]:grid-cols-2 gap-4 xs:gap-5 sm:gap-6 md:gap-8 lg:gap-10 items-stretch relative z-[1]"
    >
      <div 
        className="relative h-[250px] xs:h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px] xl:h-[600px] rounded-lg xs:rounded-xl sm:rounded-2xl overflow-hidden shadow-lg xs:shadow-xl sm:shadow-2xl border border-white/10"
        suppressHydrationWarning
      >
        <ClientFindUsMap 
          branches={branches} 
          center={center} 
          onMarkerClick={onMarkerClick} 
        />
      </div>

      <ClientBranchDetails selectedBranch={selectedBranch} />
    </motion.div>
  );
}

export default memo(ClientMapGrid); 