"use client";
import Image from "next/image";
import React, { useState } from "react";
import Logo from "../../public/logo.svg";
import Link from "next/link";
import ButtonComp from "./Button";
import MenuComp from "./Menu";
import NavlinksComp from "./NavlinksComp";

const Navbar = () => {
  const [menuOpen, setmenuOpen] = useState(false);
  return (
    <nav className=" h-[10vh] z-50 w-full  justify-between items-center flex ">
      <div className="flex h-fit  items-center  gap-3">
        <Image src={Logo} height={50} width={50} alt="logo" />
        <h1 className=" font-semibold">Eduhelp</h1>
      </div>
      <NavlinksComp />
      <div className="sm:flex hidden gap-5 text-black">
        <ButtonComp link="/register" transparent={false} text="Sign up" />
        <ButtonComp transparent={true} text="Log in" />
      </div>
      <MenuComp menuOpen={menuOpen} />
    </nav>
  );
};

export default Navbar;
