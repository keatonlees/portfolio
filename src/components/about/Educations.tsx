/* eslint-disable @next/next/no-img-element */
import { Education } from "@/lib/Types";
import React from "react";

export default function Educations() {
  const Data: Education[] = [
    {
      id: "toronto",
      school: "University of Toronto",
      degree: "Artifical Intelligence, Continuing Studies",
      timeframe: "2025 - 2026",
      courses: "Machine Learning, Deep learning, Intelligent Agents",
      logo: "toronto.png",
    },
    {
      id: "waterloo",
      school: "University of Waterloo",
      degree: "Systems Design Engineering (BASc), Computing Option",
      timeframe: "2019 - 2024",
      courses:
        "Algorithm Design and Analysis, Data Structures and Algorithms, Fundamentals of Computational Intelligence",
      logo: "waterloo.png",
    },
  ];

  return (
    <div className="flex justify-center">
      <div className="w-page flex flex-col md:flex-row gap-8 my-12 md:my-24">
        <div className="flex-1 md:sticky top-24 self-start font-title text-4xl md:text-6xl text-shadow text-right md:px-8 font-bold">
          Education
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
                  {e.school} - {e.degree}
                </h1>
                <h1 className="text-xl font-bold">{e.timeframe}</h1>
              </div>

              <p className="text-gray-300">Courses: {e.courses}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
