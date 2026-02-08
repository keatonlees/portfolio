"use client";

import Navbar from "@/components/navigation/Navbar";
import Preloader from "@/components/navigation/Preloader";
import { TransitionProvider } from "@/contexts/TransitionContext";
import { CursorProvider } from "@/hooks/useCursor";
import gsap from "gsap";
import { Josefin_Sans, Unbounded } from "next/font/google";
import { useLayoutEffect, useRef, useState } from "react";
import "./globals.css";

function FadeInOnMount({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    gsap.fromTo(
      el,
      { opacity: 0 },
      { opacity: 1, duration: 0.5, ease: "power2.out" },
    );
  }, []);
  return (
    <div ref={ref} style={{ opacity: 0 }}>
      {children}
    </div>
  );
}

const josefinSans = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

const unbounded = Unbounded({
  subsets: ["latin"],
  variable: "--font-unbounded",
});

// export const metadata: Metadata = {
//   title: "Keaton Lees",
//   description: "My pristine personal portfolio",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [showPreloader, setShowPreloader] = useState(true);

  return (
    <CursorProvider>
      <html lang="en" data-theme="dark">
        <body
          className={`${josefinSans.className} ${unbounded.variable} antialiased`}
        >
          {showPreloader ? (
            <Preloader
              onComplete={() => {
                setShowPreloader(false);
              }}
            />
          ) : (
            <FadeInOnMount>
              <TransitionProvider>
                <Navbar />
                {children}
              </TransitionProvider>
            </FadeInOnMount>
          )}
        </body>
      </html>
    </CursorProvider>
  );
}
