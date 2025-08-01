/* eslint-disable @next/next/no-img-element */
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect, useRef } from "react";
import CursorWrapper from "../cursors/CursorWrapper";

gsap.registerPlugin(ScrollTrigger);

interface MarqueeProps {
  items: React.ReactNode[];
  direction?: "up" | "down";
  baseSpeed?: number;
  delay?: number;
}

const Marquee: React.FC<MarqueeProps> = ({
  items,
  direction = "down",
  baseSpeed = 40,
  delay = 0,
}) => {
  const marqueeRef = useRef<HTMLDivElement>(null);
  const velocityRef = useRef(1);
  const displayedVelocityRef = useRef(1);

  useEffect(() => {
    const marquee = marqueeRef.current;
    if (!marquee) return;

    let scrollTimeout: NodeJS.Timeout | null = null;
    let lastTime = performance.now();
    let animId: number;

    const tick = () => {
      const now = performance.now();
      const dt = (now - lastTime) / 1000;
      lastTime = now;

      const children = marquee.children;
      if (children.length === 0) return;
      const item = children[0] as HTMLElement;
      const itemHeight = item.offsetHeight;
      const parentStyle = window.getComputedStyle(marquee);
      const gap = parseInt(parentStyle.rowGap || parentStyle.gap || "0", 10);
      const moveDistance = itemHeight + gap;

      if (velocityRef.current > displayedVelocityRef.current) {
        displayedVelocityRef.current = velocityRef.current;
      } else {
        const easeOutFactor = 3;
        const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
        displayedVelocityRef.current = lerp(
          displayedVelocityRef.current,
          velocityRef.current,
          1 - Math.exp(-easeOutFactor * dt)
        );
      }

      const directionSign = direction === "up" ? -1 : 1;
      const speed = baseSpeed * displayedVelocityRef.current;
      const move = directionSign * speed * dt;

      const currentY = gsap.getProperty(marquee, "y") as number;
      let newY = (currentY || 0) + move;

      if (direction === "up" && newY <= -moveDistance) {
        marquee.appendChild(marquee.children[0]);
        newY += moveDistance;
      } else if (direction === "down" && newY >= 0) {
        const last = marquee.lastElementChild;
        if (last) {
          marquee.insertBefore(last, marquee.firstElementChild);
          newY -= moveDistance;
        }
      }

      gsap.set(marquee, { y: newY });
      animId = requestAnimationFrame(tick);
    };

    gsap.fromTo(
      marquee,
      { opacity: 0, y: direction === "down" ? "-100%" : "100%" },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 2.5 + delay,
        ease: "power1.out",
        onComplete: () => {
          const updateVelocity = (self: ScrollTrigger) => {
            const scrollVel = Math.abs(self.getVelocity());
            velocityRef.current = 1 + scrollVel / 300;
            if (scrollTimeout) clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(() => {
              velocityRef.current = 1;
            }, 200);
          };

          ScrollTrigger.create({
            trigger: marquee,
            start: "top bottom",
            end: "bottom top",
            onUpdate: updateVelocity,
          });

          lastTime = performance.now();
          animId = requestAnimationFrame(tick);
        },
      }
    );

    return () => {
      if (animId) cancelAnimationFrame(animId);
      gsap.set(marquee, { clearProps: "all" });
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      if (scrollTimeout) clearTimeout(scrollTimeout);
    };
  }, [baseSpeed, direction, items.length, delay]);

  return (
    <div className="relative h-full">
      <div id="marquee" ref={marqueeRef} className="flex flex-col gap-4 h-full">
        {items.map((item, i) => (
          <div
            key={i}
            className="bg-neutral w-[40vw] md:w-[12vw] h-[40vh] flex-none flex items-center justify-center rounded-2xl text-5xl"
          >
            <img
              className="w-full h-full object-cover rounded-2xl"
              src={`images/${item}`}
              alt="about-image"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default function HeroAbout() {
  const marquee_1 = [
    "taekwondo.jpg",
    "track.jpg",
    "headshot_2.jpg",
    "headshot_grad.jpg",
  ];
  const marquee_2 = ["malaysia.jpg", "taiwan.jpg", "volleyball.jpg", "bbt.jpg"];
  const marquee_3 = ["film.jpg", "victoria.jpg", "lees.jpg", "market.jpg"];

  return (
    <div className="bg-accent w-screen h-screen flex justify-center items-center gap-4">
      <div className="w-1/2 h-full flex justify-center items-center">
        <div className="flex gap-4 h-full">
          <Marquee
            items={marquee_1}
            direction="down"
            baseSpeed={60}
            delay={0}
          />
          <div className="hidden md:block">
            <Marquee
              items={marquee_2}
              direction="up"
              baseSpeed={50}
              delay={0.2}
            />
          </div>
          <div className="hidden md:block">
            <Marquee
              items={marquee_3}
              direction="down"
              baseSpeed={40}
              delay={0.4}
            />
          </div>
        </div>
      </div>
      <div className="w-1/2 flex flex-col gap-4">
        <CursorWrapper
          cursorComponent={
            <div className="cursor-element ml-12 mb-12">Test</div>
          }
        >
          <h1 className="text-3xl md:text-6xl font-title font-bold text-shadow">
            About Me
          </h1>
        </CursorWrapper>
        <p>Software Engineer @ Athlix (EliteAI)</p>
        <p>
          As a Systems Design Engineering grad from the University of Waterloo,
          I&apos;ve developed a deep passion for solving complex problems
          through technology and design. Over the years, I&apos;ve worked in
          diverse roles that helped me build a strong technical foundation.
          These well-rounded perspectives taught me how technology can shape the
          world and change the way we see and do things in life.
        </p>
      </div>
    </div>
  );
}
