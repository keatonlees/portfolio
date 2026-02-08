"use client";

import gsap from "gsap";
import { usePathname, useRouter } from "next/navigation";
import {
  createContext,
  useCallback,
  useLayoutEffect,
  useRef,
  type ReactNode,
} from "react";

type TransitionContextValue = {
  navigateWithTransition: (href: string) => void;
};

export const TransitionContext = createContext<TransitionContextValue | null>(
  null,
);

const DURATION = 0.6;

export function TransitionProvider({ children }: { children: ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const overlayRef = useRef<HTMLDivElement>(null);
  const justNavigatedRef = useRef(false);

  const navigateWithTransition = useCallback(
    (href: string) => {
      const overlay = overlayRef.current;
      if (!overlay || href === pathname) return;

      justNavigatedRef.current = true;
      gsap.to(overlay, {
        opacity: 1,
        duration: DURATION,
        ease: "power2.inOut",
        onComplete: () => {
          router.push(href);
        },
      });
    },
    [router, pathname],
  );

  useLayoutEffect(() => {
    if (!justNavigatedRef.current) return;

    const overlay = overlayRef.current;
    if (!overlay) return;

    justNavigatedRef.current = false;
    gsap.to(overlay, {
      opacity: 0,
      duration: DURATION,
      ease: "power2.inOut",
    });
  }, [pathname]);

  return (
    <TransitionContext.Provider value={{ navigateWithTransition }}>
      <div
        ref={overlayRef}
        aria-hidden
        style={{
          position: "fixed",
          inset: 0,
          background: "#252525",
          zIndex: 9999,
          pointerEvents: "none",
          opacity: 0,
        }}
      />
      {children}
    </TransitionContext.Provider>
  );
}
