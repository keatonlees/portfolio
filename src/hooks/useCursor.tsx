"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { useIsMobile } from "./useIsMobile";

type CursorContextType = {
  setCursorComponent: (component: React.ReactNode) => void;
};

const CursorContext = createContext<CursorContextType | undefined>(undefined);

export const useCursor = () => {
  const context = useContext(CursorContext);
  if (!context)
    throw new Error("useCursor must be used within a CursorProvider");
  return context;
};

export const CursorProvider = ({ children }: { children: React.ReactNode }) => {
  const isMobile = useIsMobile();

  const [cursorComponent, setCursorComponent] =
    useState<React.ReactNode | null>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setTimeout(() => {
        setPosition({ x: e.clientX, y: e.clientY });
      }, 50);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <CursorContext.Provider value={{ setCursorComponent }}>
      {children}
      <div
        style={{
          position: "fixed",
          left: position.x,
          top: position.y,
          pointerEvents: "none",
          transform: "translate(-50%, -50%)",
          zIndex: 9999,
        }}
      >
        {isMobile ? null : cursorComponent}
      </div>
    </CursorContext.Provider>
  );
};
