"use client";

import Navbar from "@/components/navigation/Navbar";
import Preloader from "@/components/navigation/Preloader";
import TransitionOverlay from "@/components/navigation/TransitionOverlay";
import { CursorProvider } from "@/hooks/useCursor";
import { Josefin_Sans, Unbounded } from "next/font/google";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import "./globals.css";

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
  const pathname = usePathname();
  const [showPreloader, setShowPreloader] = useState(true);
  const [preloaderComplete, setPreloaderComplete] = useState(false);
  const previousPathname = useRef<string | null>(null);

  useEffect(() => {
    if (!showPreloader && !preloaderComplete) {
      setPreloaderComplete(true);
      previousPathname.current = pathname;
    }
  }, [showPreloader, preloaderComplete, pathname]);

  const isPageNavigation =
    preloaderComplete &&
    previousPathname.current !== null &&
    previousPathname.current !== pathname;

  const handleTransitionComplete = () => {
    previousPathname.current = pathname;
  };

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
            <TransitionOverlay
              isNavigation={isPageNavigation}
              onTransitionComplete={handleTransitionComplete}
            >
              {() => (
                <>
                  <Navbar />
                  {children}
                </>
              )}
            </TransitionOverlay>
          )}
        </body>
      </html>
    </CursorProvider>
  );
}
