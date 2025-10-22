"use client";

// blurb
// work experience
// skills
// education

import Education from "@/components/about/Educations";
import Experience from "@/components/about/Experience";
import HeroAbout from "@/components/about/HeroAbout";
import Skills from "@/components/about/Skills";
import Footer from "@/components/base/Footer";
import ScrollProgress from "@/components/base/ScrollProgress";
import PermanentCursor from "@/components/cursors/PermanentCursor";
import PageTransition from "@/components/navigation/PageTransition";
import { useCursor } from "@/hooks/useCursor";
import { usePageTransition } from "@/hooks/usePageTransition";
import { useScroll } from "motion/react";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";

export default function About() {
  usePageTransition();
  const pathname = usePathname();
  const { setCursorComponent } = useCursor();
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    window.scroll(0, 0);
  }, [pathname]);

  useEffect(() => {
    setCursorComponent(<PermanentCursor />);
    return () => setCursorComponent(null);
  }, [setCursorComponent]);

  return (
    <>
      <PageTransition />
      <ScrollProgress progress={scrollYProgress} />

      <HeroAbout />
      <Experience />
      <Skills />
      <Education />

      <Footer />
    </>
  );
}
