import React from "react";

export default function Souvenr() {
  return (
    <div className="w-full flex">
      <div
        className="sticky top-0 w-1/2 h-screen pt-20 px-8"
        style={{ background: "linear-gradient(135deg, #1dd1a1, #d3d3d3)" }}
      >
        <h1 className="text-8xl font-title text-shadow">Souvenr</h1>
      </div>
      <div className="w-1/2 h-[200vh] pt-20 px-8">
        <h1 className="text-8xl">Content</h1>
        <h1 className="text-8xl">Content</h1>
        <h1 className="text-8xl">Content</h1>
        <h1 className="text-8xl">Content</h1>
        <h1 className="text-8xl">Content</h1>
      </div>
    </div>
  );
}
