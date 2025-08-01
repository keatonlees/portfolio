"use client";

/* eslint-disable @next/next/no-img-element */
// import { MapPin } from "lucide-react";
// import Socials from "../base/Socials";
// import CursorCircleText from "../cursors/CursorCircleText";
import Background from "./Background";

export default function HeroHome() {
  return (
    <div className="relative w-screen h-screen flex justify-center overflow-hidden">
      <Background />

      <div className="relative w-[1600px] h-full bg-accent">
        <img
          src={"/images/headshot_nobg.png"}
          alt="hero-img"
          className="absolute bottom-0 h-[70%] md:h-[90%] w-auto object-contain left-1/2 -translate-x-1/2 ml-0.5 md:ml-86"
        />
      </div>

      {/* <div className="absolute flex justify-between px-4 md:w-page top-[50vh]">
        <div>
          <h1 className="text-6xl font-bold">Full Stack Engineer</h1>
          <h1 className="text-2xl max-w-[25vw]">
            💻Developer by day, 🏐Volleyball player by night, 🍣Foodie all the
            time
          </h1>
        </div>
        <Socials />
      </div> */}

      {/* <div className="absolute flex justify-between items-end w-full px-32 bottom-8">
        <div className="flex gap-1">
          <MapPin />
          <h1 className="text-2xl">Vancouver, Canada</h1>
        </div>
        <div>
          <CursorCircleText />
        </div>
      </div> */}
    </div>
  );
}
