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
import gsap from "gsap";
import { Flip } from "gsap/Flip";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

import { Projects as Data } from "@/data/Projects";
import "./projects.css";

gsap.registerPlugin(Flip);

export default function Projects() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [showTransition, setShowTransition] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const previousPath = document.referrer;
    const isFromNonNestedRoute = !previousPath.includes("/projects/");
    const isFromProjectPage = searchParams.get("p") === "true";
    setShowTransition(isFromNonNestedRoute && !isFromProjectPage);
  }, [searchParams]);

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

  const handleProject = (
    e: React.MouseEvent<HTMLDivElement>,
    bg: string,
    path: string
  ) => {
    setIsAnimating(true);

    const card = e.currentTarget;

    const placeholder = card.cloneNode(true) as HTMLDivElement;
    placeholder.style.opacity = "0";
    card.parentNode?.insertBefore(placeholder, card.nextSibling);

    const state = Flip.getState(card);

    card.classList.remove("projectCardInitial");
    card.classList.add("projectCardFinal");

    gsap.to(".projectCardInitial", {
      opacity: 0,
      duration: 0.5,
      ease: "power2.inOut",
    });

    Flip.from(state, {
      duration: 1,
      ease: "power2.inOut",
      onComplete: () => {
        router.push(path);
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
            onClick={(e) => handleProject(e, p.theme, `/projects/${p.id}`)}
            onMouseEnter={(e) => handleHover(e, true)}
            onMouseLeave={(e) => handleHover(e, false)}
            className="projectCardInitial border-1 border-neutral-500 rounded p-4 flex items-center cursor-pointer"
          >
            <div className="z-2">
              <h1>0{i + 1}</h1>
              <h1>{p.name}</h1>
              <h1>{p.glance}</h1>
            </div>
            <div
              id="bg"
              className="absolute w-full h-full top-0 left-0"
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
