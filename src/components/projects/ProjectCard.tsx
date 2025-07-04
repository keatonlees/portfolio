import { Project } from "@/lib/Types";
import React from "react";
import Chip from "../base/Chip";

interface ProjectCardProps {
  p: Project;
  i: number;
  side?: boolean;
}

export default function ProjectCard({ p, i, side = false }: ProjectCardProps) {
  return (
    <div id={`${p.id}-group`} className={`group ${side && "reorder"} px-8`}>
      <div
        id={`${p.id}-numbering`}
        className={`${side ? "mt-[120px]" : "numbering"} flex items-center`}
      >
        <h1 className="text-9xl font-bold mt-6 opacity-25">
          {i + 1 > 9 ? i + 1 : `0${i + 1}`}
        </h1>
      </div>
      <div
        id={`${p.id}-content`}
        className={`${!side && "content"} flex flex-col justify-center gap-2`}
      >
        <h1 className="font-title font-bold text-shadow text-5xl">{p.name}</h1>
        <div className="flex gap-1 flex-wrap">
          {p.tools.map((tool, i) => (
            <Chip key={i} icon={tool} />
          ))}
        </div>
      </div>
      <div
        id={`${p.id}-glance`}
        className={`${
          side ? "glance-space" : "glance glance-align"
        } flex items-center`}
      >
        <h1>{p.glance}</h1>
      </div>
    </div>
  );
}
