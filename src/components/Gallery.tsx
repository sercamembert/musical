"use client";
import React from "react";
import Image from "next/image";
interface Props {}

const Gallery = ({ image }: any) => {
  return (
    <div>
      {image.map((image: any) => (
        <Image
          src={"https:" + image?.fields.file?.url}
          alt="co"
          width={1000}
          height={1000}
        />
      ))}
    </div>
  );
};

export default Gallery;
