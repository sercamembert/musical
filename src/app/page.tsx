import React from "react";
import { client } from "@/lib/contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import Image from "next/image";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import About from "@/components/About";
export default async function Home() {
  const page = await client.getEntry("2bWaTxKFZq5xHHICUol06i");
  const { test, image, media } = page.fields;

  return (
    <main className="flex flex-col w-full">
      <Hero />
      <About />
    </main>
  );
}
