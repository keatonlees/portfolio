"use client";

import Hero from "@/components/Hero";
import { useRevealer } from "@/hooks/useRevealer";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

// /* eslint-disable @next/next/no-img-element */
export default function Home() {
  useRevealer();

  const pathname = usePathname();
  useEffect(() => {
    window.scroll(0, 0);
  }, [pathname]);

  return (
    <>
      <div className="revealer"></div>
      <div>
        <Hero />

        <div className="h-[200vh]"></div>
      </div>
    </>
  );
}
