/* eslint-disable @next/next/no-img-element */
import { sanitizeName } from "@/lib/Helpers";
import React from "react";

export default function Chip({ icon }: { icon: string }) {
  return (
    <div className="bg-accent px-2 rounded flex items-center gap-1 w-fit h-fit">
      <img
        src={`/icons/${sanitizeName(icon)}.png`}
        alt="icon-img"
        className="w-4 h-4"
      />
      <h1 className="mt-1 text-sm">{icon}</h1>
    </div>
  );
}
