import Image from "next/image";
import React from "react";
import { Bell, BellRing, Search } from "lucide-react";
const AdminNav = () => {
  return (
    <nav className=" flex absolute px-3 top-0 left-0 w-full bg-white text-black z-50 justify-between">
      <div className=" flex items-center">
        <h1 className=" font-black">Perfect Touch</h1>
      </div>
      <div className=" w-fit md:min-w-[300px] max-w-[400px] items-center flex justify-between">
        <div className=" flex gap-3 items-center">
          <div className="relative p-1 bg-brand/ORANGE size-[30px] md:w-[50px] md:h-[50px] rounded-full ter overflow-hidden">
            <Image
              fill
              className="object-contain relative"
              src="/svg1.png"
              alt="profilimag"
            />
          </div>
          <div className="text-xs md:text-auto flex flex-col gap-1">
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

export default AdminNav;
