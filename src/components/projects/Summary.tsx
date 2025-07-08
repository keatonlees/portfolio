import { Project } from "@/lib/Types";
import React from "react";
import Animate from "../base/Animate";

interface SummaryProps {
  p: Project;
}

export default function Summary({ p }: SummaryProps) {
  return (
    <div className="px-8 mt-8 w-full flex gap-8">
      <div className="flex-1 flex flex-col">
        <Animate>
          <h1 className="text-xl font-bold">Topics</h1>
        </Animate>
        {p.topics.map((topic, i) => (
          <Animate key={i} delay={(i + 1) * 0.1}>
            <p className="text-lg">{topic}</p>
          </Animate>
        ))}
      </div>

      <div className="flex-1 flex flex-col">
        <Animate>
          <h1 className="text-xl font-bold">Project Type</h1>
        </Animate>
        {p.types.map((type, i) => (
          <Animate key={i} delay={(i + 1) * 0.1}>
            <p className="text-lg">{type}</p>
          </Animate>
        ))}
      </div>

      <div className="flex-1 flex flex-col">
        <Animate>
          <h1 className="text-xl font-bold">My Role</h1>
        </Animate>
        {p.roles.map((role, i) => (
          <Animate key={i} delay={(i + 1) * 0.1}>
            <p key={i} className="text-lg">
              {role}
            </p>
          </Animate>
        ))}
      </div>

      <div className="flex-1 flex flex-col">
        <Animate>
          <h1 className="text-xl font-bold">Timeline</h1>
        </Animate>
        <Animate delay={0.1}>
          <p className="text-lg">{p.timeline}</p>
        </Animate>
      </div>
    </div>
  );
}
