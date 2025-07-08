import { handleBack } from "@/app/projects/actions";
import { handleLink } from "@/lib/Helpers";
import { Project } from "@/lib/Types";
import { ArrowLeft, Github, Link } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

interface ButtonBarProps {
  p: Project;
}

export default function ButtonBar({ p }: ButtonBarProps) {
  const router = useRouter();

  return (
    <div className="fade opacity-0 absolute px-8 top-[70px] z-10 w-full flex items-center justify-between">
      <button
        onClick={() => handleBack(router)}
        className="btn btn-primary rounded-full"
      >
        <ArrowLeft size={20} />
        Back
      </button>
      <div className="flex gap-2">
        {p.githubLink && (
          <button
            onClick={() => handleLink(p.githubLink)}
            className="btn btn-accent rounded-full btn-outline"
          >
            <Github size={16} />
            Github
          </button>
        )}
        {p.liveLink && (
          <button
            onClick={() => handleLink(p.liveLink)}
            className="btn btn-accent rounded-full btn-outline"
          >
            <Link size={16} />
            Link
          </button>
        )}
      </div>
    </div>
  );
}
