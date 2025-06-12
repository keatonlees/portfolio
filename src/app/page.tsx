"use client";

import Hero from "@/components/Hero";
import PageTransition from "@/components/PageTransition";
import { usePageTransition } from "@/hooks/usePageTransition";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

// /* eslint-disable @next/next/no-img-element */
export default function Home() {
  usePageTransition();
  const pathname = usePathname();

  useEffect(() => {
    window.scroll(0, 0);
  }, [pathname]);

  return (
    <>
      <PageTransition />

      <div>
        <Hero />

        <div className="h-[200vh]"></div>
      </div>
    </>
  );
}
