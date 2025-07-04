"use client";

// daysleftof
// souvenr
// react-bento-box
// getwrapped
// octodo

// blindboxr
// starters

// footer

/* eslint-disable @next/next/no-img-element */
import PageTransition from "@/components/navigation/PageTransition";
import { usePageTransition } from "@/hooks/usePageTransition";
import { usePreviousRoute } from "@/hooks/usePreviousRoute";
import gsap from "gsap";
import { Flip } from "gsap/Flip";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

import ProjectCard from "@/components/projects/ProjectCard";
import { Projects as Data } from "@/data/Projects";
import "./projects.css";

gsap.registerPlugin(Flip);

export default function Projects() {
  const router = useRouter();
  const prevPath = usePreviousRoute();

  const [showTransition, setShowTransition] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const isFromNonNestedRoute =
      !prevPath ||
      (!prevPath.startsWith("/projects/") && prevPath !== "/projects");
    setShowTransition(isFromNonNestedRoute);
  }, [prevPath]);

  useEffect(() => {
    gsap.to("#page", {
      opacity: 1,
      duration: 0.5,
    });
  }, []);

  const handleHover = (
    e: React.MouseEvent<HTMLDivElement>,
    isEnter: boolean
  ) => {
    if (!isAnimating) {
      const card = e.currentTarget;
      const bg = card.querySelector("#bg");

      gsap.to(bg, {
        y: isEnter ? 0 : "100%",
        duration: 0.3,
      });
    }
  };

  const handleProject = (e: React.MouseEvent<HTMLDivElement>, id: string) => {
    setIsAnimating(true);

    // get elements
    const card = e.currentTarget;
    const group = document.querySelector(`#${id}-group`);
    const numbering = document.querySelector(`#${id}-numbering`);
    const content = document.querySelector(`#${id}-content`);
    const glance = document.querySelector(`#${id}-glance`);

    const state = Flip.getState(
      `#${card.id}, #${id}-group, #${id}-numbering, #${id}-content, #${id}-glance`
    );

    // create layout clone
    const placeholder = card.cloneNode(true) as HTMLDivElement;
    placeholder.style.opacity = "0";
    card.parentNode?.insertBefore(placeholder, card.nextSibling);

    card.classList.remove("projectCard-initial");
    card.classList.add("projectCard-final");

    group?.classList.toggle("reorder");
    numbering?.classList.toggle("numbering");
    numbering?.classList.toggle("numbering-space");
    content?.classList.toggle("content");
    glance?.classList.toggle("glance");
    glance?.classList.toggle("glance-space");
    setTimeout(() => {
      glance?.classList.toggle("glance-align");
    }, 325);

    gsap.to(".projectCard-initial", {
      opacity: 0,
      duration: 0.5,
      ease: "power2.inOut",
    });

    Flip.from(state, {
      absolute: true,
      duration: 1,
      ease: "power2.inOut",
      onComplete: () => {
        router.push(`/projects/${id}`);
      },
    });
  };

  usePageTransition(showTransition);
  return (
    <>
      {showTransition && <PageTransition />}

      <div
        id="page"
        className="opacity-0 w-full flex flex-col justify-center items-center gap-2 pt-20"
      >
        {Data.map((p, i) => (
          <div
            key={i}
            onClick={(e) => handleProject(e, p.id)}
            onMouseEnter={(e) => handleHover(e, true)}
            onMouseLeave={(e) => handleHover(e, false)}
            id={`${p.id}-card`}
            className="projectCard-initial border-1 border-neutral-500 rounded flex cursor-pointer"
          >
            <ProjectCard p={p} i={i} />

            <div
              id="bg"
              className="absolute w-full h-full top-0 left-0 z-[-1]"
              style={{
                background: p.theme,
                transform: "translateY(100%)",
              }}
            />
          </div>
        ))}
      </div>
    </>
  );
}
