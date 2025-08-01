"use client";

// blurb
// work experience
// skills
// education

import HeroAbout from "@/components/about/HeroAbout";
import PermanentCursor from "@/components/cursors/PermanentCursor";
import PageTransition from "@/components/navigation/PageTransition";
import { useCursor } from "@/hooks/useCursor";
import { usePageTransition } from "@/hooks/usePageTransition";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";

export default function About() {
  const pathname = usePathname();
  const { setCursorComponent } = useCursor();
  usePageTransition();

  useEffect(() => {
    window.scroll(0, 0);
  }, [pathname]);

  // Set a permanent cursor component that always follows the mouse
  useEffect(() => {
    setCursorComponent(<PermanentCursor />);
    return () => setCursorComponent(null);
  }, [setCursorComponent]);

  return (
    <>
      <PageTransition />

      <HeroAbout />

      <div className="relative h-[200vh] z-2 bg-base-100 p-8 space-y-8"></div>
    </>
  );
}
