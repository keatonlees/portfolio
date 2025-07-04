import { Project } from "@/lib/Types";
import React from "react";

interface SummaryProps {
  p: Project;
}

export default function Summary({}: SummaryProps) {
  return (
    <div className="fade opacity-0 px-8 mt-8 w-full flex gap-8">
      <div className="flex-1 flex flex-col">
        <h1 className="text-xl font-bold">Topics</h1>
        <p className="text-lg">Travel Planning</p>
        <p className="text-lg">AI Recommendations</p>
        <p className="text-lg">Digital Souvenirs</p>
      </div>

      <div className="flex-1 flex flex-col">
        <h1 className="text-xl font-bold">Project Type</h1>
        <p className="text-lg">Personal</p>
      </div>

      <div className="flex-1 flex flex-col">
        <h1 className="text-xl font-bold">My Role</h1>
        <p className="text-lg">Full-Stack Developer</p>
        <p className="text-lg">UI Designer</p>
      </div>

      <div className="flex-1 flex flex-col">
        <h1 className="text-xl font-bold">Timeline</h1>
        <p className="text-lg">6 months</p>
      </div>
    </div>
  );
}
