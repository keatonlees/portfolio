"use client";

// blurb
// work experience
// skills
// education

import HeroAbout from "@/components/about/HeroAbout";
import PageTransition from "@/components/navigation/PageTransition";
import { usePageTransition } from "@/hooks/usePageTransition";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";

export default function About() {
  const pathname = usePathname();
  usePageTransition();

  useEffect(() => {
    window.scroll(0, 0);
  }, [pathname]);

  return (
    <>
      <PageTransition />

      <HeroAbout />
      <div className="relative h-[200vh] z-2 bg-base-100">TEST</div>
    </>
  );
}
