"use client";

import gsap from "gsap";
import { usePathname } from "next/navigation";
import { useLayoutEffect, useRef, useState } from "react";

interface TransitionOverlayProps {
  children: (props: { transitionDone: boolean }) => React.ReactNode;
  onTransitionComplete?: () => void;
  isNavigation: boolean;
}

export default function TransitionOverlay({
  children,
  onTransitionComplete,
  isNavigation,
}: TransitionOverlayProps) {
  const pathname = usePathname();
  const overlayRef = useRef(null);
  const [animating, setAnimating] = useState(isNavigation);

  useLayoutEffect(() => {
    if (!isNavigation) return; // ⛔ DO NOT RUN TRANSITION ON INITIAL LOAD

    const overlay = overlayRef.current;

    gsap.fromTo(
      overlay,
      { y: "100%" },
      {
        y: "0%",
        duration: 0.6,
        ease: "power3.inOut",
        onComplete: () => {
          gsap.to(overlay, {
            y: "-100%",
            duration: 0.6,
            ease: "power3.inOut",
            onComplete: () => {
              setAnimating(false);
              onTransitionComplete?.();
            },
          });
        },
      }
    );
  }, [pathname, isNavigation, onTransitionComplete]);

  return (
    <>
      <div
        ref={overlayRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          background: "#000",
          zIndex: 9999,
          pointerEvents: "none",
          transform: "translateY(100%)",
        }}
      ></div>

      {children({ transitionDone: !animating })}
    </>
  );
}
