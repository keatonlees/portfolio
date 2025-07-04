"use client";

import Chip from "@/components/base/Chip";
import { Projects } from "@/data/Projects";
import gsap from "gsap";
import { useRouter } from "next/navigation";
import React from "react";

export default function Souvenr() {
  const router = useRouter();

  const p = Projects.find((proj) => proj.id === "souvenr");
  if (!p) return <div>Project not found</div>;
  const i = Projects.findIndex((proj) => proj.id === "souvenr");

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
          className="sticky top-0 w-1/2 h-screen projectCardFinal"
          style={{ background: p.theme }}
        >
          <button
            className="absolute pl-8 top-[80px] text-2xl z-10"
            onClick={handleBack}
          >
            Back
          </button>

          <div className="group reorder px-8">
            <div className="numbering-space flex items-center">
              <h1 className="text-9xl font-bold mt-6">
                {i + 1 > 9 ? i + 1 : `0${i + 1}`}
              </h1>
            </div>
            <div className="flex flex-col justify-center">
              <h1 className="font-title font-bold text-shadow text-5xl">
                {p.name}
              </h1>
              <div className="flex gap-1">
                {p.tools.map((tool, i) => (
                  <Chip key={i}>{tool}</Chip>
                ))}
              </div>
            </div>
            <div className="flex items-center">
              <h1>{p.glance}</h1>
            </div>
          </div>
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
