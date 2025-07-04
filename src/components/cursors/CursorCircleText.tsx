"use client";

import { gsap } from "gsap";
import { ArrowDown } from "lucide-react";
import { useEffect, useRef } from "react";

export default function RotatingText({
  text = "• SCROLL DOWN",
  center = true,
}: {
  text?: string;
  center?: boolean;
}) {
  const circleRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (circleRef.current) {
      gsap.to(circleRef.current, {
        rotation: 360,
        transformOrigin: "50% 50%",
        duration: 10,
        repeat: -1,
        ease: "linear",
      });
    }
  }, []);

  return (
    <div className="relative w-[150px] h-[150px] flex items-center justify-center">
      <svg
        ref={circleRef}
        className="absolute w-full h-full"
        viewBox="0 0 100 100"
      >
        <defs>
          <path id="topPath" d="M15,50 A35,35 0 0,1 85,50" fill="none" />
          <path id="bottomPath" d="M85,50 A35,35 0 0,1 15,50" fill="none" />
        </defs>

        <text
          fill="currentColor"
          fontSize="10"
          fontWeight="700"
          fontFamily="Unbounded, sans-serif"
        >
          <textPath
            href="#topPath"
            startOffset="0%"
            textLength="106"
            lengthAdjust="spacing"
          >
            {text}
          </textPath>
        </text>

        <text
          fill="currentColor"
          fontSize="10"
          fontWeight="700"
          fontFamily="Unbounded, sans-serif"
        >
          <textPath
            href="#bottomPath"
            startOffset="0%"
            textLength="106"
            lengthAdjust="spacing"
          >
            {text}
          </textPath>
        </text>
      </svg>

      {center && (
        <div className="z-10">
          <ArrowDown size={36} />
        </div>
      )}
    </div>
  );
}
