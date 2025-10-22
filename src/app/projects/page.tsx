"use client";

// daysleftof
// souvenr
// react-bento-box
// getwrapped
// octodo

// blindboxr
// starters

import Footer from "@/components/base/Footer";
import ScrollProgress from "@/components/base/ScrollProgress";
import PermanentCursor from "@/components/cursors/PermanentCursor";
import PageTransition from "@/components/navigation/PageTransition";
import CardsLayout from "@/components/projects/CardsLayout";
import { useCursor } from "@/hooks/useCursor";
import { usePageTransition } from "@/hooks/usePageTransition";
import { usePreviousRoute } from "@/hooks/usePreviousRoute";
import { useScroll } from "motion/react";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function Projects() {
  const pathname = usePathname();
  const prevPath = usePreviousRoute();
  const [showTransition, setShowTransition] = useState(false);
  const { setCursorComponent } = useCursor();
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    window.scroll(0, 0);
  }, [pathname]);

  useEffect(() => {
    const isFromNonNestedRoute =
      !prevPath ||
      (!prevPath.startsWith("/projects/") && prevPath !== "/projects");
    setShowTransition(isFromNonNestedRoute);
  }, [prevPath]);

  useEffect(() => {
    setCursorComponent(<PermanentCursor />);
    return () => setCursorComponent(null);
  }, [setCursorComponent]);

  usePageTransition(showTransition);
  return (
    <>
      {showTransition && <PageTransition />}
      <ScrollProgress progress={scrollYProgress} />

      <CardsLayout />
      <Footer />
    </>
  );
}
