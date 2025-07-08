"use client";

import Footer from "@/components/base/Footer";
// hero
// project spotlight
// footer

import Hero from "@/components/home/Hero";
import PageTransition from "@/components/navigation/PageTransition";
import { usePageTransition } from "@/hooks/usePageTransition";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const pathname = usePathname();
  usePageTransition();

  useEffect(() => {
    window.scroll(0, 0);
  }, [pathname]);

  return (
    <>
      <PageTransition />

      <Hero />
      <div className="relative h-[200vh] z-2 bg-base-100">TEST</div>
      <Footer />
    </>
  );
}
