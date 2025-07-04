/* eslint-disable @next/next/no-img-element */
import React from "react";

export default function Chip({ icon }: { icon: string }) {
  const imgName = icon
    .toLowerCase()
    .replace(".", "")
    .replace("-", "")
    .replace(" ", "_");

  return (
    <div className="bg-accent px-2 rounded flex items-center gap-1 w-fit h-fit">
      <img src={`/icons/${imgName}.png`} alt="icon-img" className="w-4 h-4" />
      <h1 className="mt-1 text-sm">{icon}</h1>
    </div>
  );
}
