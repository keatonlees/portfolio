"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTransitionRouter } from "next-view-transitions";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { Fragment, useEffect } from "react";

export default function Navbar() {
  const router = useTransitionRouter();
  const pathname = usePathname();
  gsap.registerPlugin(ScrollTrigger);

  const links = [
    // { label: "Home", path: "/" },
    { label: "Work", path: "/work" },
    { label: "About", path: "/about" },
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

  function triggerPageTransition() {
    document.documentElement.animate(
      [
        {
          clipPath: "polygon(25% 75%, 75% 75%, 75% 75%, 25% 75%)",
        },
        {
          clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
        },
      ],
      {
        duration: 2000,
        easing: "cubic-bezier(0.9, 0, 0.1, 1)",
        pseudoElement: "::view-transition-new(root)",
      }
    );
  }

  const handleNavigation =
    (path: string) => (e: { preventDefault: () => void }) => {
      if (path === pathname) {
        e.preventDefault();
        return;
      }

      router.push(path, {
        onTransitionReady: triggerPageTransition,
      });
    };

  return (
    <div className="fixed w-full h-16 flex justify-between items-center px-8 text-xl z-10 glass-sm">
      <div>
        {pathname === "/" ? (
          <h1
            id="big-title"
            className="font-title font-bold text-2xl text-shadow relative"
          >
            Keaton Lees
          </h1>
        ) : (
          <Link
            href="/"
            onClick={handleNavigation("/")}
            className="font-title font-bold text-2xl text-shadow"
          >
            Keaton Lees
          </Link>
        )}
      </div>
      <div className="flex items-center gap-4">
        {links.map((link, i) => (
          <Fragment key={i}>
            <Link
              href={link.path}
              onClick={handleNavigation(link.path)}
              className={`text-2xl ${link.path === pathname && "underline"}`}
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
