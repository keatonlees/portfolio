/* eslint-disable @next/next/no-img-element */
import { sanitizeName } from "@/lib/Helpers";
import React from "react";

function Display({ skills }: { skills: string[] }) {
  return (
    <div className="flex gap-6 flex-wrap">
      {skills.map((s, i) => (
        <div key={i} className="flex items-center gap-1">
          <img
            src={`/icons/${sanitizeName(s)}.png`}
            alt="logo"
            className="w-8"
          />
          <h1 className="mt-1">{s}</h1>
        </div>
      ))}
    </div>
  );
}

export default function Skills() {
  const frontendSkills: string[] = [
    "TypeScript",
    "JavaScript",
    "React",
    "React Native",
    "Next.js",
    "Three.js",
    "Redux",
    "HTML5",
    "CSS3",
    "SASS",
    "TailwindCSS",
    "GSAP",
    "Framer Motion",
  ];

  const backendSkills: string[] = [
    "Python",
    "Node.js",
    "C#",
    ".NET",
    "Express.js",
    "Flask",
    "Django",
    "PostgresSQL",
    "NoSQL",
    "MongoDB",
    "Supabase",
    "Firebase",
  ];

  const otherSkills: string[] = [
    "AWS",
    "DynamoDB",
    "S3",
    "Lambda",
    "Google Cloud",
    "Docker",
    "Git",
    "GitHub",
    "Figma",
    "Jira",
  ];

  return (
    <div className="flex justify-center">
      <div className="w-page flex flex-col md:flex-row gap-8 my-12 md:my-24">
        <div className="flex-1 md:sticky top-24 self-start font-title text-4xl md:text-6xl text-shadow text-right md:px-8 font-bold">
          Skills
        </div>

        <div className="flex-1 flex flex-col gap-16">
          <Display skills={frontendSkills} />
          <Display skills={backendSkills} />
          <Display skills={otherSkills} />
        </div>
      </div>
    </div>
  );
}
