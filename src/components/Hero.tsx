// import gsap from "gsap";
// import { ScrollToPlugin } from "gsap/ScrollToPlugin";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import React, { useEffect } from "react";

export default function Hero() {
  // gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

  // useEffect(() => {
  //   gsap.to("#hero-title", {
  //     scrollTrigger: {
  //       trigger: "#hero-title",
  //       pin: true,
  //       start: "top 0px",
  //       end: "+=50%",
  //       scrub: 1,
  //       markers: true, // Remove this in production
  //     },
  //     scale: 0.1,
  //     x: "-600px", // distance from left
  //     y: "50px", // distance from top
  //     ease: "none",
  //   });
  // }, []);

  return (
    <div className="bg-amber-500 w-full h-screen relative">
      {/* <h1 id="hero-title" className="font-title font-bold text-[12vw]">
        Keaton Lees
      </h1> */}
    </div>
  );
}
