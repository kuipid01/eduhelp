"use client";
import React, { useState } from "react";
import { Links } from "./SidebarComp";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const SmallScreenNav = () => {
  const [showNav, setshowNav] = useState(false);
  return (
    <>
      {showNav && (
        <div
          onClick={() => setshowNav(false)}
          className=" w-full h-screen top-0 fixed opacity-50 z-[300] bg-gray-500 left-0 "
        ></div>
      )}
      <div className="z-[400] sticky items-center top-[0vh]   overflow-y-auto left-0 p-1 min-w-[40px] flex-col   bg-gray-100 h-screen justify-between  text-black w-fit  ">
        {showNav ? (
          <X className="cursor-pointer" onClick={() => setshowNav(false)} />
        ) : (
          <Menu className="cursor-pointer" onClick={() => setshowNav(true)} />
        )}

        {showNav && (
          <ul className="flex text-nowrap flex-col py-3 text-black w-full gap-5">
            {Links.map((link) => (
              <Link key={link.id} href={link?.link || "/"}>
                <li
                  className={`cursor-pointer  flex w-full  gap-5 px-2 items-center text-sm font-medium  hover:bg-brand/prim-blue/30 transition-all rounded-2xl ${
                    link.active && " bg-brand/prim-blue/90"
                  }   py-2`}
                >
                  {" "}
                  <span>{link.icon}</span>
                  <span> {link.text}</span>
                </li>
              </Link>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default SmallScreenNav;
