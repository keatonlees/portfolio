import { ArrowRight } from "lucide-react";
import React from "react";

export default function CursorAction({ text }: { text: string }) {
  return (
    <div className="cursor-element projectFadeOut bg-primary px-3 py-1 rounded-full ml-40 mb-4 flex gap-1">
      {text}
      <ArrowRight />
    </div>
  );
}
