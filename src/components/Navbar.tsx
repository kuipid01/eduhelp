"use client";
import Image from "next/image";
import React, { useState } from "react";
import Logo from "../../public/logo.png";
import Link from "next/link";
import ButtonComp from "./Button";
import MenuComp from "./Menu";
export const Navlinks = [
  {
    name: "Home",
    id: 1,
    active: true,
  },
  {
    name: "About",
    id: 2,
    active: false,
  },
  {
    name: "Customer Care",
    id: 3,
    active: false,
  },
];
const Navbar = () => {
  const [menuOpen, setmenuOpen] = useState(false);
  return (
    <nav className=" h-[10vh] w-full  justify-between items-center flex ">
      <div className="flex h-fit  items-center  gap-3">
        <Image src={Logo} height={50} width={50} alt="logo" />
        <h1 className=" font-semibold">Eduhelp</h1>
      </div>
      <div className=" sm:flex hidden  gap-5 items-center">
        {Navlinks.map((link) => (
          <Link
            className={`${
              link.active ? "text-white font-bold" : " text-neutral/neutral-2"
            }`}
            key={link.id}
            href={link.name.toLowerCase()}
          >
            {" "}
            {link.name}{" "}
          </Link>
        ))}
      </div>
      <div className="sm:flex hidden gap-5 text-black">
        <ButtonComp transparent={false} text="Sign up" />
        <ButtonComp transparent={true} text="Log in" />
      </div>
      <MenuComp menuOpen={menuOpen} />
    </nav>
  );
};

export default Navbar;
