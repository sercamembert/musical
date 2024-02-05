import Link from "next/link";
import React from "react";

interface Props {
  path: any;
  status: any;
}

const EventTicket = ({ path, status }: Props) => {
  return (
    <div className="z-10 flex flex-col gap-[5px] md:gap-[4px] lg:gap-[6px] xl:gap-[7px] 2xl:gap-[8px] ultra:gap-[12px]">
      <Link href={path} className="mx-auto" target="_blank">
        <button
          className="bg-secoundary text-button-text rounded-[3px] xl:rounded-[5px] 3xl:rounded-[9px] h-[30.58px] md:h-[24px] lg:h-[32px] xl:h-[40px] 3xl:h-[45px] desktop:h-[53px] ultra:h-[80px]
  font-semibold text-[11px] md:text-[8px] lg:text-[10px] xl:text-[13px] 2xl:text-[16px] desktop:text-[18px] ultra:text-[26px] px-3 xl:px-6
  w-[140.54px] md:w-auto md:min-w-[125.49px] lg:min-w-[167.81px] xl:min-w-[210.77px] 2xl:min-w-[236.64px] 3xl:min-w-[250.38px] desktop:min-w-[280.69px] ultra:min-w-[419.56px]
  button-animation cursor-pointer mx-auto mt-[15px] md:mt-[13px] lg:mt-[16px] xl:mt-[21px] 2xl:mt-[24px] desktop:mt-[27px] ultra:mt-[60px]"
        >
          Zakup Bilet
        </button>
      </Link>
      <div
        className="flex justify-center text-[8px] md:text-[7px] lg:text-[9.58px] xl:text-[11.98px] 2xl:text-[13.48px] 3xl:text-[14.37px] desktop:text-[16.1px] ultra:text-[23.96px]
   font-medium"
      >
        <p className="text-[#FBFCD4]">Dostępność Biletów:&nbsp;</p>
        <p
          className={`${
            status === "Ostatnie sztuki"
              ? "text-[#C44C4C]"
              : status === "Dostępne"
                ? "text-[#89CE00]"
                : "text-[#C44C4C]"
          }`}
        >
          {status}
        </p>
      </div>
    </div>
  );
};

export default EventTicket;
