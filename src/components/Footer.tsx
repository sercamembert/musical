import { Facebook, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";
import React from "react";
import FooterLinks from "./FooterLinks";

interface Props {}

const Footer = () => {
  return (
    <div
      className=" mt-[57px] md:mt-[74px] lg:mt-[104px] xl:mt-[130px] 3xl:mt-[140px] desktop:mt-[160px] ultra:mt-[240px] w-full text-white border-t border-[#333333] min-h-[300px] md:min-h-[265px] lg:min-h-[350px] xl:min-h-[430px] 2xl:min-h-[490px] 3xl:min-h-[529px] ultra:min-w-[850px]
    pt-[66px] md:pt-[80px] lg:pt-[107px] xl:pt-[134px] 2xl:pt-[151px] 3xl:pt-[161px] desktop:pt-[180px] ultra:pt-[267px]
    "
    >
      <div className="w-full h-full flex flex-col md:flex-row  ">
        <div className="flex justify-between padding w-full">
          <div className="flex flex-col gap-[10px] lg:gap-[12px] xl:gap-[15px] 2xl:gap-[17px] 3xl:gap-[18px] desktop:gap-[20px] ultra:gap-[30px]">
            <p className="text-primary font-bold text-[13px] md:text-[12px] lg:text-[16px] xl:text-[20px] 2xl:text-[22.39px] desktop:text-[26px] ultra:text-[40px]">
              Złote Głosy Musicalu
            </p>
            <p className="footer-text">
              Adres: ul. Projektowa 1 <br />
              99-000 Miasto
            </p>
            <p className="footer-text">NIP: 777 999 88 88</p>
            <p className="footer-text">REGON: 45643137</p>
          </div>
          <div className="flex flex-col gap-[10px] lg:gap-[12px] xl:gap-[15px] 2xl:gap-[17px] 3xl:gap-[18px] desktop:gap-[20px] ultra:gap-[30px]">
            <p className="font-bold text-[13px] md:text-[12px] lg:text-[16px] xl:text-[20px] 2xl:text-[22.39px] desktop:text-[26px] ultra:text-[40px]">
              KONTAKT
            </p>
            <p className="footer-text">Tel.: 555 666 444</p>
            <p className="footer-text">Email: contact@firma.com</p>
            <p className="md:hidden opacity-100 footer-text">
              Polityka Prywatności
            </p>
          </div>
          <div
            className="hidden md:flex flex-row justify-center md:flex-col font-medium col-span-2 md:col-span-1
        text-[12px] lg:text-[16px] xl:text-[20px] 2xl:text-[22.39px] desktop:text-[26px] ultra:text-[40px]
        mt-[61px] md:mt-0 gap-[18px] md:gap-[16px] xl:gap-[27px] 2xl:gap-[31px] 3xl:gap-[33px] desktop:gap-[37px] ultra:gap-[53px]
        
        "
          >
            <Link href="/artysci">Artyści</Link>
            <Link href="/wydarzenia">Wydarzenia</Link>
            <Link href="/onas">O projekcie</Link>
            <Link href="/#galeria">Galeria</Link>
          </div>
        </div>

        <div className="md:hidden">
          <FooterLinks />
        </div>
      </div>
      <div
        className="flex justify-center md:justify-between padding mt-[33px] md:mt-[69px] lg:mt-[92px] xl:mt-[115px] 2xl:mt-[129px] 3xl:mt-[138px] desktop:mt-[155px] ultra:mt-[229px]
      mb-[69px] md:mb-[12px] lg:mb-[15px] xl:mb-[20px] 2xl:mb-[22px] 3xl:mb-[24px] desktop:mb-[26px] ultra:mb-[82px]
      
      "
      >
        <Link
          href="https://outofplace.space/"
          className="opacity-50 text-center text-[10px] md:text-[8.53px] lg:text-[11.38px] xl:text-[14.22px] 2xl:text-[16px] 3xl:text-[17.07px] desktop:text-[19.11px] ultra:text-[28.35px]"
        >
          Strona internetowa wykonana przez outofplace.space
        </Link>
        <p className="hidden md:block opacity-50 font-medium text-center text-[10px] md:text-[8.53px] lg:text-[11.38px] xl:text-[14.22px] 2xl:text-[16px] 3xl:text-[17.07px] desktop:text-[19.11px] ultra:text-[28.35px]">
          Polityka Prywatności
        </p>
      </div>
    </div>
  );
};

export default Footer;
