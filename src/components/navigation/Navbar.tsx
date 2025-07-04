"use client";

import { triggerPageTransition } from "@/hooks/usePageTransition";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTransitionRouter } from "next-view-transitions";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { Fragment, useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function Navbar() {
  const router = useTransitionRouter();
  const pathname = usePathname();

  const links = [
    { label: "Projects", path: "/projects" },
    { label: "About", path: "/about" },
    { label: "Stash", path: "/stash" },
    { label: "Resume", path: "/resume" },
  ];

  useEffect(() => {
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

    if (pathname === "/") {
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
  }, [pathname]);

  const handleNavigation =
    (path: string) => (e: { preventDefault: () => void }) => {
      if (path === pathname) {
        e.preventDefault();
        return;
      }

      if (path === "/projects" && !pathname.startsWith("/projects/")) {
        router.push(path, {
          onTransitionReady: triggerPageTransition,
        });
      } else if (path !== "/projects") {
        router.push(path, {
          onTransitionReady: triggerPageTransition,
        });
      } else {
        router.push(path);
      }
    };

  return (
    <div className="fixed w-full h-16 flex justify-between items-center px-8 text-xl z-10 glass-sm">
      <div>
        {pathname === "/" ? (
          <div
            id="big-title"
            className="font-title font-bold text-2xl text-shadow relative flex gap-3"
          >
            <h1>Keaton</h1>
            <h1>Lees</h1>
          </div>
        ) : (
          <Link
            href="/"
            onClick={handleNavigation("/")}
            className="font-title font-bold text-2xl text-shadow flex gap-3"
          >
            <h1>Keaton</h1>
            <h1>Lees</h1>
          </Link>
        )}
      </div>
      <div className="flex items-center gap-6">
        {links.map((link, i) => (
          <Fragment key={i}>
            <Link
              href={link.path}
              onClick={handleNavigation(link.path)}
              className={`text-2xl decoration-secondary ${
                (link.path === pathname || pathname.startsWith(link.path)) &&
                "underline pointer-events-none"
              }`}
              aria-disabled={
                link.path === pathname || pathname.startsWith(link.path)
              }
            >
              {link.label}
            </Link>
            {i < links.length - 1 && <span>/</span>}
          </Fragment>
        ))}
      </div>
    </div>
  );
}
