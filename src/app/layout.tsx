import ImagePreloader from "@/components/ImagePreloader";
import Navbar from "@/components/Navbar";
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
    <ViewTransitions>
      <html lang="en" data-theme="dark">
        <body
          className={`${josefinSans.className} ${unbounded.variable} antialiased`}
        >
          <ImagePreloader />
          <Navbar />
          {children}
        </body>
      </html>
    </ViewTransitions>
  );
}
