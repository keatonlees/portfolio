"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { Fragment } from "react";

export default function Navbar() {
  const path = usePathname();

  const links = [
    { label: "Work", path: "/work" },
    { label: "About", path: "/about" },
    { label: "Resume", path: "/resume" },
  ];

  return (
    <div className="fixed w-full h-16 flex justify-between items-center px-8 text-xl z-10">
      <div>
        <Link href="/" className="font-title font-bold text-2xl">
          Keaton Lees
        </Link>
      </div>
      <div className="flex items-center gap-4">
        {links.map((link, i) => (
          <Fragment key={i}>
            <Link href={link.path} className="text-2xl">
              {link.label}
            </Link>
            {i < links.length - 1 && <span>/</span>}
          </Fragment>
        ))}
      </div>
    </div>
  );
}
