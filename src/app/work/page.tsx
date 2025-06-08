/* eslint-disable @next/next/no-img-element */
import React from "react";

export default function Work() {
  return (
    <div className="w-full h-[200vh] flex flex-col justify-center items-center gap-2">
      <h1 className="text-8xl font-title">Work</h1>
      <div className="flex">
        <img src="/images/ab_taekwondo.jpg" alt="home_img" className="h-96" />
        <img src="/images/ab_track.jpg" alt="home_img" className="h-96" />
      </div>
      <div className=""></div>
    </div>
  );
}
