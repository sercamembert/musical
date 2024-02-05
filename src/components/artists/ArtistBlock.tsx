import React from "react";
import Image from "next/image";

interface Props {
  path: any;
  name: any;
  role: any;
  role2: any;
}

const ArtistBlock = ({ path, name, role, role2 }: Props) => {
  return (
    <div className="flex flex-col w-full gap-y-[8px] 2xl:gap-y-[10px] ultra:gap-y-[20px] ">
      <Image
        src={path}
        alt="Artysta"
        width={500}
        height={500}
        className="w-full rounded-[9.14px] md:rounded-[5.86px] lg:rounded-[7.58px] xl:rounded-[10px] 3xl:rounded-[12px] aspect-square"
        quality={100}
      />
      <div>
        <h3 className="font-semibold text-[17px] md:text-[14px] lg:text-[18px] xl:text-[23px] 3xl:text-[25px] desktop:text-[28px] ultra:text-[42.67px]">
          {name}
        </h3>
        <p className="text-[11px] md:text-[10px] lg:text-[12px] xl:text-[16px] ultra:text-[23px] opacity-70">
          {role}
        </p>
        <p className="text-[11px] md:text-[10px] lg:text-[12px] xl:text-[16px] ultra:text-[23px] opacity-70">
          {role2}
        </p>
      </div>
    </div>
  );
};

export default ArtistBlock;
