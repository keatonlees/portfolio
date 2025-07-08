"use client";

import { triggerPageTransition } from "@/hooks/usePageTransition";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTransitionRouter } from "next-view-transitions";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { Fragment, useEffect, useState } from "react";
import Socials from "../base/Socials";

gsap.registerPlugin(ScrollTrigger);

export default function Navbar() {
  const router = useTransitionRouter();
  const pathname = usePathname();

  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { label: "Projects", path: "/projects" },
    { label: "About", path: "/about" },
    { label: "Stash", path: "/stash" },
    { label: "Resume", path: "/resume" },
  ];
  const mobileLinks = [
    { label: "Home", path: "/" },
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

  useEffect(() => {
    gsap.set("#mobile-menu", {
      y: "-100%",
    });
  }, []);
  const toggleMenu = () => {
    if (menuOpen) {
      gsap.to("#mobile-menu", {
        y: "-100%",
        duration: 0.5,
        ease: "power2.inOut",
      });
    } else {
      gsap.to("#mobile-menu", {
        y: 0,
        duration: 0.5,
        ease: "power2.inOut",
      });
    }

    setMenuOpen(!menuOpen);
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
            className="animate-underline font-title font-bold text-2xl text-shadow flex gap-3"
          >
            <h1>Keaton Lees</h1>
          </Link>
        )}
      </div>

      {/* web */}
      <div className="hidden md:flex items-center gap-6">
        {links.map((link, i) => (
          <Fragment key={i}>
            <Link
              href={link.path}
              onClick={(e) => handleNavigation(link.path)(e)}
              className={`text-xl decoration-secondary animate-underline ${
                (link.path === pathname ||
                  (link.path !== "/" && pathname.startsWith(link.path))) &&
                "underline underline-offset-8 pointer-events-none"
              }`}
              aria-disabled={
                link.path === pathname ||
                (link.path !== "/" && pathname.startsWith(link.path))
              }
            >
              {link.label}
            </Link>
            {i < links.length - 1 && <span>/</span>}
          </Fragment>
        ))}
      </div>

      {/* mobile */}
      <div className="flex md:hidden">
        <button
          className="text-2xl decoration-secondary cursor-pointer mt-1"
          onClick={toggleMenu}
        >
          Menu
        </button>
      </div>
      <div
        id="mobile-menu"
        className="flex flex-col md:hidden absolute bg-accent top-0 left-0 w-screen h-screen"
      >
        <div className="w-full h-16 flex justify-between items-center p-8">
          <h1 className="font-title font-bold text-2xl text-shadow">
            Keaton Lees
          </h1>
          <button
            className="text-2xl decoration-secondary cursor-pointer mt-1"
            onClick={toggleMenu}
          >
            Close
          </button>
        </div>
        <div className="h-full flex flex-col justify-center gap-4 px-8">
          {mobileLinks.map((link, i) => (
            <Link
              key={i}
              href={link.path}
              onClick={(e) => {
                handleNavigation(link.path)(e);
                setTimeout(() => {
                  toggleMenu();
                }, 1000);
              }}
              className={`text-5xl decoration-secondary ${
                (link.path === pathname ||
                  (link.path !== "/" && pathname.startsWith(link.path))) &&
                "underline underline-offset-8 pointer-events-none"
              }`}
              aria-disabled={
                link.path === pathname ||
                (link.path !== "/" && pathname.startsWith(link.path))
              }
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="w-full py-4 flex justify-end items-center px-8">
          <Socials size="md" />
        </div>
      </div>
    </div>
  );
}
