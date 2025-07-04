"use client";

import ProjectCard from "@/components/projects/ProjectCard";
import Summary from "@/components/projects/Summary";
import { Projects } from "@/data/Projects";
import gsap from "gsap";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { handleBack } from "../actions";

export default function Jarvis() {
  const router = useRouter();

  const p = Projects.find((proj) => proj.id === "jarvis");
  const i = Projects.findIndex((proj) => proj.id === "jarvis");

  useEffect(() => {
    gsap.to(".fade", {
      opacity: 1,
      duration: 1,
    });
  }, []);

  if (!p || i === -1) return;
  return (
    <>
      <div id="page" className="w-full flex">
        <div
          className="sticky top-0 w-1/2 h-screen projectCardFinal"
          style={{ background: p.theme }}
        >
          <button
            className="fade opacity-0 btn rounded-full absolute ml-8 top-[70px] z-10"
            onClick={() => handleBack(router)}
          >
            Back to projects
          </button>

          <ProjectCard p={p} i={i} side />
          <Summary p={p} />
        </div>

        <div className="fade opacity-0 w-1/2 px-8 mt-[140px]">
          <h1 className="text-8xl">Content</h1>
          <h1 className="text-8xl">Content</h1>
          <h1 className="text-8xl">Content</h1>
          <h1 className="text-8xl">Content</h1>
          <h1 className="text-8xl">Content</h1>
          <h1 className="text-8xl">Content</h1>
          <h1 className="text-8xl">Content</h1>
          <h1 className="text-8xl">Content</h1>
          <h1 className="text-8xl">Content</h1>
          <h1 className="text-8xl">Content</h1>
          <h1 className="text-8xl">Content</h1>
          <h1 className="text-8xl">Content</h1>
          <h1 className="text-8xl">Content</h1>
          <h1 className="text-8xl">Content</h1>
          <h1 className="text-8xl">Content</h1>
          <h1 className="text-8xl">Content</h1>
          <h1 className="text-8xl">Content</h1>
          <h1 className="text-8xl">Content</h1>
          <h1 className="text-8xl">Content</h1>
          <h1 className="text-8xl">Content</h1>
          <h1 className="text-8xl">Content</h1>
          <h1 className="text-8xl">Content</h1>
          <h1 className="text-8xl">Content</h1>
          <h1 className="text-8xl">Content</h1>
          <h1 className="text-8xl">Content</h1>
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
