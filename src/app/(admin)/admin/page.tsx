import Card from "@/components/Card";
import SidebarComp from "@/components/SidebarComp";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className=" w-full h-full  relative ">
      <div className=" flex flex-col w-full min-h-screen  relative h-fit">
        <div className=" w-full flex-col   flex justify-center h-[60vh] absolute left-0 bg-brand/ORANGE text-black">
          <h1 className="mb-[2rem] w-4/5 mx-auto  text-xl font-black leading-9 z-20">
            Dashboard
          </h1>

          <div className="absolute right-3 -bottom-10 w-fit h-fit">
            <Image
              className=" object-cover object-center"
              src="/svg1.png"
              height={500}
              width={400}
              alt="3dsvg"
            />
          </div>
          <div className="absolute z-10 -left-[100px]  -bottom-[100px] w-fit h-fit">
            <Image
              className=" object-cover object-center"
              src="/svg2.png"
              height={500}
              width={400}
              alt="3dsvg"
            />
          </div>
        </div>
        <div className="flex absolute w-4/5 z-50 gap-10  top-[35vh] left-1/2 -translate-x-1/2   flex-wrap ">
          <Card title="Students enrolled" subtext="100" />
          <Card title="Students enrolled" subtext="100" />
          <Card title="Students enrolled" subtext="100" />
          <Card title="Students enrolled" subtext="100" />
          <Card title="Students enrolled" subtext="100" />
          <Card title="Students enrolled" subtext="100" />
          <Card title="Students enrolled" subtext="100" />
          <Card title="Students enrolled" subtext="100" />
        </div>
      </div>
    </div>
  );
};

export default page;
