"use client";

// import { useIsMobile } from "@/hooks/useIsMobile";
// import { triggerPageTransition } from "@/hooks/usePageTransition";
import { TransitionContext } from "@/contexts/TransitionContext";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { Fragment, useContext, useEffect, useState } from "react";
import Socials from "../base/Socials";

gsap.registerPlugin(ScrollTrigger);

export default function Navbar() {
  const pathname = usePathname();
  const transition = useContext(TransitionContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { label: "Projects", path: "/projects" },
    { label: "About", path: "/about" },
    // { label: "Stash", path: "/stash" },
    // { label: "Resume", path: "/resume" },
  ];
  const mobileLinks = [
    { label: "Home", path: "/" },
    { label: "Projects", path: "/projects" },
    { label: "About", path: "/about" },
    { label: "Stash", path: "/stash" },
    { label: "Resume", path: "/resume" },
  ];

  // useEffect(() => {
  //   ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

  //   if (pathname === "/") {
  //     if (isMobile) {
  //       gsap.set("#big-title", {
  //         scale: 1.8,
  //         x: "45vw",
  //         y: "20vh",
  //         xPercent: -50,
  //         yPercent: -50,
  //       });
  //     } else {
  //       gsap.set("#big-title", {
  //         scale: 4,
  //         x: "50vw",
  //         y: "50vh",
  //         xPercent: -50,
  //         yPercent: -50,
  //       });
  //     }

  //     gsap.to("#big-title", {
  //       scrollTrigger: {
  //         trigger: "body",
  //         start: "top top",
  //         end: "+=40%",
  //         scrub: 0.4,
  //       },
  //       scale: 1,
  //       x: 0,
  //       y: 0,
  //       xPercent: 0,
  //       yPercent: 0,
  //       gap: 8,
  //     });
  //   } else {
  //     gsap.set("#big-title", {
  //       scale: 1,
  //       x: 0,
  //       y: 0,
  //       xPercent: 0,
  //       yPercent: 0,
  //       clearProps: "all",
  //     });
  //   }

  //   return () => {
  //     ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  //   };
  // }, [pathname, isMobile]);

  const handleNavigation = (path: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const isActive =
      path === pathname || (path !== "/" && pathname.startsWith(path));
    if (isActive || !transition) return;
    transition.navigateWithTransition(path);
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
    <>
      <div className="fixed w-full h-16 flex justify-between items-center text-xl z-[10000] glass-sm px-4 md:px-8">
        <div>
          {pathname === "/" ? (
            <div
              id="big-title"
              className="bg-primary font-title font-bold text-2xl text-shadow relative flex gap-1 md:gap-12"
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
      </div>

      {/* Mobile menu - rendered outside navbar container */}
      <div
        id="mobile-menu"
        className="flex flex-col md:hidden fixed h-screen bg-accent top-0 left-0 w-screen z-[10001]"
      >
        <div className="w-full h-16 flex justify-between items-center p-4">
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
        <div className="h-full flex flex-col justify-center gap-4 px-4">
          {mobileLinks.map((link, i) => (
            <Link
              key={i}
              href={link.path}
              onClick={(e) => {
                handleNavigation(link.path)(e);
                setTimeout(toggleMenu, 400);
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
        <div className="w-full py-4 flex justify-end items-center px-4">
          <Socials size="md" />
        </div>
      </div>
    </>
  );
}
