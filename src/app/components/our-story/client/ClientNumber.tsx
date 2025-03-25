"use client";
import { memo, useMemo } from "react";

function ClientNumber({ n }: { n: string }) {
  // Parse number only once and memoize it
  const targetNumber = useMemo(() => parseInt(n.replace(/\D/g, ""), 10), [n]);

  return (
    <span className="inline-block">
      {targetNumber}
    </span>
  );
}

export default memo(ClientNumber); 