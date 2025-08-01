import { useCursor } from "@/hooks/useCursor";
import { gsap } from "gsap";
import React, { useRef } from "react";
import PermanentCursor from "./PermanentCursor";

type CursorWrapperProps = {
  children: React.ReactNode;
  cursorComponent: React.ReactNode;
  fallbackCursor?: React.ReactNode;
  animate?: boolean;
};

export default function CursorWrapper({
  children,
  cursorComponent,
  fallbackCursor,
  animate = true,
}: CursorWrapperProps) {
  const { setCursorComponent } = useCursor();
  const isHovering = useRef(false);

  const handleMouseEnter = () => {
    isHovering.current = true;
    if (animate) {
      // Animate out current cursor
      gsap.to(".cursor-element", {
        opacity: 0,
        duration: 0.2,
        ease: "power2.out",
        onComplete: () => {
          setCursorComponent(cursorComponent);
          // Animate in new cursor
          gsap.fromTo(
            ".cursor-element",
            { opacity: 0 },
            { opacity: 1, duration: 0.3, ease: "back.out(1.7)" }
          );
        },
      });
    } else {
      setCursorComponent(cursorComponent);
    }
  };

  const handleMouseLeave = () => {
    isHovering.current = false;
    if (animate) {
      // Animate out current cursor
      gsap.to(".cursor-element", {
        opacity: 0,
        duration: 0.2,
        ease: "power2.out",
        onComplete: () => {
          setCursorComponent(fallbackCursor || <PermanentCursor />);
          // Animate in fallback cursor
          gsap.fromTo(
            ".cursor-element",
            { opacity: 0 },
            { opacity: 1, duration: 0.3, ease: "back.out(1.7)" }
          );
        },
      });
    } else {
      setCursorComponent(fallbackCursor || <PermanentCursor />);
    }
  };

  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {children}
    </div>
  );
}
