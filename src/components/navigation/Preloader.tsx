"use client";

import gsap from "gsap";
import { useEffect, useLayoutEffect, useRef, useState } from "react";

interface PreloaderProps {
  onComplete?: () => void;
  count?: number;
}

const imagesToPreload = [
  // HeroHome.tsx
  "/images/headshot_nobg.png",
  // HeroAbout.tsx
  "/images/headshot_2.jpg",
  "/images/headshot_grad.jpg",
  "/images/taekwondo.jpg",
  "/images/track.jpg",
  "/images/malaysia.jpg",
  "/images/taiwan.jpg",
  "/images/volleyball.jpg",
  "/images/bbt.jpg",
  "/images/film.jpg",
  "/images/victoria.jpg",
  "/images/lees.jpg",
  "/images/market.jpg",
];

export default function Preloader({ onComplete, count = 7 }: PreloaderProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<GSAPTimeline>(null);

  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const loadImages = () => {
      const imagePromises = imagesToPreload.map((url) => {
        const img = new Image();
        img.src = url;
        if (img.complete) {
          setProgress((prev) => prev + 1);
          return Promise.resolve();
        }
        return new Promise((resolve) => {
          img.onload = () => {
            setProgress((prev) => prev + 1);
            resolve(null);
          };
          img.onerror = () => {
            setProgress((prev) => prev + 1);
            resolve(null);
          };
        });
      });

      Promise.all(imagePromises).then(() => {
        setTimeout(() => {
          setIsLoading(false);
        }, 1500);
      });
    };

    loadImages();
  }, []);

  useLayoutEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const strips = gsap.utils.toArray<HTMLElement>(".strip", wrapper);
    if (strips.length === 0) return;

    gsap.set(strips, {
      scaleX: 0,
      transformOrigin: "left center",
      willChange: "transform",
    });

    const tl = gsap.timeline({ defaults: { ease: "power3.inOut" } });
    timelineRef.current = tl;

    tl.to(strips, { scaleX: 1, duration: 0.8, stagger: 0.1 });
    tl.addPause();
    tl.to(strips, {
      scaleX: 0,
      transformOrigin: "right center",
      duration: 0.8,
      stagger: 0.1,
    });
    tl.to(wrapper, { opacity: 0, duration: 0.1, onComplete });
    tl.play();

    return () => {
      tl.kill();
    };
  }, [onComplete]);

  useEffect(() => {
    if (!isLoading && timelineRef.current) {
      timelineRef.current.play(); // resume from pause to collapse
    }
  }, [isLoading]);

  return (
    <div ref={wrapperRef} className="w-full h-dvh flex flex-col">
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className="strip flex-1 -mt-0.5 w-full bg-secondary origin-left scale-x-0 flex justify-center items-center"
        >
          {i === Math.floor(count / 2) && (
            <h1 className="text-9xl">
              {Math.round((progress / imagesToPreload.length) * 100)}
            </h1>
          )}
        </div>
      ))}
    </div>
  );
}
