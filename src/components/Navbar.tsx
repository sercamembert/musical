"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Squash as Hamburger } from "hamburger-react";

const variants = {
  open: { x: 0 },
  closed: { x: 800 },
};
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <motion.div
        className="fixed w-screen h-full top-[80px] bg-black padding text-[40px] flex flex-col gap-10 md:hidden z-50 "
        animate={isOpen ? "open" : "closed"}
        transition={{ duration: 0.5 }}
        variants={variants}
        initial={{ x: 800 }}
      >
        <Link
          href="/onas"
          className="font-bold"
          onClick={() => {
            setIsOpen(false);
          }}
        >
          O Projekcie
        </Link>
        <Link
          href="/#galeria"
          className="font-bold"
          onClick={() => {
            setIsOpen(false);
          }}
        >
          Galeria
        </Link>
        <Link
          href="/artysci"
          className="font-bold"
          onClick={() => {
            setIsOpen(false);
          }}
        >
          Artyści
        </Link>
        <Link
          href="/wydarzenia"
          className="font-bold cursor-pointer"
          onClick={() => {
            setIsOpen(false);
          }}
        >
          Wydarzenia
        </Link>
      </motion.div>

      <nav
        className={`w-full padding h-[80px] ${
          isOpen && "bg-black"
        } fixed top-0 flex items-center justify-between xl:h-[100px] bg-none md:bg-none z-50 ${
          isScrolled && "bg-black"
        }`}
      >
        <a href="/">Logo</a>

        <div className="md:hidden">
          <Hamburger toggled={isOpen} size={17} toggle={setIsOpen} />
        </div>

        <div className="hidden md:flex items-center">
          <Link
            href="/onas"
            className="font-medium text-[7.82px] lg:text-[10px] xl:text-[12.81px] 2xl:text-[14.67px] desktop:text-[17.52px] hover:text-primary duration-500 "
          >
            O Projekcie
          </Link>
          <Link
            href="/#galeria"
            className="font-medium text-[7.82px] lg:text-[10px] xl:text-[12.81px] 2xl:text-[14.67px] desktop:text-[17.52px] mx-[38px] lg:mx-[49px] xl:mx-[62px] 2xl:mx-[72px] desktop:mx-[85px] hover:text-primary duration-500"
          >
            Galeria
          </Link>
          <Link
            href="/artysci"
            className="cursor-pointer font-medium text-[7.82px] lg:text-[10px] xl:text-[12.81px] 2xl:text-[14.67px] desktop:text-[17.52px] hover:text-primary duration-500"
          >
            Artyści
          </Link>

          <Link
            href="/wydarzenia"
            className="md:ml-[31px] lg:ml-[40px] xl:ml-[57px] 2xl:ml-[60px]"
          >
            <button
              className="bg-secoundary text-button-text rounded-[5px] xl:rounded-[10px]  h-[24px]  lg:h-[30px]  xl:h-[39.31px]  2xl:h-[45px]  desktop:h-[53px]
              font-semibold text-[7.82px] lg:text-[10px] xl:text-[12.81px] 2xl:text-[14.67px] desktop:text-[17.52px] px-3 xl:px-6 
              button-animation"
            >
              Wydarzenia
            </button>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
