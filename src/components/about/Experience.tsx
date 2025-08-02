/* eslint-disable @next/next/no-img-element */
import { Experiences as Data } from "@/data/Experiences";
import React from "react";

export default function Experience() {
  return (
    <div className="flex justify-center">
      <div className="w-page flex flex-col md:flex-row gap-8 my-12 md:my-24">
        <div className="flex-1 md:sticky top-24 self-start font-title text-4xl md:text-6xl text-shadow text-right md:px-8 font-bold">
          Experience
        </div>

        <div className="flex-1 flex flex-col gap-16">
          {Data.map((e, i) => (
            <div key={i} className="flex flex-col gap-4">
              <img
                src={`/logos/${e.logo}`}
                alt="company-logo"
                className="w-12 h-12"
              />

              <div>
                <h1 className="text-xl font-bold">
                  {e.company} - {e.title}
                </h1>
                <h1 className="text-xl font-bold">{e.timeframe}</h1>
              </div>

              {e.points.map((p, j) => (
                <p key={j} className="text-gray-300">
                  {p}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
