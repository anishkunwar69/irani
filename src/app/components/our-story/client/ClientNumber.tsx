"use client";

import { memo } from "react";

interface ClientNumberProps {
  value: string;
  className?: string;
}

const ClientNumber = ({ value, className = "" }: ClientNumberProps) => {
  // Extract the numeric part and any suffix
  const numericPart = value.replace(/[^0-9]/g, "");
  const suffix = value.replace(/[0-9]/g, "");

  return (
    <span className={className}>
      {numericPart}
      {suffix}
    </span>
  );
};

export default memo(ClientNumber); 