"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { Fragment, useEffect } from "react";

export default function Navbar() {
  const path = usePathname();
  gsap.registerPlugin(ScrollTrigger);

  const links = [
    // { label: "Home", path: "/" },
    { label: "Work", path: "/work" },
    { label: "About", path: "/about" },
    { label: "Resume", path: "/resume" },
  ];

  useEffect(() => {
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

    if (path === "/") {
      gsap.set("#big-title", {
        scale: 9,
        x: "48vw",
        y: "30vh",
        xPercent: -50,
        yPercent: -50,
        zIndex: 0,
      });

      gsap.to("#big-title", {
        scrollTrigger: {
          trigger: "body",
          start: "top top",
          end: "+=40%",
          scrub: 0.4,
        },
        scale: 1,
        x: 0,
        y: 0,
        xPercent: 0,
        yPercent: 0,
        zIndex: 10,
      });
    } else {
      gsap.set("#big-title", {
        scale: 1,
        x: 0,
        y: 0,
        xPercent: 0,
        yPercent: 0,
        clearProps: "all",
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [path]);

  return (
    <div className="fixed w-full h-16 flex justify-between items-center px-8 text-xl z-10 glass-sm">
      <div>
        {path === "/" ? (
          <h1
            id="big-title"
            className="font-title font-bold text-2xl text-shadow relative"
          >
            Keaton Lees
          </h1>
        ) : (
          <Link href="/" className="font-title font-bold text-2xl text-shadow">
            Keaton Lees
          </Link>
        )}
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
