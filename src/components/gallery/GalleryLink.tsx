import Link from "next/link";
import React from "react";

interface Props {
  location: any;
  date: any;
  entryId: any;
}

const GalleryLink = ({ location, date, entryId }: Props) => {
  return (
    <Link
      href={`/gallery/${entryId}`}
      className="flex text-[21px] md:text-[14px] lg:text-[18px] xl:text-[23px] 2xl:text-[24px] 3xl:text-[25px] desktop:text-[29px] ultra:text-[42px]
      gap-[10px] hover:brightness-75 duration-300
      "
    >
      <p className="font-semibold">{location}</p>
      <p className="opacity-70">{date}</p>
    </Link>
  );
};

export default GalleryLink;
