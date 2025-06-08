"use client";

import Hero from "@/components/Hero";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { useEffect } from "react";

// /* eslint-disable @next/next/no-img-element */
export default function Home() {
  const pathname = usePathname();
  useEffect(() => {
    window.scroll(0, 0);
  }, [pathname]);

  // useEffect(() => {
  //   gsap.registerPlugin(ScrollTrigger);

  //   gsap.to("#home-text", {
  //     scrollTrigger: {
  //       trigger: "#home-text",
  //       start: "top top",
  //       end: "bottom top",
  //       scrub: 1,
  //       markers: true, // Remove this in production
  //     },
  //     scale: 0.5,
  //     y: -100,
  //     opacity: 0.5,
  //   });
  // }, []);

  return (
    <>
      <Hero />

      <div className="h-[200vh]"></div>
    </>
    // <div className="w-full h-[200vh] flex flex-col justify-center items-center gap-2">
    //   <h1 id="home-text" className="text-8xl font-title font-bold sticky">
    //     Home
    //   </h1>
    //   {/* <div className="flex">
    //     <img src="/images/headshot_2.png" alt="home_img" className="w-96" />
    //     <img src="/images/headshot.png" alt="home_img" className="w-96" />
    //   </div> */}
    // </div>
  );
}
