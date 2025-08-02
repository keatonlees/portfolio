"use client";

import React from "react";
import Socials from "./Socials";

export default function Footer() {
  return (
    <div className="bg-accent px-4 md:px-32 py-8 flex justify-center items-center">
      <div className="flex-1">
        <h1 className="opacity-50">
          &copy;{new Date().getFullYear()} Keaton Lees
        </h1>
      </div>

      <div className="flex-1 flex justify-end md:justify-center">
        <Socials size="sm" />
      </div>

      <div className="flex-1 text-right hidden md:flex justify-end">
        <h1 className="opacity-50">
          Built with Next.js, GSAP, Three.js, and WebGL
        </h1>
      </div>
    </div>
  );
}
