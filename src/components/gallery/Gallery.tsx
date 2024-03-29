import { getHomeGallery } from "@/lib/contentful";
import React from "react";
import GalleryLink from "./GalleryLink";

const Gallery = async () => {
  const galleryLinks = await getHomeGallery();
  return (
    <div
      id="galeria"
      className="padding section-space flex flex-col relative mb-[57px] md:mb-[74px] lg:mb-[104px] xl:mb-[130px] 3xl:mb-[140px] desktop:mb-[160px] ultra:mb-[240px]
      pt-[57px] md:pt-[74px] lg:pt-[104px] xl:pt-[130px] 3xl:pt-[140px] desktop:pt-[160px] ultra:pt-[240px]
      "
    >
      <div>
        <h2 className="section-heading text-left leading-tight">Galeria</h2>
        <p
          className="opacity-70 text-[14.46px] md:text-[8.81px] lg:text-[11.56px] xl:text-[14.46px] 2xl:text-[16.26px] 3xl:text-[17.35px] desktop:text-[19.43px] ultra:text-[28.81px]
          leading-tight"
        >
          Zobacz zdjęcia z naszych wydarzeń
        </p>
      </div>
      <div
        className="mt-[5px] md:mt-[29px] lg:mt-[37px] 2xl:mt-[44px] ultra:mt-[66px] grid grid-cols-1 md:grid-cols-3
      gap-y-[19px] md:gap-x-[53px] lg:gap-x-[69px] xl:gap-x-[87px] 2xl:gap-x-[97px] desktop:gap-x-[107px] ultra:gap-x-[161px]"
      >
        {galleryLinks.map((link) => (
          <GalleryLink
            location={link.fields.location}
            date={link.fields.date}
            entryId={link.fields.entryId}
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
