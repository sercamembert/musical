import React from "react";
import Image from "next/image";
import Link from "next/link";
import { format, isValid, parseISO } from "date-fns";

interface Props {
  path: any;
  location: any;
  subLocation: any;
  entryId: any;
  data: any;
}

const ArtistBlock = ({ path, location, subLocation, entryId, data }: Props) => {
  if (!data || !isValid(parseISO(data))) {
    console.error("Invalid date format:", data);
    return null;
  }

  const parsedDate = parseISO(data);

  const formattedDate = format(parsedDate, "dd.MM.yyyy");
  return (
    <Link
      href={`/wydarzenia/${entryId}`}
      className="flex flex-col w-full gap-y-[8px] 2xl:gap-y-[10px] ultra:gap-y-[20px] hover:brightness-75 duration-300 "
    >
      <Image
        src={path}
        alt="Event"
        width={500}
        height={500}
        className="w-full rounded-[9.14px] md:rounded-[5.86px] lg:rounded-[7.58px] xl:rounded-[10px] 3xl:rounded-[12px]"
        quality={100}
      />
      <div>
        <div className="flex justify-between items-center">
          <h3 className="font-semibold text-[17px] md:text-[14px] lg:text-[18px] xl:text-[23px] 3xl:text-[25px] desktop:text-[28px] ultra:text-[42.67px]">
            {location}
          </h3>
          <p className=" text-[12px] md:text-[10px] lg:text-[12px] xl:text-[15.49px] desktop:text-[19px] ultra:text-[28.31px] opacity-70">
            {formattedDate}
          </p>
        </div>

        <p className="text-[11px] md:text-[10px] lg:text-[12px] xl:text-[15.49px] desktop:text-[19px] ultra:text-[28.31px] opacity-70">
          {subLocation}
        </p>
      </div>
    </Link>
  );
};

export default ArtistBlock;
