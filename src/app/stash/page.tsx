"use client";

// random interactions
// travel
// photos

/* eslint-disable @next/next/no-img-element */
import PageTransition from "@/components/navigation/PageTransition";
import { usePageTransition } from "@/hooks/usePageTransition";
import React from "react";

export default function About() {
  usePageTransition();

  return (
    <>
      <PageTransition />

      <div className="w-full h-screen flex flex-col justify-center items-center gap-2">
        <h1 className="text-8xl font-title">Fun</h1>
        <div className="flex">
          <img src="/images/headshot_2.jpg" alt="home_img" className="w-96" />
        </div>
      </div>
    </>
  );
}
