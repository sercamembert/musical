import React from "react";
import Image from "next/image";
interface Props {}

const Hero = () => {
  return (
    <div
      className="w-full padding  bg-center bg-cover flex flex-col items-center
    min-h-[300px] md:min-h-[400px] lg:min-h-[507.02px] xl:min-h-[640px] 2xl:min-h-[713px] 3xl:min-h-[760px] ultra:min-h-[1150px]
    relative pt-[80px] lg:pt-[100px] xl:pt-[150px] 2xl:pt-[170px] desktop:pt-[190px] ultra:pt-[240px]
    "
    >
      <Image
        src="/images/hero/glow.png"
        alt="background"
        width={984.42}
        height={591.77}
        className="absolute mx-auto my-auto left-0 right-0 -top-3 bottom-0 z-[1] no-blur"
      />
      <div className="w-full h-full absolute inset-0 bg-[url('/images/hero/background.png')] bg-center bg-cover blur z-0"></div>
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
        className="font-medium text-center text-[12px] md:text-[10.27px] lg:text-[13.69px] xl:text-[17.11px] 2xl:text-[19.25px] 3xl:text-[20.54px] desktop:text-[23px]
        mt-[10px]  z-[1] ultra:text-[34px]
      "
      >
        Nasze Koncerty w Operach - Sztuka Wzniosła, Dźwięki Niezwykłe: Zanurz
        Się w Świecie
        <br className="hidden md:inline" /> Wyjątkowej Muzyki, Gdzie Każdy Ton
        Jest Misternie Skomponowanym Elementem
        <br className="hidden md:inline" /> Niezapomnianej Opowieści.
      </p>

      <button
        className="bg-secoundary text-button-text rounded-[3px] xl:rounded-[5px] 3xl:rounded-[9px] h-[30.58px] md:h-[27.73px] lg:h-[36.98px] xl:h-[46.22px] 2xl:h-[52px] 3xl:h-[55px] desktop:h-[62.11px] ultra:h-[92.12px]
        font-semibold text-[9px] md:text-[9px] lg:text-[12.68px] xl:text-[15.62px] 2xl:text-[18.69px] desktop:text-[20px] ultra:text-[30.32px] px-3 xl:px-6
        w-[160.54px] md:w-auto md:min-w-[116.3px] lg:min-w-[150.42px] xl:min-w-[191.92px] 2xl:min-w-[221.11px] 3xl:min-w-[224.42px] desktop:min-w-[247.22px] ultra:min-w-[605.9px]
        mt-[15px] md:mt-[13px] lg:mt-[16px] xl:mt-[21px] 2xl:mt-[24px] desktop:mt-[27px] ultra:mt-[35px] button-animation cursor-pointer z-[2]"
      >
        <p className="hidden md:block">Sprawdź nadchodzące wydarzenia</p>
        <p className="block md:hidden">Dowiedz się więcej</p>
      </button>
    </div>
  );
};

export default Hero;
