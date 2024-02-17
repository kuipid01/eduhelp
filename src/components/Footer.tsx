"use client";
import Image from "next/image";
import React from "react";

import Link from "next/link";
import Logo from "../../public/logo.svg";
import NavlinksComp from "./NavlinksComp";
import { Copyright, Facebook, Instagram, Twitter } from "lucide-react";
const Footer = () => {
  const currentDate = new Date();

  // Format the date to YYYY format
  const currentYear = currentDate.getFullYear();
  return (
    <>
      <div className="flex   sm:hidden px-5 flex-col gap-5 justify-center items-center text-white bg-brand/prim-blue rounded-t-3xl  h-[40vh] w-full">
        <h1 className="sm:max-w-[850px]  leading-[150%] w-full text-lg sm:text-3xl font-medium text-center">
          Elevate Learning Experiences with Our School Management Solution
        </h1>
        <div className="w-full sm:w-2/4  flex overflow-hidden rounded-3xl h-[50px] bg-white shadow ">
          <input
            placeholder="edu@edu.com"
            type="text"
            className="px-3 outline-none text-black w-full"
          />
          <button className="w-[250px] font-bold text-sm capitalize h-full bg-brand/NEUTRAL text-white rounded-3xl">
            Subscribe Now
          </button>
        </div>
      </div>
      <footer
        className="h-fit sm:mt-[4rem] relative flex flex-col px-10
  py-5  justify-end sm:h-[70vh] bg-brand/NEUTRAL"
      >
        <div className="hidden sm:flex flex-col gap-5 justify-center items-center text-white bg-brand/prim-blue absolute -top-[25vh] left-1/2 -translate-x-1/2 rounded-3xl h-[50vh] w-4/5">
          <h1 className="sm:max-w-[850px]  leading-[150%] w-full text-lg sm:text-3xl font-medium text-center">
            Elevate Learning Experiences with Our School Management Solution
          </h1>
          <div className=" w-2/4  flex overflow-hidden rounded-3xl h-[50px] bg-white shadow ">
            <input
              placeholder="edu@edu.com"
              type="text"
              className="px-3 outline-none text-black flex-1"
            />
            <button className="w-fit font-bold text-sm capitalize px-5 h-full bg-brand/NEUTRAL text-white rounded-3xl">
              Subscribe Now
            </button>
          </div>
        </div>
        <div className=" w-full text-white sm:flex-row flex-col flex justify-between ">
          <div className="flex h-fit  items-center  gap-3">
            <Image src={Logo} height={50} width={50} alt="logo" />
            <h1 className=" font-semibold">Eduhelp</h1>
          </div>
          <NavlinksComp />
        </div>
        <hr className=" w-full h-[1px] bg-neutral-700 mt-[3rem] mb-[2rem]" />
        <div className="flex sm:flex-row gap-5 flex-col-reverse justify-between text-neutral-400">
          <div>
            &copy; {currentYear} <span>Eduhelp Softwares Ltd</span>
          </div>
          <div className=" flex gap-3 ">
            <Facebook />
            <Twitter />
            <Instagram />
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
