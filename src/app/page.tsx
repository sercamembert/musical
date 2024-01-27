import React from "react";
import Gallery from "@/components/gallery/Gallery";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Artists from "@/components/artists/Artists";
import Events from "@/components/events/Events";
import ImagesHome from "@/components/ImagesHome";
export default async function Home() {
  return (
    <main className="flex flex-col w-full">
      <Hero />
      <div className="md:hidden">
        <Events text="Najbliższe wydarzenia" />
      </div>
      <About />
      <Artists />
      <div className="hidden md:block">
        <Events text="Najbliższe wydarzenia" />
      </div>
      {/* <ImagesHome /> */}
      <Gallery />
    </main>
  );
}
