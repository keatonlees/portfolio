"use client";

import ButtonBar from "@/components/projects/ButtonBar";
import ProjectCard from "@/components/projects/ProjectCard";
import Summary from "@/components/projects/Summary";
import { Projects } from "@/data/Projects";
import gsap from "gsap";
import React, { useEffect } from "react";

export default function OctoDo() {
  const p = Projects.find((proj) => proj.id === "octodo");
  const i = Projects.findIndex((proj) => proj.id === "octodo");

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
          <ButtonBar p={p} />
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
