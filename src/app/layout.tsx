import ImagePreloader from "@/components/navigation/ImagePreloader";
import Navbar from "@/components/navigation/Navbar";
import { CursorProvider } from "@/hooks/useCursor";
import { PreviousRouteProvider } from "@/hooks/usePreviousRoute";
import type { Metadata } from "next";
import { ViewTransitions } from "next-view-transitions";
import { Josefin_Sans, Unbounded } from "next/font/google";
import "./globals.css";

const josefinSans = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

const unbounded = Unbounded({
  subsets: ["latin"],
  variable: "--font-unbounded",
});

export const metadata: Metadata = {
  title: "Keaton Lees",
  description: "My pristine personal portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <CursorProvider>
      <ViewTransitions>
        <html lang="en" data-theme="dark">
          <head>
            <link rel="icon" href="/logo_light.png" type="image/png" />
          </head>

          <body
            className={`${josefinSans.className} ${unbounded.variable} antialiased`}
          >
            <ImagePreloader />
            <Navbar />
            <PreviousRouteProvider>{children}</PreviousRouteProvider>
          </body>
        </html>
      </ViewTransitions>
    </CursorProvider>
  );
}
