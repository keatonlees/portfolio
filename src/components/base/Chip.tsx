import React from "react";

// TODO: add icon images
export default function Chip({ children }: { children: string }) {
  return (
    <div className="bg-accent px-2 rounded">
      <h1 className="mt-1">{children}</h1>
    </div>
  );
}
