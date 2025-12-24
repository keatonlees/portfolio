"use client";

// hero
// project spotlight
// footer

import Footer from "@/components/base/Footer";
import HeroHome from "@/components/home/HeroHome";
// import PageTransition from "@/components/navigation/PageTransition";
// import { usePageTransition } from "@/hooks/usePageTransition";
// import { usePathname } from "next/navigation";
// import { useEffect } from "react";

import Copy from "@/components/base/Copy";
import { ReactLenis } from "lenis/react";

export default function Home() {
  // const pathname = usePathname();
  // usePageTransition();

  // useEffect(() => {
  //   window.scroll(0, 0);
  // }, [pathname]);

  return (
    <>
      <ReactLenis root />
      {/* <PageTransition /> */}

      <HeroHome />

      <div className="h-[100vh]"></div>

      <Copy>
        <h1 className="text-4xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at
          varius mauris. Fusce quis sem at justo ullamcorper semper. Quisque
          ornare, urna at viverra aliquet, felis arcu cursus nulla, non
          elementum nibh lorem a nibh. Suspendisse dui metus, eleifend eget
          massa rhoncus, euismod ultricies nulla. Sed sit amet ornare massa.
          Vestibulum ac porttitor ligula. In efficitur, ligula eget condimentum
          dignissim, eros urna dictum sem, sit amet ornare nisl arcu tincidunt
          nunc. Morbi sed magna sapien. Aenean mattis ullamcorper commodo. Ut
          laoreet semper lacus, varius efficitur risus mollis sagittis. Maecenas
          eget nisi sodales, pellentesque mi nec, euismod metus.
        </h1>
      </Copy>

      <div className="h-[100vh]"></div>

      <Copy>
        <h1 className="text-4xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at
          varius mauris. Fusce quis sem at justo ullamcorper semper. Quisque
          ornare, urna at viverra aliquet, felis arcu cursus nulla, non
          elementum nibh lorem a nibh. Suspendisse dui metus, eleifend eget
          massa rhoncus, euismod ultricies nulla. Sed sit amet ornare massa.
          Vestibulum ac porttitor ligula. In efficitur, ligula eget condimentum
          dignissim, eros urna dictum sem, sit amet ornare nisl arcu tincidunt
          nunc. Morbi sed magna sapien. Aenean mattis ullamcorper commodo. Ut
          laoreet semper lacus, varius efficitur risus mollis sagittis. Maecenas
          eget nisi sodales, pellentesque mi nec, euismod metus.
        </h1>
      </Copy>
      <Footer />
    </>
  );
}
