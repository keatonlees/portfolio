"use client";

/* eslint-disable @next/next/no-img-element */
import { useRevealer } from "@/hooks/useRevealer";
import gsap from "gsap";
import { Flip } from "gsap/Flip";
import { useRouter } from "next/navigation";
import React from "react";
import "./work.css";

export default function Work() {
  useRevealer();

  gsap.registerPlugin(Flip);

  const router = useRouter();

  const handleProject = (e: React.MouseEvent<HTMLDivElement>, path: string) => {
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

  return (
    <>
      <div className="revealer"></div>

      <div className="w-full flex flex-col justify-center items-center gap-2 pt-20">
        <h1 className="text-8xl font-title">Work</h1>
        <div
          id="card"
          className="projectCardInitial"
          style={{ background: "linear-gradient(135deg, #1dd1a1, #d3d3d3)" }}
          onClick={(e) => handleProject(e, "/work/souvenr")}
        >
          Souvenr
        </div>
        <div
          id="card"
          className="projectCardInitial"
          style={{ background: "linear-gradient(135deg, #d14545, #ff9933)" }}
          onClick={(e) => handleProject(e, "/work/souvenr")}
        >
          GetWrapped
        </div>
      </div>
    </>
  );
}
