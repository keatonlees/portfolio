"use client";

import PageTransition from "@/components/PageTransition";
/* eslint-disable @next/next/no-img-element */
import { usePageTransition } from "@/hooks/usePageTransition";
import React from "react";

export default function About() {
  usePageTransition();

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
