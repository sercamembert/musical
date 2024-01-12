import React from "react";
import Image from "next/image";
interface Props {}

const About = () => {
  return (
    <div
      className="padding flex gap-[31px] lg:gap-[41px] xl:gap-[51px] 2xl:gap-[53px] 3xl:gap-[56px] desktop:gap-[63px] ultra:gap-[80px]
    mt-[135px] mb-[81px] md:mt-0 md:mb-[74px] lg:mb-[104px] xl:mb-[130px] 3xl:mb-[140px] desktop:mb-[160px] ultra:mb-[240px]"
    >
      <div className="flex flex-col w-full">
        <h2 className="section-heading leading-none">O Projekcie</h2>
        <p className="font-medium text-[12px] md:text-[9.93px] lg:text-[12.97px] xl:text-[16.21px] 3xl:text-[17.83px] desktop:text-[20px] ultra:text-[29px] mt-[10px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <button
          className="bg-secoundary text-button-text rounded-[5px] xl:rounded-[7px] 3xl:rounded-[9px] 
          h-[30.58px] md:h-[23.73px] lg:h-[30.98px] xl:h-[37.22px] 2xl:h-[39px] 3xl:h-[41px] desktop:h-[46.11px] ultra:h-[69.23px]
          font-semibold text-[11px] md:text-[8px] lg:text-[10px] xl:text-[13.62px] desktop:text-[15px] ultra:text-[23px] px-3 xl:px-6
          w-[47%] md:w-[40%] mt-[15px] md:mt-[13px] lg:mt-[16px] xl:mt-[21px] button-animation cursor-pointer"
        >
          Dowiedz się więcej
        </button>
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
