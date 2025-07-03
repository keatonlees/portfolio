"use client";

import gsap from "gsap";
import { useRouter } from "next/navigation";
import React from "react";

export default function Souvenr() {
  const router = useRouter();

  const handleBack = () => {
    gsap.to("#page", {
      opacity: 0,
      duration: 0.5,
      onComplete: () => {
        router.push("/projects?p=true");
      },
    });
  };

  return (
    <>
      <div id="page" className="w-full flex">
        <div
          className="sticky top-0 w-1/2 h-screen pt-20 px-8 projectCardFinal"
          style={{ background: "linear-gradient(135deg, #1dd1a1, #d3d3d3)" }}
        >
          <button
            onClick={handleBack}
            className="text-2xl font-title text-shadow hover:underline"
          >
            ← Back
          </button>
          <h1 className="text-8xl font-title text-shadow">Souvenr</h1>
        </div>
        <div className="w-1/2 h-[200vh] pt-20 px-8">
          <h1 className="text-8xl">Content</h1>
          <h1 className="text-8xl">Content</h1>
          <h1 className="text-8xl">Content</h1>
          <h1 className="text-8xl">Content</h1>
          <h1 className="text-8xl">Content</h1>
        </div>
      </div>
    </>
  );
}
