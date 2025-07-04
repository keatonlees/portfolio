"use client";

import { useEffect, useState } from "react";
import LoadingScreen from "./LoadingScreen";

const imagesToPreload = [
  "/images/headshot.png",
  "/images/headshot_2.png",
  "/images/headshot_grad.jpg",
  "/images/ab_taekwondo.jpg",
  "/images/ab_track.jpg",
];

export default function ImagePreloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [animationComplete, setAnimationComplete] = useState(false);
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
        setIsLoading(false);
      });
    };

    loadImages();
  }, []);

  return animationComplete ? null : (
    <LoadingScreen
      isLoading={isLoading}
      setAnimationComplete={setAnimationComplete}
      progress={progress}
      total={imagesToPreload.length}
    />
  );
}
