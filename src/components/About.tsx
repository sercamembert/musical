import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
interface Props {}

const About = () => {
  return (
    <div
      className="padding flex gap-[31px] lg:gap-[41px] xl:gap-[51px] 2xl:gap-[53px] 3xl:gap-[56px] desktop:gap-[63px] ultra:gap-[80px]
    mt-[135px] mb-[81px] md:mt-0 md:mb-[74px] lg:mb-[104px] xl:mb-[130px] 3xl:mb-[140px] desktop:mb-[160px] ultra:mb-[240px]"
    >
      <div className="flex flex-col w-full">
        <h2 className="section-heading leading-none">O Projekcie</h2>
        <p className="font-medium text-[12px] md:text-[9.93px] lg:text-[12.97px] xl:text-[16.21px] 3xl:text-[17.83px] desktop:text-[20px] ultra:text-[29px] mt-[10px] opacity-70">
          Złote Głosy Musicalu to projekt skupiający najpiękniejsze musicalowe
          utwory zaśpiewane przez najlepsze głosy polskiej sceny muzycznej.
          Odtwórcy głównych ról musicalowych wykonają popularne, pełne
          emocjonalnego ładunku songi z uwielbianych na całym świecie musicali.
          W muzycznej podróży usłyszymy utwory z najpopularniejszych światowych
          produkcji takich jak Upiór w Operze, Nędznicy, Mamma Mia, Koty, West
          Side Story, Moulin Rouge, Miss Saigon, Six, We Will Rock You czy
          Wicked.
        </p>
        <Link href="/onas">
          <button
            className="bg-secoundary text-button-text rounded-[5px] xl:rounded-[7px] 3xl:rounded-[9px] 
          h-[30.58px] md:h-[23.73px] lg:h-[30.98px] xl:h-[37.22px] 2xl:h-[39px] 3xl:h-[41px] desktop:h-[46.11px] ultra:h-[69.23px]
          font-semibold text-[11px] md:text-[8px] lg:text-[10px] xl:text-[13.62px] desktop:text-[15px] ultra:text-[23px] px-3 xl:px-6
          w-[47%] md:w-[40%] mt-[15px] md:mt-[13px] lg:mt-[16px] xl:mt-[21px] button-animation cursor-pointer"
          >
            Dowiedz się więcej
          </button>
        </Link>
      </div>
      <Image
        src="/images/about/image.png"
        alt="Złote głosy musicalu"
        width={700}
        height={466.19}
        className="hidden md:block w-[250.16px] lg:w-[42%]"
      />
    </div>
  );
};

export default About;
