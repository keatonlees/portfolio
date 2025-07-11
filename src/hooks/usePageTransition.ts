"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import CustomEase from "gsap/CustomEase";

gsap.registerPlugin(CustomEase);
CustomEase.create("hop", "0.9, 0, 0.1, 1");

export function usePageTransition(showRevealer: boolean = true) {
  useGSAP(() => {
    document.body.style.overflow = "hidden";

    if (showRevealer) {
      gsap.to(".revealer", {
        scaleY: 0,
        duration: 1,
        delay: 1,
        ease: "hop",
        onComplete: () => {
          document.body.style.overflow = "auto";
        },
      });
    } else {
      gsap.to(".revealer", {
        scaleY: 0,
        duration: 0,
        onComplete: () => {
          document.body.style.overflow = "auto";
        },
      });
    }
  }, [showRevealer]);
}

export function triggerPageTransition() {
  try {
    if (!document.startViewTransition) {
      console.warn("View transitions not supported");
      return;
    }

    if (document.documentElement.classList.contains("view-transition")) {
      console.warn("View transition already in progress");
      return;
    }

    const animation = document.documentElement.animate(
      [
        {
          clipPath: "polygon(25% 75%, 75% 75%, 75% 75%, 25% 75%)",
        },
        {
          clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
        },
      ],
      {
        duration: 1250,
        easing: "cubic-bezier(0.9, 0, 0.1, 1)",
        pseudoElement: "::view-transition-new(root)",
      }
    );

    return animation;
  } catch (error) {
    console.warn("Error triggering page transition:", error);
  }
}
