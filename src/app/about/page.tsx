"use client";

// blurb
// work experience
// skills
// education

/* eslint-disable @next/next/no-img-element */
import PageTransition from "@/components/navigation/PageTransition";
import { usePageTransition } from "@/hooks/usePageTransition";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";

export default function About() {
  const pathname = usePathname();
  usePageTransition();

  useEffect(() => {
    window.scroll(0, 0);
  }, [pathname]);

  return (
    <>
      <PageTransition />

      <div className="w-full h-screen flex flex-col justify-center items-center gap-2">
        <h1 className="text-8xl font-title">About</h1>
        <div className="flex">
          <img
            src="/images/headshot_grad.jpg"
            alt="home_img"
            className="w-96"
          />
        </div>
      </div>
    </>
  );
}
