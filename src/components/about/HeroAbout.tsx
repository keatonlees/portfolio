import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

interface MarqueeProps {
  items: React.ReactNode[];
  direction?: "up" | "down";
  baseSpeed?: number;
  delay?: number; // add delay prop
}

const Marquee: React.FC<MarqueeProps> = ({
  items,
  direction = "down",
  baseSpeed = 40,
  delay = 0, // default to 0
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
            velocityRef.current = 1 + scrollVel / 500;
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
            className="bg-neutral w-60 h-80 flex-none flex items-center justify-center rounded-2xl text-5xl"
          >
            {item}
          </div>
        ))}
      </div>
      {/* <div className="pointer-events-none absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-base-100 to-transparent z-10" /> */}
    </div>
  );
};

export default function HeroAbout() {
  const marquee_1 = ["1", "2", "3", "4"];

  return (
    <div className="bg-accent w-screen h-screen flex justify-center items-center">
      <div className="flex-2 h-full flex justify-center items-center">
        <div className="flex gap-4 h-full">
          <Marquee
            items={marquee_1}
            direction="down"
            baseSpeed={160}
            delay={0}
          />
          <Marquee
            items={marquee_1}
            direction="up"
            baseSpeed={160}
            delay={0.2}
          />
          <Marquee
            items={marquee_1}
            direction="down"
            baseSpeed={160}
            delay={0.4}
          />
        </div>
      </div>
      <div className="flex-1">About Me</div>
    </div>
  );
}
