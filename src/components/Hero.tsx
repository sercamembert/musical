import React from "react";
import Image from "next/image";
import Link from "next/link";
interface Props {}

const Hero = () => {
  return (
    <div
      className="w-full padding  bg-center bg-cover flex flex-col items-center
    min-h-[300px] md:min-h-[400px] lg:min-h-[507.02px] xl:min-h-[640px] 2xl:min-h-[713px] 3xl:min-h-[760px] ultra:min-h-[1150px]
    relative pt-[80px] lg:pt-[100px] xl:pt-[150px] 2xl:pt-[170px] desktop:pt-[190px] ultra:pt-[240px]
    mb-[15px] md:mb-[35px] lg:mb-[50px] xl:mb-[62px] 2xl:mb-[82px] desktop:mb-[100px] ultra:mb-[148px]
    "
    >
      <Image
        src="/images/hero/glow.png"
        alt="background"
        width={984.42}
        height={591.77}
        className="absolute mx-auto my-auto left-0 right-0 -top-3 bottom-0 z-[1] no-blur"
      />
      <div className="w-full h-full absolute inset-0 z-0">
        <Image
          src="/images/hero/background.webp"
          alt="background"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="blur"
        />
      </div>
      <h1
        className="uppercase text-primary font-headingSC leading-none 
        text-[47px] md:text-[62.13px] lg:text-[82.84px] xl:text-[103.55px] 2xl:text-[116.49px] 3xl:text-[124.26px] desktop:text-[139.15px] ultra:text-[206.38px] z-[1]"
      >
        Złote Głosy
      </h1>
      <p
        className="text-primary font-heading font-medium leading-none
        text-[18px] md:text-[20.72px] lg:text-[27.63px] xl:text-[34.54px] 2xl:text-[38.86px] 3xl:text-[41.45px] desktop:text-[46.41px] ultra:text-[68.84px] z-[1]"
      >
        Musicalu
      </p>
      <p
        className="text-center text-[12px] md:text-[10.27px] lg:text-[13.69px] xl:text-[17.11px] 2xl:text-[19.25px] 3xl:text-[20.54px] desktop:text-[23px]
        mt-[10px] z-[1] ultra:text-[34px] opacity-90 w-full md:w-[456px] lg:w-[608.8px] xl:w-[761px] 2xl:w-[856.13px] 3xl:w-[913.2px] desktop:w-[1022.59px] ultra:w-[70%]
      "
      >
        To niezapomniane musicalowe hity wszechczasów. W najpiękniejszych
        polskich operach i filharmoniach usłyszymy Złote Głosy znanych i
        lubianych artystów scen musicalowych przy akompaniamencie orkiestry
        znakomitych muzyków.
      </p>
      <Link href="/wydarzenia" className="z-[2]">
        <button
          className="bg-secoundary text-button-text rounded-[5px] xl:rounded-[7px] 3xl:rounded-[9px] 
          h-[30.58px] md:h-[23.73px] lg:h-[30.98px] xl:h-[37.22px] 2xl:h-[39px] 3xl:h-[41px] desktop:h-[46.11px] ultra:h-[69.23px]
          font-semibold text-[11px] md:text-[8px] lg:text-[10px] xl:text-[13.62px] desktop:text-[15px] ultra:text-[23px] px-3 xl:px-6
          mt-[15px] md:mt-[13px] lg:mt-[16px] xl:mt-[21px] 2xl:mt-[24px] desktop:mt-[27px] ultra:mt-[35px] button-animation cursor-pointer z-[2]
          w-[160.54px] md:w-auto md:min-w-[116.3px] lg:min-w-[150.42px] xl:min-w-[191.92px] 2xl:min-w-[221.11px] 3xl:min-w-[224.42px] desktop:min-w-[247.22px] ultra:min-w-[605.9px]
          "
        >
          <p className="md:hidden">Dowiedz się więcej</p>
          <p className="hidden md:block">Sprawdź nadchodzące wydarzenia</p>
        </button>
      </Link>
    </div>
  );
};

export default Hero;
