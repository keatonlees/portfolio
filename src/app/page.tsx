"use client";

import Hero from "@/components/Hero";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

// /* eslint-disable @next/next/no-img-element */
export default function Home() {
  const pathname = usePathname();
  useEffect(() => {
    window.scroll(0, 0);
  }, [pathname]);

  return (
    <>
      <Hero />

      <div className="h-[200vh]"></div>
    </>
  );
}
