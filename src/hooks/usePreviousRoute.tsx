"use client";

import { usePathname } from "next/navigation";
import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

const PreviousRouteContext = createContext<string | null>(null);

export const PreviousRouteProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const pathname = usePathname();
  const prevPathRef = useRef<string | null>(null);
  const [prevPath, setPrevPath] = useState<string | null>(null);

  useEffect(() => {
    setPrevPath(prevPathRef.current);
    prevPathRef.current = pathname;
  }, [pathname]);

  return (
    <PreviousRouteContext.Provider value={prevPath}>
      {children}
    </PreviousRouteContext.Provider>
  );
};

export const usePreviousRoute = () => useContext(PreviousRouteContext);
