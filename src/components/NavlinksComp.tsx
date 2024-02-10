"use client";
import Link from "next/link";
import React from "react";
const Navlinks = [
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
const NavlinksComp = () => {
  return (
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
  );
};

export default NavlinksComp;
