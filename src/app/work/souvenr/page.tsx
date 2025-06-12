"use client";

import gsap from "gsap";
import { Flip } from "gsap/Flip";
import { useRouter } from "next/navigation";
import React from "react";

gsap.registerPlugin(Flip);

export default function Souvenr() {
  const router = useRouter();

  const handleBack = () => {
    router.push("/work?p=true");
  };

  return (
    <>
      <div className="w-full flex">
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
