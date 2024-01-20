import React from "react";
import ArtistBlock from "./ArtistBlock";
import { client, getHomeArtists } from "@/lib/contentful";
import Link from "next/link";

interface Props {}

const Artists = async () => {
  const artist1 = await client.getEntry("4CwC4N50vgnyJi7jJchFGn");
  const artist2 = await client.getEntry("UxQguEdb1kgujQ3KOdYV6");
  const artist3 = await client.getEntry("3dtj9tguiUk97yo612aphK");
  return (
    <div className="padding flex flex-col section-space mb-[57px] md:mb-[74px] lg:mb-[104px] xl:mb-[130px] 3xl:mb-[140px] desktop:mb-[160px] ultra:mb-[240px]">
      <h2 className="section-heading text-center">Artyści</h2>
      <div
        className="mx-auto w-full grid grid-cols-1 md:grid-cols-3 max-w-[250px] md:max-w-full
        gap-y-[40px] md:gap-x-[62px] lg:gap-x-[81px] xl:gap-x-[101px] 2xl:gap-x-[106px] desktop:gap-x-[124px] ultra:gap-x-[185px]"
      >
        <ArtistBlock
          // @ts-expect-error
          path={"https:" + artist1.fields.image?.fields.file?.url}
          name={artist1.fields.name}
          role={artist1.fields.role}
          role2={artist1.fields.role2}
        />
        <ArtistBlock
          // @ts-expect-error
          path={"https:" + artist2.fields.image?.fields.file?.url}
          name={artist2.fields.name}
          role={artist2.fields.role}
          role2={artist2.fields.role2}
        />
        <ArtistBlock
          // @ts-expect-error
          path={"https:" + artist3.fields.image?.fields.file?.url}
          name={artist3.fields.name}
          role={artist3.fields.role}
          role2={artist3.fields.role2}
        />
      </div>
      <Link href="/artysci" className="mx-auto">
        <button
          className="bg-secoundary text-button-text rounded-[3px] xl:rounded-[5px] 3xl:rounded-[9px] h-[30.58px] md:h-[22.73px] lg:h-[28.98px] xl:h-[36px] 3xl:h-[39.84px] desktop:h-[44.61px] ultra:h-[66.17px]
        font-semibold text-[10px] md:text-[8px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] desktop:text-[15px] ultra:text-[21.57px] px-3 xl:px-6
        w-[186.54px] md:w-auto md:min-w-[132.49px] lg:min-w-[171.81px] xl:min-w-[214.77px] 2xl:min-w-[224.64px] 3xl:min-w-[236.38px] desktop:min-w-[264.69px] ultra:min-w-[392.6px]
        button-animation cursor-pointe mx-auto mt-[15px] md:mt-[13px] lg:mt-[16px] xl:mt-[21px] 2xl:mt-[24px] desktop:mt-[27px] ultra:mt-[60px]"
        >
          Zobacz wszystkich artystów
        </button>
      </Link>
    </div>
  );
};

export default Artists;
