import { Bell, BellRing, Search } from "lucide-react";
import Image from "next/image";
import React from "react";

const StudentNav = () => {
  return (
    <nav className=" flex justify-between">
      <div className="h-[50px] overflow-hidden flex min-w-[300px] max-w-[500px] relative bg-white shadow shadow-neutral-400 rounded-3xl">
        <input
          className=" outline-none h-full px-5 placeholder:text-neutral-700 text-neutral-700 flex-1"
          alt="search box"
          type="text"
          placeholder="Enter search item"
        />
        <Search
          className=" absolute right-3 top-1/2 -translate-y-1/2"
          color="black"
        />
      </div>
      <div className="min-w-[300px] max-w-[400px] items-center flex justify-between">
        <div className=" flex gap-3">
          <div className="relative p-1 bg-brand/ORANGE w-[50px] h-[50px] rounded-full ter overflow-hidden">
            <Image
              fill
              className="object-contain relative"
              src="/svg1.png"
              alt="profilimag"
            />
          </div>
          <div className=" flex flex-col gap-1">
            <h1 className=" text-black font-bold">John Doe</h1>
            <p className="font-light text-gray-700">SS1</p>
          </div>
        </div>
        <div className="w-fit  h-fit relative">
          <div className="w-1 h-1 absolute rounded-full bg-red-500 top-1/2 -translate-y-1/2"></div>
          <BellRing color="black" />
        </div>
      </div>
    </nav>
  );
};

export default StudentNav;
