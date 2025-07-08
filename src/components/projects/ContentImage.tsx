/* eslint-disable @next/next/no-img-element */
import React from "react";

export default function ContentImage({ name }: { name: string }) {
  return (
    <img
      src={`/mocks/${name}`}
      alt="content-img"
      className="fade opacity-0 rounded"
    />
  );
}
