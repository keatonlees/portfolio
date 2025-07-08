import React from "react";
import Animate from "../base/Animate";

export default function WhatWhyHow({
  what,
  why,
  how,
}: {
  what: string;
  why: string;
  how: string;
}) {
  return (
    <div className="fade opacity-0 flex flex-col w-full gap-4">
      <div className="flex gap-4">
        <Animate>
          <h1 className="w-28 text-xl font-bold">The What</h1>
        </Animate>
        <Animate>
          <h1 className="flex-1">{what}</h1>
        </Animate>
      </div>
      <div className="flex gap-4">
        <Animate>
          <h1 className="w-28 text-xl font-bold">The Why</h1>
        </Animate>
        <Animate>
          <h1 className="flex-1">{why}</h1>
        </Animate>
      </div>
      <div className="flex gap-4">
        <Animate>
          <h1 className="w-28 text-xl font-bold">The How</h1>
        </Animate>
        <Animate>
          <h1 className="flex-1">{how}</h1>
        </Animate>
      </div>
    </div>
  );
}
