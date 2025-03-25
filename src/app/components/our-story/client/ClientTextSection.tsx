"use client";
import { ReactNode, memo } from "react";

function ClientTextSection({ children }: { children: ReactNode }) {
  return (
    <div className="space-y-6">
      <div className="bg-white/5 p-4 rounded-xl border border-white/10">
        <p className="text-base leading-relaxed text-white/80 font-quicksand">
          <span className="text-[#FFD700] font-semibold">Irani Chiya</span> began its remarkable journey in <span className="text-[#FFD700] font-semibold">2022</span>,
          driven by a vision to revolutionize Nepal's tea culture. Our story is one of passion, innovation, and excellence.
        </p>
      </div>

      {children}
    </div>
  );
}

export default memo(ClientTextSection); 