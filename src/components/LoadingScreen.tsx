import gsap from "gsap";
import React, { useEffect } from "react";

interface LoadingScreenProps {
  isLoading: boolean;
  setAnimationComplete: (animationComplete: boolean) => void;
  progress: number;
  total: number;
}

export default function LoadingScreen({
  isLoading,
  setAnimationComplete,
  progress,
  total,
}: LoadingScreenProps) {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    gsap.to("#loading-mask", {
      width: `${(progress / total) * 100}%`,
      duration: 0.5,
    });

    if (!isLoading) {
      const tl = gsap.timeline();

      tl.to(
        "#loading-mask-container",
        {
          opacity: 0,
          duration: 0.5,
        },
        0.75
      )
        .to(
          "#loading-middle",
          {
            x: "100%",
            duration: 0.5,
            ease: "power2.inOut",
          },
          1.25
        )
        .to(
          "#loading-top",
          {
            y: "-110%",
            duration: 0.75,
            ease: "power2.inOut",
          },
          1.75
        )
        .to(
          "#loading-bottom",
          {
            y: "110%",
            duration: 0.75,
            ease: "power2.inOut",
            onComplete: () => {
              setAnimationComplete(true);
              document.body.style.overflow = "auto";
            },
          },
          1.75
        );
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [progress, total, isLoading, setAnimationComplete]);

  return (
    <div
      id="loading-container"
      className="fixed inset-0 w-[100vw] h-[100vh] z-[9999] overflow-hidden"
      style={{
        width: "100vw",
        height: "100vh",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      }}
    >
      <div id="loading-top" className="w-full h-[48%] bg-secondary"></div>

      <div
        id="loading-middle"
        className="h-[4%] w-full bg-secondary flex items-end justify-center"
      >
        <div
          id="loading-mask-container"
          className="relative text-6xl font-title font-bold text-black -mb-3"
        >
          <h1 className="opacity-25">LOADING...</h1>
          <h1
            id="loading-mask"
            className="absolute top-0 left-0 bg-white w-0"
            style={{
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            LOADING...
          </h1>
        </div>
      </div>

      <div id="loading-bottom" className="w-full h-[48%] bg-secondary"></div>
    </div>
  );
}
