"use client";

import React, { useRef } from "react";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText, ScrollTrigger);

export default function Copy({
  children,
  animateOnScroll = true,
  delay = 0,
  blockColor = "#a00045",
  stagger = 0.15,
  duration = 0.75,
}) {
  const containerRef = useRef(null);
  const splitRefs = useRef([]);
  const lines = useRef([]);
  const blocks = useRef([]);
  const scrollTriggers = useRef([]);
  const timelines = useRef([]);
  const scrollCleanupRef = useRef(null);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      splitRefs.current = [];
      lines.current = [];
      blocks.current = [];
      scrollTriggers.current = [];
      timelines.current = [];

      let elements = [];
      if (containerRef.current.hasAttribute("data-copy-wrapper")) {
        elements = Array.from(containerRef.current.children);
      } else {
        elements = [containerRef.current];
      }

      elements.forEach((element) => {
        const split = new SplitText(element, {
          type: "lines",
          linesClass: "block-line++",
          lineThreshold: 0.1,
        });

        splitRefs.current.push(split);

        split.lines.forEach((line) => {
          const wrapper = document.createElement("div");
          wrapper.className = "block-line-wrapper";
          line.parentNode.insertBefore(wrapper, line);
          wrapper.appendChild(line);

          const block = document.createElement("div");
          block.className = "block-revealer";
          block.style.backgroundColor = blockColor;
          wrapper.appendChild(block);

          lines.current.push(line);
          blocks.current.push(block);
        });
      });

      gsap.set(lines.current, { opacity: 0 });
      gsap.set(blocks.current, { scaleX: 0, transformOrigin: "left center" });

      const createBlockRevealAnimation = (block, line, index) => {
        const tl = gsap.timeline({ delay: delay + index * stagger });

        tl.to(block, { scaleX: 1, duration: duration, ease: "power4.inOut" });
        tl.set(line, { opacity: 1 });
        tl.set(block, { transformOrigin: "right center" });
        tl.to(block, { scaleX: 0, duration: duration, ease: "power4.inOut" });

        return tl;
      };

      if (animateOnScroll) {
        // Create all timelines first
        blocks.current.forEach((block, index) => {
          const tl = createBlockRevealAnimation(
            block,
            lines.current[index],
            index
          );
          tl.pause();
          timelines.current.push(tl);
        });

        // Create a SINGLE ScrollTrigger for the entire container
        // This is more efficient and reliable than one per block
        const playAllAnimations = () => {
          timelines.current.forEach((tl) => {
            if (tl && tl.paused()) {
              tl.play();
            }
          });
        };

        const st = ScrollTrigger.create({
          trigger: containerRef.current,
          start: "top 90%",
          once: true,
          onEnter: () => {
            playAllAnimations();
          },
          // Ensure ScrollTrigger works with smooth scroll libraries like Lenis
          invalidateOnRefresh: true,
        });

        scrollTriggers.current.push(st);

        // Add a manual scroll listener as a fallback
        // This ensures the animation plays even if ScrollTrigger doesn't detect scroll
        let hasPlayed = false;
        const handleScroll = () => {
          if (!hasPlayed && isElementInView(containerRef.current)) {
            hasPlayed = true;
            playAllAnimations();
            // Remove listener after playing
            window.removeEventListener("scroll", handleScroll);
            // Also check on the Lenis scroll container if it exists
            const lenisContainer = document.querySelector("[data-lenis-root]");
            if (lenisContainer) {
              lenisContainer.removeEventListener("scroll", handleScroll);
            }
          }
        };

        // Listen to both window scroll and Lenis scroll
        window.addEventListener("scroll", handleScroll, { passive: true });
        const lenisContainer = document.querySelector("[data-lenis-root]");
        if (lenisContainer) {
          lenisContainer.addEventListener("scroll", handleScroll, {
            passive: true,
          });
        }

        // Store cleanup function in ref
        scrollCleanupRef.current = () => {
          window.removeEventListener("scroll", handleScroll);
          const lenisContainer = document.querySelector("[data-lenis-root]");
          if (lenisContainer) {
            lenisContainer.removeEventListener("scroll", handleScroll);
          }
        };

        // Helper function to check if element is in viewport
        const isElementInView = (element) => {
          if (!element) return false;
          const rect = element.getBoundingClientRect();
          const windowHeight =
            window.innerHeight || document.documentElement.clientHeight;
          // Check if element top is above 90% of viewport (matching "top 90%" trigger)
          return rect.top < windowHeight * 0.9 && rect.bottom > 0;
        };

        // Check immediately if element is in view
        const checkAndPlay = () => {
          if (isElementInView(containerRef.current)) {
            playAllAnimations();
            return true;
          }
          return false;
        };

        // Check immediately if element is in view (for initial load)
        requestAnimationFrame(() => {
          checkAndPlay();
        });

        // Refresh ScrollTrigger after layout is complete
        // This ensures ScrollTrigger calculates positions correctly
        const refreshAndCheck = () => {
          ScrollTrigger.refresh();
          // Only check if element is in view, don't force play
          // Let ScrollTrigger handle scroll events naturally
          requestAnimationFrame(() => {
            // Only play if already in view (initial load case)
            // Don't interfere with ScrollTrigger's scroll detection
            if (isElementInView(containerRef.current)) {
              checkAndPlay();
            }
          });
        };

        // Refresh at different intervals to handle various loading scenarios
        setTimeout(refreshAndCheck, 100);
        setTimeout(refreshAndCheck, 300);
        setTimeout(refreshAndCheck, 600);

        // Also check on window load as a fallback
        const handleLoad = () => {
          refreshAndCheck();
        };
        if (document.readyState === "complete") {
          handleLoad();
        } else {
          window.addEventListener("load", handleLoad, { once: true });
        }

        // Ensure ScrollTrigger is enabled and will detect scroll events
        // Force a refresh after a delay to ensure it's ready to detect scroll
        setTimeout(() => {
          ScrollTrigger.refresh();
        }, 1000);
      } else {
        blocks.current.forEach((block, index) => {
          createBlockRevealAnimation(block, lines.current[index], index);
        });
      }

      return () => {
        // Kill ScrollTriggers created for this component
        scrollTriggers.current.forEach((st) => st?.kill());
        scrollTriggers.current = [];

        // Clean up scroll listeners if they exist
        if (scrollCleanupRef.current) {
          scrollCleanupRef.current();
          scrollCleanupRef.current = null;
        }

        splitRefs.current.forEach((split) => split?.revert());

        const wrappers = containerRef.current.querySelectorAll(
          ".block-line-wrapper"
        );
        wrappers?.forEach((wrapper) => {
          if (wrapper.parentNode && wrapper.firstChild) {
            wrapper.parentNode.insertBefore(wrapper.firstChild, wrapper);
            wrapper.remove();
          }
        });
      };
    },
    {
      scope: containerRef,
      dependencies: [animateOnScroll, delay, blockColor, stagger, duration],
    }
  );

  return (
    <div ref={containerRef} data-copy-wrapper="true">
      {children}
    </div>
  );
}
