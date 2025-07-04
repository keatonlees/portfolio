/* eslint-disable @next/next/no-img-element */
import { Github, Instagram, Linkedin, Mail, MapPin } from "lucide-react";
import CursorCircleText from "./cursors/CursorCircleText";

export default function Hero() {
  const ICON = 48;

  return (
    <div className="w-full h-screen bg-accent">
      <img
        src={"/images/headshot.png"}
        alt="hero-img"
        className="absolute h-[95%] bottom-0 left-[46vw] z-20"
      />

      <div className="absolute flex justify-between w-full px-32 top-[50vh]">
        <div>
          <h1 className="text-6xl font-bold">Full Stack Engineer</h1>
          <h1 className="text-2xl max-w-[25vw]">
            💻Developer by day, 🏐Volleyball player by night, 🍣Foodie all the
            time
          </h1>
        </div>
        <div className="flex gap-4">
          <Mail size={ICON} />
          <Linkedin size={ICON} />
          <Github size={ICON} />
          <Instagram size={ICON} />
        </div>
      </div>

      <div className="absolute flex justify-between items-end w-full px-32 bottom-8">
        <div className="flex gap-1">
          <MapPin />
          <h1 className="text-2xl">Vancouver, Canada</h1>
        </div>
        <div>
          <CursorCircleText />
        </div>
      </div>
    </div>
  );
}
