/* eslint-disable @next/next/no-img-element */
"use client";

import ButtonBar from "@/components/projects/ButtonBar";
import ContentImage from "@/components/projects/ContentImage";
import ProjectCard from "@/components/projects/ProjectCard";
import Summary from "@/components/projects/Summary";
import WhatWhyHow from "@/components/projects/WhatWhyHow";
import { Projects } from "@/data/Projects";
import gsap from "gsap";
import React, { useEffect } from "react";

export default function Souvenr() {
  const p = Projects.find((proj) => proj.id === "souvenr");
  const i = Projects.findIndex((proj) => proj.id === "souvenr");

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

        <div className="w-1/2 px-8 mt-[100px] flex flex-col gap-12">
          <ContentImage name="souvenr_home.png" />

          <WhatWhyHow
            what="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                ullamcorper a leo ut efficitur. Curabitur elit erat, porttitor
                nec massa vitae, gravida consectetur elit. Cras scelerisque
                dolor ligula, et ultricies dolor tristique in. Proin vitae
                varius tellus, nec mattis arcu. Duis pretium, odio vel volutpat
                maximus, eros elit egestas nisi, sit amet aliquet augue libero
                id nunc."
            why="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                ullamcorper a leo ut efficitur. Curabitur elit erat, porttitor
                nec massa vitae, gravida consectetur elit. Cras scelerisque
                dolor ligula, et ultricies dolor tristique in. Proin vitae
                varius tellus, nec mattis arcu. Duis pretium, odio vel volutpat
                maximus, eros elit egestas nisi, sit amet aliquet augue libero
                id nunc."
            how="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                ullamcorper a leo ut efficitur. Curabitur elit erat, porttitor
                nec massa vitae, gravida consectetur elit. Cras scelerisque
                dolor ligula, et ultricies dolor tristique in. Proin vitae
                varius tellus, nec mattis arcu. Duis pretium, odio vel volutpat
                maximus, eros elit egestas nisi, sit amet aliquet augue libero
                id nunc."
          />

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
