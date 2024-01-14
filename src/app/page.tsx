import React from "react";
import { client } from "@/lib/contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import Image from "next/image";
import Gallery from "@/components/gallery/Gallery";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Artists from "@/components/artists/Artists";
import Events from "@/components/events/Events";
import Footer from "@/components/Footer";
import ImagesHome from "@/components/ImagesHome";
export default async function Home() {
  const page = await client.getEntry("2bWaTxKFZq5xHHICUol06i");
  const { test, image, media } = page.fields;

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
      <Gallery />
      <ImagesHome />
    </main>
  );
}
