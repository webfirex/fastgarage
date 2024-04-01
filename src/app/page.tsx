"use client"
import Hero from "@/components/hero";
import Info from "@/components/info";
import ZoomParallax from "@/components/zoomparallax/index"
import ImageSlider from "@/components/slideimages/index"
import Info2 from "@/components/info/info2";
import AboutUs from "@/components/about";

import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis'
import InfoCards from "@/components/infocards";

export default function Home() {

  useEffect( () => {
      const lenis = new Lenis()
     
      function raf(time) {
          lenis.raf(time)
          requestAnimationFrame(raf)
      }

      requestAnimationFrame(raf)
  },[])

  return (
    <main className="flex flex-col items-center w-full py-[100px]">
      <Hero />
      <ImageSlider />
      <AboutUs />
      <InfoCards />
      <Info2 />
      <ZoomParallax />
    </main>
  );
}
