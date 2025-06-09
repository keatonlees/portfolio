"use client";

/* eslint-disable @next/next/no-img-element */
import { useRevealer } from "@/hooks/useRevealer";
import React from "react";

export default function About() {
  useRevealer();

  return (
    <>
      <div className="revealer"></div>

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
