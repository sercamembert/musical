import ArtistBlock from "@/components/artists/ArtistBlock";
import { getAllArtists, getAllMusicians } from "@/lib/contentful";
import React from "react";

interface Props {}

const page = async () => {
  const artists = await getAllArtists();
  const musicians = await getAllMusicians();
  return (
    <div className="padding flex flex-col mt-[100px] xl:mt-[120px] gap-[35px] md:gap-[50px] lg:gap-[70px] xl:gap-[90px] 2xl:gap-[110px]">
      <div>
        <h1 className="text-center text-[27px] font-bold md:section-heading ">
          Artyści
        </h1>
        <p
          className="text-center text-[11px] md:text-[10px] lg:text-[12px] xl:text-[15.49px] desktop:text-[19px] ultra:text-[28.31px]
           opacity-70  mx-auto md:w-full"
        >
          Artyści polskich scen musicalowych zaangażowani <br /> w projekt
          "Złote Głosy Musicalu"
        </p>
      </div>
      <div
        className="w-full grid grid-cols-1 md:grid-cols-3 
        gap-x-[31px] md:gap-x-[27px] lg:gap-x-[35px] xl:gap-x-[44px] desktop:gap-x-[54px] ultra:gap-x-[81px]
        max-w-[300px] md:max-w-full mx-auto
        gap-y-[30px] lg:gap-y-[60px] xl:gap-y-[80px] 3xl:gap-y-[100px] ultra:gap-y-[160px]
        "
      >
        {artists?.map((artist) => (
          <ArtistBlock
            // @ts-expect-error
            path={"https:" + artist.fields.image?.fields.file?.url}
            name={artist.fields.name}
            role={artist.fields.role}
            role2={artist.fields.role2}
          />
        ))}
      </div>
      <h2 className="text-center text-[27px] font-bold md:section-heading ">
        Muzycy
      </h2>
      <div
        className="w-full grid grid-cols-1 md:grid-cols-3 
        gap-x-[31px] md:gap-x-[27px] lg:gap-x-[35px] xl:gap-x-[44px] desktop:gap-x-[54px] ultra:gap-x-[81px]
        max-w-[300px] md:max-w-full mx-auto
        gap-y-[30px] lg:gap-y-[60px] xl:gap-y-[80px] 3xl:gap-y-[100px] ultra:gap-y-[160px]
        "
      >
        {musicians?.map((artist) => (
          <ArtistBlock
            // @ts-expect-error
            path={"https:" + artist.fields.image?.fields.file?.url}
            name={artist.fields.name}
            role={artist.fields.role}
            role2={artist.fields.role2}
          />
        ))}
      </div>
    </div>
  );
};

export default page;
